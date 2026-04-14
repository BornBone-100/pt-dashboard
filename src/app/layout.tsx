import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT Pulse Platform",
  description: "B2B Physical Care and Wellness Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans tracking-tight">{children}</body>
    </html>
  );
}
