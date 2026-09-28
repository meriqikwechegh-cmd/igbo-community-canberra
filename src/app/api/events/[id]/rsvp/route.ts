import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return NextResponse.json({ message: "RSVP updated", id: resolvedParams.id });
}
