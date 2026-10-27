import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import { auth } from '@/auth';
import { hash } from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const currentUser = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { household: true },
    });

    if (!currentUser?.householdId) {
      return NextResponse.json({ error: 'No associated household found.' }, { status: 400 });
    }

    const { firstName, lastName, email, phoneNumber, relationship } = await req.json();

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'First name, last name, and email are required.' }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const existing = await prisma.user.findUnique({
      where: { email: cleanEmail },
    });

    if (existing) {
      return NextResponse.json({ error: 'A member with this email already exists.' }, { status: 409 });
    }

    // Temporary generated password for family member
    const tempPasswordHash = await hash('Igbobuofu2012', 10);

    const newMember = await prisma.user.create({
      data: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: cleanEmail,
        phoneNumber: phoneNumber?.trim() || null,
        passwordHash: tempPasswordHash,
        role: 'member',
        householdId: currentUser.householdId,
        isEmailVerified: true,
      },
    });

    // Record audit log
    await prisma.auditLog.create({
      data: {
        actorId: currentUser.id,
        action: 'ADD_HOUSEHOLD_MEMBER',
        targetTable: 'users',
        targetId: newMember.id,
        changes: JSON.stringify({
          firstName: newMember.firstName,
          lastName: newMember.lastName,
          email: newMember.email,
          relationship: relationship || 'Family Member',
        }),
      },
    }).catch(() => {});

    return NextResponse.json({ success: true, member: newMember });
  } catch (err: any) {
    console.error('Error adding household member:', err);
    return NextResponse.json({ error: err.message || 'Failed to add household member' }, { status: 500 });
  }
}
