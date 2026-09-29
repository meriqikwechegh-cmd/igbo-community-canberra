import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import { auth } from '@/auth';

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: { eventDate: 'asc' },
      include: {
        rsvps: {
          include: {
            user: {
              select: { firstName: true, lastName: true, email: true },
            },
          },
        },
      },
    });

    const enrichedEvents = events.map(evt => {
      const yesCount = evt.rsvps.filter(r => r.rsvpStatus === 'yes').length;
      const waitlistCount = evt.rsvps.filter(r => r.rsvpStatus === 'waitlist').length;
      const isFull = evt.capacityLimit ? yesCount >= evt.capacityLimit : false;

      return {
        ...evt,
        yesCount,
        waitlistCount,
        isFull,
      };
    });

    return NextResponse.json({ events: enrichedEvents });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    const body = await req.json();
    const { title, description, eventDate, location, capacityLimit, fee } = body;

    if (!title || !eventDate) {
      return NextResponse.json({ error: 'Title and event date are required' }, { status: 400 });
    }

    const event = await prisma.event.create({
      data: {
        title,
        description,
        eventDate: new Date(eventDate),
        location: location || 'Canberra, ACT',
        capacityLimit: capacityLimit ? parseInt(capacityLimit) : null,
        fee: fee ? parseFloat(fee) : 0,
        createdById: session?.user?.id || undefined,
      },
    });

    return NextResponse.json({ success: true, event }, { status: 201 });
  } catch (err: any) {
    console.error('Error creating event:', err);
    return NextResponse.json({ error: err.message || 'Failed to create event' }, { status: 500 });
  }
}
