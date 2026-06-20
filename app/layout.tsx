import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rydex — Employee Transport Management",
  description: "Modern employee cab management platform built for Indian SMEs.",
  icons: {
    icon: "/logo-compass.png",
  },
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
