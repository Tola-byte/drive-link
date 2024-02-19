import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import logo from "../../public/logo.svg"
import "./globals.css";

const inter = Poppins({ style: ["normal"], weight: ["400"], subsets: ["devanagari", "latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "DriveLink",
  description: "Travelling at its best",
  icons: logo
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
