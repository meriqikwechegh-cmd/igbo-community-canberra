import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get('type') || 'members';

    if (type === 'payments') {
      const payments = await prisma.payment.findMany({
        orderBy: { paidAt: 'desc' },
        include: { user: true, household: true },
      });

      const headers = ['Payment ID', 'Member Name', 'Email', 'Household', 'Amount (AUD)', 'Method', 'Status', 'Date', 'Description'];
      const rows = payments.map(p => [
        p.id,
        p.user ? `"${p.user.firstName} ${p.user.lastName}"` : 'N/A',
        p.user?.email || 'N/A',
        p.household?.name ? `"${p.household.name}"` : 'N/A',
        p.amount.toString(),
        p.paymentMethod,
        p.status,
        new Date(p.paidAt).toISOString(),
        `"${p.description || ''}"`,
      ]);

      const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

      return new Response(csvContent, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="igbo-canberra-payments-${Date.now()}.csv"`,
        },
      });
    }

    // Default: Export members
    const members = await prisma.user.findMany({
      include: { household: true, duesSubscriptions: true },
    });

    const headers = ['User ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Role', 'Household', 'Dues Plan', 'Dues Status', 'Joined Date'];
    const rows = members.map(m => [
      m.id,
      `"${m.firstName}"`,
      `"${m.lastName}"`,
      m.email,
      m.phoneNumber || '',
      m.role,
      m.household?.name ? `"${m.household.name}"` : 'N/A',
      m.duesSubscriptions[0]?.planType || 'None',
      m.duesSubscriptions[0]?.status || 'unpaid',
      new Date(m.createdAt).toISOString(),
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

    return new Response(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="igbo-canberra-members-${Date.now()}.csv"`,
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
