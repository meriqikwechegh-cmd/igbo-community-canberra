import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db/prisma';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        rsvps: {
          include: {
            user: {
              include: { household: true },
            },
          },
        },
      },
    });

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    const headers = ['Event Name', 'Member Name', 'Email', 'Phone', 'Household', 'RSVP Status', 'Timestamp'];
    const rows = event.rsvps.map(r => [
      `"${event.title}"`,
      r.user ? `"${r.user.firstName} ${r.user.lastName}"` : 'Guest',
      r.user?.email || 'N/A',
      r.user?.phoneNumber || '',
      r.user?.household?.name ? `"${r.user.household.name}"` : 'N/A',
      r.rsvpStatus.toUpperCase(),
      new Date(r.updatedAt).toISOString(),
    ]);

    const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');

    return new Response(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="attendees-${event.title.replace(/[^a-z0-9]/gi, '_')}.csv"`,
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
