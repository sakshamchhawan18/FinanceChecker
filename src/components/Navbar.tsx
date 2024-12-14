"use client"; // Ensure this runs on the client side

import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode class on the body or html element
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark'); // Apply dark mode class to <html>
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark mode class
    }
  }, [darkMode]);

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <nav className="bg-white shadow-lg w-full dark:bg-gray-800 dark:text-white">
        {/* Navbar container */}
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left side: Logo and navigation links */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-black dark:text-white">
              MyApp
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-black dark:text-white font-semibold">Home</Link>
              <Link href="/about" className="text-black dark:text-white font-semibold">About Us</Link>
              <Link href="/contact" className="text-black dark:text-white font-semibold">Contact</Link>
            </div>
          </div>

          {/* Right side: Sign In / Sign Up buttons and User button */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="px-4 py-2 text-white bg-green-500 rounded-md">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="text-black dark:text-white focus:outline-none ml-4"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1M12 21v1M4.22 4.22l.707.707M19.07 19.07l.707.707M3 12h1m16 0h1M4.22 19.07l.707-.707M19.07 4.22l.707-.707M16.24 7.76c.37-.37.9-.56 1.47-.56s1.1.2 1.47.56c.83.83.83 2.17 0 3-.37.37-.9.56-1.47.56s-1.1-.2-1.47-.56c-.83-.83-.83-2.17 0-3z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1M12 21v1M4.22 4.22l.707.707M19.07 19.07l.707.707M3 12h1m16 0h1M4.22 19.07l.707-.707M19.07 4.22l.707-.707M16.24 7.76c.37-.37.9-.56 1.47-.56s1.1.2 1.47.56c.83.83.83 2.17 0 3-.37.37-.9.56-1.47.56s-1.1-.2-1.47-.56c-.83-.83-.83-2.17 0-3z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white p-4 space-y-4 dark:bg-gray-800">
            <Link href="/" className="text-black dark:text-white block">Home</Link>
            <Link href="/about" className="text-black dark:text-white block">About Us</Link>
            <Link href="/contact" className="text-black dark:text-white block">Contact</Link>
            <SignedOut>
              <SignInButton>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md w-full">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="px-4 py-2 text-white bg-green-500 rounded-md w-full">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
          </div>
        )}
      </nav>
    </ClerkProvider>
  );
}
