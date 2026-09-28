import { NextResponse } from 'next/server';
// import prisma from '@/lib/db/prisma';

export async function GET(req: Request) {
  // Fetch upcoming events
  // const events = await prisma.event.findMany({ where: { eventDate: { gte: new Date() } } });
  return NextResponse.json({ events: [] });
}

export async function POST(req: Request) {
  // Admin creates an event
  // const body = await req.json();
  // const newEvent = await prisma.event.create({ data: body });
  return NextResponse.json({ message: "Event created" }, { status: 201 });
}
