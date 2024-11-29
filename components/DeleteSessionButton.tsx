"use client";

export default function DeleteSessionButton() {
  return (
    <button
      onClick={async () => {
        console.log("delete session");
      }}
    >
      Delete Session
    </button>
  );
}
