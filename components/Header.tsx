import Link from "next/link";
import LogOut from "@/components/LogOut";
import { getSessionCookies } from "@/auth/cookie-session";
import { Cart } from "./Cart";

export async function Header() {
  const isLogedIn = await getSessionCookies();
  console.log(isLogedIn?.userRole);

  return (
    <header className="flex justify-around p-2">
      <Link href="/" className="underline hover:text-blue-700">
        Home
      </Link>
      <nav>Navigation</nav>
      {isLogedIn && <LogOut />}
      {!isLogedIn && (
        <Link
          href="/login"
          className="border border-gray-500 rounded px-2 pb-1 hover:bg-blue-400 hover:text-white active:outline active:outline-2 active:outline-blue-900"
        >
          Login
        </Link>
      )}
      {isLogedIn?.userRole !== "admin" && <Cart user={isLogedIn?.userRole} />}
      <Link href="/admin" className="underline hover:text-blue-700">
        Admin
      </Link>
    </header>
  );
}
