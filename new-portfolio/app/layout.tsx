import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinay Yalamanchi | AI & Software Engineer",
  description:
    "Portfolio of Vinay Yalamanchi — AI/ML Engineer and Software Engineer building intelligent, practical digital products.",
  keywords: [
    "Vinay Yalamanchi",
    "AI Engineer",
    "Machine Learning Engineer",
    "Software Engineer",
    "Generative AI",
    "Python",
    "FastAPI",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
