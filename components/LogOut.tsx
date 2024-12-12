"use client";
import { deleteSessionCookies } from "@/auth/actions";

export default function LogOut() {
  return (
    <button
      className="border border-gray-500 rounded px-2 pb-1 hover:bg-blue-400 hover:text-white active:outline active:outline-2 active:outline-blue-900"
      onClick={async () => {
        console.log("LogOut");
        deleteSessionCookies();
      }}
    >
      LogOut
    </button>
  );
}
