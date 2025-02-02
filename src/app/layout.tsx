import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dive Bar List",
  description: "Find and rate your favorite dive bars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-5xl mx-auto py-8 p-2`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
