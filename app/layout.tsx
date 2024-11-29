import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { getDbSession } from "@/auth/db-session";
import { getSessionCookies } from "@/auth/cookie-session";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //ToDo add useEffect or not if its force-dynamic?
  const cookieSession = await getSessionCookies();
  console.log("cookieSession ", cookieSession);
  /*  
  if (cookieSession) {
    const dbSession = await getDbSession(cookieSession);
    console.log("dbSession ", dbSession);
  }
  console.log("cookieSession ", cookieSession); */
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
