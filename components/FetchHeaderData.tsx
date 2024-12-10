import { getSessionCookies } from "@/auth/cookie-session";

export default async function FetchHeaderData() {
  const cookieSession = await getSessionCookies();
  console.log("FetchHeaderData, cookieSession", cookieSession);
}
