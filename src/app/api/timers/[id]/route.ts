import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    await prisma.timer.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error deleting timer' },
      { status: 500 },
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const body = await request.json();
    const { endDate } = body;

    const timer = await prisma.timer.update({
      where: {
        id: params.id,
      },
      data: {
        endDate: new Date(endDate),
      },
    });

    if (!timer) {
      return NextResponse.json({ error: 'Timer not found' }, { status: 404 });
    }

    return NextResponse.json({ data: timer });
  } catch (error) {
    console.error('Timer update error:', error);
    return NextResponse.json(
      { error: 'Error updating timer' },
      { status: 500 },
    );
  }
}
