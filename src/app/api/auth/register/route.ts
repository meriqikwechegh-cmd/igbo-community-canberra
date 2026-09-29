import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { prisma } from '@/lib/db/prisma';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password, phone, address, suburb, state, postcode, planType } = await req.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: 'An account with this email already exists.' }, { status: 409 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 });
    }

    const passwordHash = await hash(password, 12);

    // Create household first
    const household = await prisma.household.create({
      data: {
        name: `${lastName} Household`,
        addressLine1: address,
        city: suburb,
        state,
        postalCode: postcode,
        country: 'Australia',
      },
    });

    // Create user linked to household
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        passwordHash,
        phoneNumber: phone || null,
        role: 'member',
        householdId: household.id,
      },
    });

    // Create dues subscription record
    await prisma.duesSubscription.create({
      data: {
        householdId: household.id,
        userId: user.id,
        planType: planType || 'annual',
        amount: planType === 'monthly' ? 25.00 : 250.00,
        status: 'unpaid',
      },
    });

    return NextResponse.json({ success: true, userId: user.id }, { status: 201 });
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Registration failed. Please try again.' }, { status: 500 });
  }
}
