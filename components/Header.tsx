import Link from "next/link";
import LogOut from "@/components/LogOut";
import { getSessionCookies } from "@/auth/cookie-session";

export async function Header() {
  const sessionCookies = await getSessionCookies();

  return (
    <header className="flex justify-around p-2">
      <Link href="/" className="underline hover:text-blue-700">
        Home
      </Link>
      <nav>Navigation</nav>
      {sessionCookies && <LogOut />}
      {!sessionCookies && (
        <Link
          href="/login"
          className="border border-gray-500 rounded px-2 pb-1 hover:bg-blue-400 hover:text-white active:outline active:outline-2 active:outline-blue-900"
        >
          Login
        </Link>
      )}
      <br />
      <Link href="/admin" className="underline hover:text-blue-700">
        Admin
      </Link>
    </header>
  );
}
