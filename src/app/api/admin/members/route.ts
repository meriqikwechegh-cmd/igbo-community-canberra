import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import { auth } from '@/auth';

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        household: true,
        duesSubscriptions: true,
        payments: {
          orderBy: { paidAt: 'desc' },
          take: 3,
        },
      },
    });
    return NextResponse.json({ users });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await auth();
    const { userId, newRole } = await req.json();

    if (!userId || !newRole) {
      return NextResponse.json({ error: 'User ID and new role are required' }, { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role: newRole },
    });

    // Record audit log
    await prisma.auditLog.create({
      data: {
        actorId: session?.user?.id || undefined,
        action: 'UPDATE_MEMBER_ROLE',
        targetTable: 'users',
        targetId: userId,
        changes: { newRole },
      },
    }).catch(() => {});

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
