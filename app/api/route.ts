import { getSessionCookies } from "@/auth/cookie-session";

export async function GET() {
  const cookieSession = await getSessionCookies();
  return Response.json(cookieSession);
}
