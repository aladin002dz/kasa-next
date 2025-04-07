import logements from "@/data/logements.json";
//import { NextResponse } from "next/server";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const logement = logements.find((logement) => logement.id === id)

  if (!logement) {
    return Response.json({ error: "Logement non trouvé" }, { status: 404 })
  }
  return Response.json(logement)
}