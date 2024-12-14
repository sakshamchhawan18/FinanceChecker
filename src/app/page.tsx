"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Clerk Publishable Key", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
  }, []);

  return <div>Welcome to the Next.js app!</div>;
}
