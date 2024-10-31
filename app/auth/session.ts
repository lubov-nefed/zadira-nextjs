import "server-only";
import type { User } from "@prisma/client";
import { cookies } from "next/headers";

export async function createSession(user: User) {
  const oneHour = 60 * 60 * 1000;
  const expiresAt = new Date(Date.now() + oneHour);
  const cookieStore = await cookies();
  const sessionId = user.id + crypto.randomUUID();
  cookieStore.set("session", sessionId, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
