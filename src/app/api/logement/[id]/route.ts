import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const logement = await prisma.logement.findUnique({
            where: {
                id: params.id,
            },
        });

        if (!logement) {
            return NextResponse.json(
                { error: 'Logement not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(logement);
    } catch (error) {
        console.error('Error fetching logement:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 