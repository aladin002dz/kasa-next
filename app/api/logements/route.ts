import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
    try {
        // Get the absolute path to the logements.json file
        const filePath = path.join(process.cwd(), 'data', 'logements.json');

        // Read the file
        const fileContents = fs.readFileSync(filePath, 'utf8');

        // Parse the JSON data
        const logements = JSON.parse(fileContents);

        // Return the logements data
        return NextResponse.json(logements);
    } catch (error) {
        console.error('Error reading logements:', error);
        return NextResponse.json(
            { error: 'Failed to fetch logements' },
            { status: 500 }
        );
    }
}
