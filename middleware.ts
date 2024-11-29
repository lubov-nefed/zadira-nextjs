import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const response = await fetch(`${request.nextUrl.origin}/api`);
  const session = await response.json();
  console.log("current session by ", session.userName);
  if (session?.userName === "admin") {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/admin",
};
