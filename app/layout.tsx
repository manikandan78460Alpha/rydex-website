import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rydex — Employee Transport Management",
  description: "Modern employee cab management platform built for Indian SMEs. Replace WhatsApp groups and Excel sheets with one powerful dashboard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
