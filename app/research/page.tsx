import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ResearchEntry } from "@/components/research-entry";

export const metadata: Metadata = { title: "Research — Neuroshift", description: "Dated research notes from Neuroshift’s OpenKhmer project: preparation results, limitations and planned experiments." };

export default function ResearchIndex() {
  return (
    <><a className="skip-link" href="#main">Skip to content</a><Navigation />
      <main id="main" className="company-main section-shell">
        <header className="company-page-intro"><p className="company-eyebrow">NEUROSHIFT / RESEARCH</p><h1>Research.</h1><p>Results, working notes, and the questions that come next. Our first focus is Khmer optical character recognition.</p></header>
        <section className="research-library" aria-labelledby="records"><div className="library-heading"><h2 id="records">Published records</h2><span>01 record</span></div><ResearchEntry /></section>
        <aside className="research-index-note"><p>Each record states its evidence date and limitations. Planned experiments are identified explicitly; concept illustrations are separate from model output.</p><Link className="company-inline-link" href="/openkhmer">Explore the OpenKhmer project <span aria-hidden="true">↗</span></Link></aside>
      </main><SiteFooter /></>
  );
}
