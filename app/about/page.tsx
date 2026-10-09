import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink } from "@/components/email-link";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { pageMetadata, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "/about",
  "About Neuroshift — Cambodia-based Khmer technology research",
  "Learn about Neuroshift, the company behind OpenKhmer: our founding date, funding status, current research, and project contact.",
);

export default function About() {
  return (
    <><a className="skip-link" href="#main">Skip to content</a><Navigation />
      <main id="main" className="company-main section-shell">
        <header className="company-page-intro"><p className="company-eyebrow">ABOUT NEUROSHIFT</p><h1>From Cambodia.<br />For useful technology.</h1><p>Neuroshift is the company behind OpenKhmer. We’re working toward a practical way to turn printed Khmer documents into searchable text.</p></header>
        <section className="about-section"><h2>Company facts.</h2><div><p>Founded {site.founded}. {site.fundingStatus}.</p></div></section>
        <section className="about-section"><h2>Our current work.</h2><div><p>OpenKhmer is a product in development. Today, the work is data preparation, script handling and model evaluation. The initial preparation run is documented; a validated OCR product and published accuracy results are still ahead.</p><Link className="company-inline-link" href="/research">Read the research <span aria-hidden="true">↗</span></Link></div></section>
        <section className="about-section"><h2>A clear account<br />of progress.</h2><div><p>We publish what has been completed, what hasn’t worked and what needs verification. Product concepts show where we want to go; research records explain where we stand.</p><p>We’re seeking technical collaborators and startup support for defined experiments. No external sponsorship or program membership is claimed.</p></div></section>
        <section id="contact" className="about-section about-contact"><div><p className="company-eyebrow">CONTACT</p><h2>Let’s talk.</h2></div><div><h3>{site.contactName}</h3><p>Project contact · Neuroshift<br />Cambodia</p><EmailLink className="company-inline-link" suffix="↗" /><p className="contact-note">For OpenKhmer research, collaboration and startup program enquiries.</p></div></section>
      </main><SiteFooter /></>
  );
}
