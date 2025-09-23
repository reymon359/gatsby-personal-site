import React from "react";
import "./globals.css";

import Navigation from "@/components/Navigation";
import { Roboto } from "next/font/google";
import StarRoot from "@/components/StarRoot";
import DynamicFavicon from "@/components/DynamicFavicon";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <DynamicFavicon />
        {/* Stars background: always behind, never blocks interaction */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <StarRoot />
        </div>
        {/* Main content and navigation above stars */}
        <div className="relative z-10">
          <main className="min-h-screen flex flex-col font-thin font-sans">
            {children}
          </main>
          <Navigation />
        </div>
      </body>
    </html>
  );
}