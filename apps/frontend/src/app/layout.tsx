import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AppSidebar } from "@/components/common/app-sidebar"
import { UpdateBar } from "@/components/common/last-trade-bar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pump.fun",
  description: "Pump.fun - Your Solana Trading Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen">
          <AppSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="px-6">
              <UpdateBar />
              <div className="flex-1 overflow-auto">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}