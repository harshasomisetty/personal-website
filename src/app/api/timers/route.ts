import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const timers = await prisma.timer.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(timers);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error fetching timers' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, endDate, notes, length } = body;

    const timer = await prisma.timer.create({
      data: {
        name,
        endDate: new Date(endDate),
        notes,
        length,
        createdAt: new Date(),
      },
    });

    return NextResponse.json(timer);
  } catch (error) {
    console.error('Error details:', error);
    return NextResponse.json(
      { error: 'Error creating timer' },
      { status: 500 },
    );
  }
}
