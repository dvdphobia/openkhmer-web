import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "OpenKhmer — A digital future for Khmer text",
  description:
    "Independent Khmer OCR research. Explore our approach, follow our progress, and support the experiments that could bring Khmer text into the digital world.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "OpenKhmer — A digital future for Khmer text",
    description:
      "Independent Khmer OCR research. Early days. A clear direction.",
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
