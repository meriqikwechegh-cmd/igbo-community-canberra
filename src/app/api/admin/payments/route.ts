import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import { auth } from '@/auth';

export async function GET() {
  try {
    const payments = await prisma.payment.findMany({
      orderBy: { paidAt: 'desc' },
      include: {
        user: { select: { firstName: true, lastName: true, email: true } },
        household: { select: { name: true } },
      },
      take: 100,
    });
    return NextResponse.json({ payments });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    const { userId, householdId, amount, paymentMethod = 'cash', description, notes } = await req.json();

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Valid amount is required' }, { status: 400 });
    }

    // Record the manual payment
    const payment = await prisma.payment.create({
      data: {
        userId: userId || undefined,
        householdId: householdId || undefined,
        amount: parseFloat(amount),
        paymentMethod,
        status: 'completed',
        description: description || `Manual ${paymentMethod.toUpperCase()} payment recorded by Treasurer`,
        recordedById: session?.user?.id || undefined,
      },
    });

    // Update dues subscription status to active if associated with a user or household
    if (userId) {
      await prisma.duesSubscription.updateMany({
        where: { userId },
        data: { status: 'active' },
      }).catch(() => {});
    }

    // Log this action in AuditLog
    await prisma.auditLog.create({
      data: {
        actorId: session?.user?.id || undefined,
        action: 'RECORD_OFFLINE_PAYMENT',
        targetTable: 'payments',
        targetId: payment.id,
        changes: { amount, paymentMethod, description, notes },
      },
    }).catch(() => {});

    return NextResponse.json({ success: true, payment });
  } catch (err: any) {
    console.error('Error recording offline payment:', err);
    return NextResponse.json({ error: err.message || 'Failed to record offline payment' }, { status: 500 });
  }
}
