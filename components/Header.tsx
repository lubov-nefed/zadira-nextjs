"use client";
import Link from "next/link";
import DeleteSessionButton from "@/components/DeleteSessionButton";
import { checkStaleDbSession } from "@/auth/actions";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
/* import { getDbSession } from "@/auth/db-session";
import { getSessionCookies } from "@/auth/cookie-session";
import { cookies } from "next/headers"; */

export function Header() {
  const pathname = usePathname();
  useEffect(() => {
    const logExpirationTime = async () => {
      await checkStaleDbSession();
    };
    logExpirationTime();
  }, [pathname]);
  /* const isLoggedIn = await getSessionCookies();
  console.log("isLoggedIn", isLoggedIn); */
  //ToDo add useEffect or not if its force-dynamic?
  /*  const cookieSession = await getSessionCookies();
  console.log("cookieSession ", cookieSession); */

  /*  
  if (cookieSession) {
    const dbSession = await getDbSession(cookieSession);
    console.log("dbSession ", dbSession);
  }
  console.log("cookieSession ", cookieSession); */
  return (
    <header>
      <Link href="/">Logo</Link>
      <nav>Navigation</nav>
      {/* 
      {isLoggedIn && <p>You are logged in</p>}
      {!isLoggedIn && <p>You are NOT logged in</p>} */}
      <Link href="/login">Login</Link>
      <br />
      <Link href="/admin">Admin</Link>
      <br />
      <DeleteSessionButton />
    </header>
  );
}
