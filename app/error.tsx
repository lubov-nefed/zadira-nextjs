"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <h2>
      Something went wrong. <Link href="/"> Go to homepage</Link>
    </h2>
  );
}
