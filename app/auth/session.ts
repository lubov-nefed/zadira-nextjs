import "server-only";
import type { User } from "@prisma/client";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import type { SessionPayload } from "@/auth/definitions";

const secretKey = process.env.SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1hr")
    .sign(key);
}

export async function decrypt(session: string | undefined = "") {
  console.log(key);
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return null;
  }
}

export async function createSession(user: User) {
  console.log("key", key);
  const oneHour = 3600 * 1000;
  const expiresAt = new Date(Date.now() + oneHour);
  const userId = user.id;
  const session = await encrypt({ userId, expiresAt });

  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
