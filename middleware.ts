import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/app/auth/session";
import { cookies } from "next/headers";
import { redirect } from "next/dist/server/api-utils";

const protectedRoute = "/admin";

export default async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const encryptedSession = cookieStore.get("session")?.value;
  const decryptedSession = await decrypt(encryptedSession);
  console.log(decryptedSession);

  //return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
}

export const config = {
  matcher: "/admin",
};
