"use client";
import { deleteSessionCookies } from "@/auth/actions";

export default function LogOut() {
  return (
    <button
      onClick={async () => {
        console.log("LogOut");
        deleteSessionCookies();
      }}
    >
      LogOut
    </button>
  );
}
