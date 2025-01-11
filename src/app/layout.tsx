import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";

import type { Metadata } from "next";
import { headers } from "next/headers";

import { Toaster } from "@/components/ui/toaster";
export const dynamic = "force-dynamic";
import { CookiesConsent } from "@/components/cookies-consent";
import GoogleAnalytics from "@/components/google-analytics";
import "./globals.css";

import { cookieToInitialState } from "wagmi";

import { config } from "@/config";
import Web3ModalProvider from "@/context/wallet";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "SmartWhales AI",
};

export default function RootLayout({
  children,
  cookies,
}: {
  children: React.ReactNode;
  cookies: string;
}) {
  const initialState = cookieToInitialState(config, cookies);

  return (
    <html className={inter.variable} lang="en">
      <body className="bg-black text-white">
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Web3ModalProvider initialState={initialState}>
          {children}
        </Web3ModalProvider>
        <Toaster />
        <CookiesConsent />
      </body>
    </html>
  );
}
