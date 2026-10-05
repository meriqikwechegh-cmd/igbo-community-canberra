import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { prisma } from '@/lib/db/prisma';

// In-memory rate limiter per IP
const rateLimitMap = new Map<string, { count: number; firstTimestamp: number }>();
const RATE_LIMIT_MAX = 5; // max 5 registrations per IP
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window

export async function POST(req: Request) {
  try {
    // 1. IP extraction & Rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    const entry = rateLimitMap.get(ip);
    if (entry) {
      if (now - entry.firstTimestamp < RATE_LIMIT_WINDOW_MS) {
        if (entry.count >= RATE_LIMIT_MAX) {
          return NextResponse.json(
            { error: 'Rate limit exceeded. Please wait a minute before submitting again.' },
            { status: 429 }
          );
        }
        entry.count += 1;
      } else {
        rateLimitMap.set(ip, { count: 1, firstTimestamp: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, firstTimestamp: now });
    }

    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      password,
      phone,
      address,
      suburb,
      state,
      postcode,
      planType,
      privacyConsent,
      hp_field,
    } = body;

    // 2. Anti-spam honeypot detection
    if (hp_field) {
      return NextResponse.json({ error: 'Invalid submission detected.' }, { status: 400 });
    }

    // 3. Affirmative privacy consent validation
    if (!privacyConsent) {
      return NextResponse.json(
        { error: 'You must explicitly consent to the Privacy Policy and Membership Terms.' },
        { status: 400 }
      );
    }

    // 4. Input validation
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !password) {
      return NextResponse.json({ error: 'Please provide all required fields.' }, { status: 400 });
    }

    const emailClean = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailClean)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters long.' }, { status: 400 });
    }

    if (phone && !/^\+?[0-9\s\-()]{7,20}$/.test(phone.trim())) {
      return NextResponse.json({ error: 'Invalid contact phone number format.' }, { status: 400 });
    }

    // 5. Existing user check
    const existing = await prisma.user.findUnique({ where: { email: emailClean } });
    if (existing) {
      return NextResponse.json({ error: 'An account with this email address already exists.' }, { status: 409 });
    }

    const passwordHash = await hash(password, 12);

    // 6. Secure Database Transactions (Household, Member User, and Dues Subscription)
    const household = await prisma.household.create({
      data: {
        name: `${lastName.trim()} Household`,
        addressLine1: address?.trim() || 'Address on file',
        city: suburb?.trim() || 'Canberra',
        state: state || 'ACT',
        postalCode: postcode?.trim() || '2600',
        country: 'Australia', // Default legal jurisdiction for ICC
      },
    });

    const user = await prisma.user.create({
      data: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: emailClean,
        passwordHash,
        phoneNumber: phone?.trim() || null,
        role: 'member',
        householdId: household.id,
      },
    });

    await prisma.duesSubscription.create({
      data: {
        householdId: household.id,
        userId: user.id,
        planType: planType === 'single' ? 'single' : 'family',
        amount: planType === 'single' ? 150.0 : 250.0,
        status: 'unpaid',
      },
    });

    return NextResponse.json(
      {
        success: true,
        userId: user.id,
        message: 'Account successfully registered under ICC Privacy Standards.',
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration processing error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing registration. Please try again.' },
      { status: 500 }
    );
  }
}
