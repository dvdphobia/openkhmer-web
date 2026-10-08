import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = localFont({
  src: "../public/fonts/dm-sans.ttf",
  variable: "--font-sans",
  weight: "100 1000",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Neuroshift — Research and product development",
  description:
    "Neuroshift is the company behind OpenKhmer. Explore our Khmer OCR research, preparation results, and product development in Cambodia.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Neuroshift — Research and product development",
    description:
      "Khmer OCR research by Neuroshift. Preparation results, current limitations, and the next experiment.",
    type: "website",
    locale: "en_US",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
