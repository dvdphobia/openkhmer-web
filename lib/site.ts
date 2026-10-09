import type { Metadata } from "next";

export const site = {
  company: "Neuroshift",
  url: "https://www.neuroshift.dev",
  contactName: "Sophanha Oun",
  founded: "March 2025",
  fundingStatus: "No funds raised",
  websiteSource: "https://github.com/dvdphobia/openkhmer-web",
  email: "sophanha@neuroshift.dev",
  sponsorHref:
    "mailto:sophanha@neuroshift.dev?subject=Supporting%20OpenKhmer%20research&body=Hello%20OpenKhmer%2C%0A%0AI%E2%80%99d%20like%20to%20discuss%20supporting%20your%20Khmer%20OCR%20research.%0A%0AOrganization%3A%0AType%20of%20support%3A%0A",
};

export const publicRoutes = [
  "/",
  "/about",
  "/openkhmer",
  "/research",
  "/research/openkhmer-data-preparation",
] as const;

type PublicRoute = (typeof publicRoutes)[number];

export function pageMetadata(
  route: PublicRoute,
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: route },
    openGraph: {
      title,
      description,
      url: route,
      siteName: site.company,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
