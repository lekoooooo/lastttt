import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XP Portfolio",
  description: "A Windows XP themed personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-auto">{children}</body>
    </html>
  );
}
