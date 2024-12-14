// app/layout.tsx
"use client"
import { ClerkProvider } from "@clerk/nextjs";
import "@/app/styles/global.css"; // Correct import for global styles
import Navbar from "../components/Navbar";
import HowItWorksSection from "../components/ui/HowItWorks";
import BackgroundLinesDemo from "../components/BackgroundLinesDemo";

import Features from "../components/Features";
import Faq from "../components/Faq";
import Footer from "../components/Footer";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Debugging: Log the Clerk Publishable Key
  console.log("Clerk Publishable Key:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);

  return (
    <html lang="en">
      <body>
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
          <Navbar />
          <BackgroundLinesDemo />
          <HowItWorksSection />
          <Features />
          <Faq />
          <Footer />
          
          <main>{children}</main>
        </ClerkProvider>
      </body>
    </html>
  );
}
