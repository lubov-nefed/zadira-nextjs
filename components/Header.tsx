"use client";
import Link from "next/link";
import LogOut from "@/components/LogOut";
import { useEffect, useState } from "react";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(() => {
    const fetchSessionCookies = async () => {
      try {
        const cookieSession = await fetch(`/api`); //error: infinite api call
        const cookies = await cookieSession.json();
        setIsLoggedIn(cookies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSessionCookies();
  });

  return (
    <header>
      <Link href="/">Logo</Link>
      <nav>Navigation</nav>
      {isLoggedIn && <LogOut />}
      {!isLoggedIn && <Link href="/login">Login</Link>}
      <br />
      <Link href="/admin">Admin</Link>
    </header>
  );
}
