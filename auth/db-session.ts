import "server-only";
import { prisma } from "@/lib/prisma";
import type { User } from "@prisma/client";

export async function getDbSession(user) {
  const session = await prisma.sesion.findUnique({ where: { userName: user } });
  return session;
}

export async function createDbSession(user: User) {
  const oneHour = 3600 * 1000;
  const expiresAt = new Date(Date.now() + oneHour).toString();
  const userName = user.name;

  await prisma.session.create({
    data: {
      expiresAt,
      userName,
    },
  });
}
