import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import { auth } from '@/auth';

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const session = await auth();
    const body = await req.json();
    const { rsvpStatus = 'yes', userId, familyMemberIds = [] } = body;

    const targetUserId = userId || session?.user?.id;

    if (!targetUserId) {
      return NextResponse.json({ error: 'Authentication required to RSVP' }, { status: 401 });
    }

    // Check event capacity
    const event = await prisma.event.findUnique({
      where: { id },
      include: { rsvps: true },
    });

    if (!event) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    const currentYesCount = event.rsvps.filter(r => r.rsvpStatus === 'yes').length;
    let finalStatus = rsvpStatus;

    if (rsvpStatus === 'yes' && event.capacityLimit && currentYesCount >= event.capacityLimit) {
      finalStatus = 'waitlist';
    }

    // Upsert RSVP for primary user
    const rsvp = await prisma.rsvp.upsert({
      where: {
        eventId_userId: {
          eventId: id,
          userId: targetUserId,
        },
      },
      update: { rsvpStatus: finalStatus },
      create: {
        eventId: id,
        userId: targetUserId,
        rsvpStatus: finalStatus,
      },
    });

    // Handle any linked family member RSVPs
    for (const famId of familyMemberIds) {
      await prisma.rsvp.upsert({
        where: {
          eventId_userId: {
            eventId: id,
            userId: famId,
          },
        },
        update: { rsvpStatus: finalStatus },
        create: {
          eventId: id,
          userId: famId,
          rsvpStatus: finalStatus,
        },
      }).catch(() => {});
    }

    return NextResponse.json({
      success: true,
      rsvpStatus: finalStatus,
      isWaitlisted: finalStatus === 'waitlist',
      message: finalStatus === 'waitlist'
        ? 'Event is at capacity. You have been added to the priority waitlist.'
        : 'RSVP confirmed successfully!',
    });
  } catch (err: any) {
    console.error('RSVP Error:', err);
    return NextResponse.json({ error: err.message || 'Failed to update RSVP' }, { status: 500 });
  }
}
