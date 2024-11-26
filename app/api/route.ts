import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await prisma.session.findUnique({
    where: { userName: "admin" },
  });
  return NextResponse.json(session);
}
