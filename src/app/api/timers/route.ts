import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const timers = await prisma.timer.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    console.log('Timers fetched:', {
      count: timers?.length,
      firstTimer: timers?.[0],
    });

    return NextResponse.json({
      data: timers || [],
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error in GET /api/timers:', {
      error,
      message: error.message,
      stack: error.stack,
    });

    return NextResponse.json(
      {
        error: 'Error fetching timers',
        details:
          process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
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
