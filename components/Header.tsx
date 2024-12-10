import Link from "next/link";
import LogOut from "@/components/LogOut";
import { getSessionCookies } from "@/auth/cookie-session";

export async function Header() {
  const sessionCookies = await getSessionCookies();

  return (
    <header>
      <Link href="/">Logo</Link>
      <nav>Navigation</nav>
      {sessionCookies && <LogOut />}
      {!sessionCookies && <Link href="/login">Login</Link>}
      <br />
      <Link href="/admin">Admin</Link>
    </header>
  );
}
