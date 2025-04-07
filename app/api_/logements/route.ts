import logements from "@/data/logements.json";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json(logements);
}

