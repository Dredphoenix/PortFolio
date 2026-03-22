import type { Metadata } from "next";
import { Inter,Instrument_Serif  } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import { WipeProvider } from "@/components/contexts/WipeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight:["300","400","500","600","700","800","900"],
  display: "swap"
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishwa Portfolio",
  description: "vishwa personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
  className={`
    ${inter.variable}
    ${instrumentSerif.variable}
    antialiased
    bg-neutral-950
    text-white
  `}
>
  <WipeProvider>
  <Navbar />
  {children}
  </WipeProvider>
</body>
    </html>
  );
}
