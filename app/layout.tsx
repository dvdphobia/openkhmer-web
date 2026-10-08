import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "OpenKhmer — A digital future for Khmer text",
  description:
    "OpenKhmer is Neuroshift’s Khmer OCR product in development. Read our preparation results, research limitations, and next experiment.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "OpenKhmer — A digital future for Khmer text",
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
