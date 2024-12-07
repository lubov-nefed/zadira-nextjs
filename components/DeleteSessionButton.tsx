"use client";
import { deleteDbSession } from "@/auth/actions";

export default function DeleteSessionButton() {
  return (
    <button
      onClick={async () => {
        console.log("delete session");

        const result = await deleteDbSession();
      }}
    >
      Delete Session
    </button>
  );
}
