import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rydex · Secure fleet management platform",
  description: "Modern employee cab management platform built for corporates and growing enterprises",
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
