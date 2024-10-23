"use client";
import Link from "next/link";

export default function Error() {
  return (
    <h2>
      Something went wrong. <Link href="/"> Go to homepage</Link>
    </h2>
  );
}
