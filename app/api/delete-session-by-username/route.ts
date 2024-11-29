import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(userName: string) {
  const session = await prisma.session.delete({
    where: { userName: userName },
  });
  return NextResponse.json(session);
}
