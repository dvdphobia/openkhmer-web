import type { Metadata } from "next";
import "./globals.css";
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
