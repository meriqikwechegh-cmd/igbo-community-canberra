import { NextResponse } from 'next/server';
// import prisma from '@/lib/db/prisma';

export async function POST(req: Request, { params }: { params: { id: string } }) {
  // const { userId, rsvpStatus } = await req.json();
  
  // const rsvp = await prisma.rsvp.upsert({
  //   where: {
  //     eventId_userId: {
  //       eventId: params.id,
  //       userId: userId
  //     }
  //   },
  //   update: {
  //     rsvpStatus
  //   },
  //   create: {
  //     eventId: params.id,
  //     userId,
  //     rsvpStatus
  //   }
  // });

  return NextResponse.json({ message: "RSVP updated" });
}
