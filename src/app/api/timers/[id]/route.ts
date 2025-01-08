import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

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

    return NextResponse.json(timer);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error updating timer' },
      { status: 500 },
    );
  }
}
