import Link from "next/link";
import { getSessionCookies } from "@/auth/session";

export async function Header() {
  const isLoggedIn = await getSessionCookies();
  console.log("isLoggedIn", isLoggedIn);
  return (
    <header>
      <Link href="/">Logo</Link>
      <nav>Navigation</nav>
      {isLoggedIn && <p>You are logged in</p>}
      {!isLoggedIn && <p>You are NOT logged in</p>}
      <Link href="/login">Login</Link>
      <br />
      <Link href="/admin">Admin</Link>
    </header>
  );
}
