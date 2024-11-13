import "server-only";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import type { SessionPayload } from "@/auth/definitions";

const secretKey = process.env.SECRET;
const key = new TextEncoder().encode(secretKey);

export async function getSessionCookies() {
  const cookieStore = await cookies();
  const encryptedSession = cookieStore.get("session")?.value;
  console.log("getting session");
  if (!encryptedSession) {
    console.log("no cookies");
    return null;
  }
  console.log("encrypted", encryptedSession);
  const decryptedSession = await decrypt(encryptedSession);
  return decryptedSession;
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1hr")
    .sign(key);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("cookie decription error");
    return null;
  }
}

export async function createSession(userRole: string) {
  const oneHour = 3600 * 1000;
  const expiresAt = new Date(Date.now() + oneHour);
  const sessionId = crypto.randomUUID();
  const session = await encrypt({ sessionId, userRole, expiresAt });

  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
