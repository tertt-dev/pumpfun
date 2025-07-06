import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@solana/wallet-adapter-react-ui/styles.css';

import { AppSidebar } from "@/components/common/app-sidebar"
import { UpdateBar } from "@/components/common/last-trade-bar"
import { ClientProviders } from "@/components/providers/ClientProviders"

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
        <ClientProviders>
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
        </ClientProviders>
      </body>
    </html>
  );
}