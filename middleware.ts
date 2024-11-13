import { NextRequest, NextResponse } from "next/server";
import { getSessionCookies } from "@/auth/session";

export default async function middleware(request: NextRequest) {
  const session = await getSessionCookies();
  if (session?.userRole === "admin") {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/admin",
};
