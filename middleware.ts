import { NextRequest, NextResponse } from "next/server";
import { getSessionCookies } from "./auth/cookie-session";

export default async function middleware(request: NextRequest) {
  const cookies = await getSessionCookies();
  if (cookies?.userRole === "admin") {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/admin",
};
