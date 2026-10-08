import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ResearchArt } from "@/components/research-art";
import { ResearchEntry } from "@/components/research-entry";
import { site } from "@/lib/site";

export default function CompanyHome() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main" className="company-main">
        <section className="company-hero section-shell">
          <p className="company-eyebrow">NEUROSHIFT / CAMBODIA</p>
          <h1>Research, made<br /><span>useful.</span></h1>
          <div className="company-hero-bottom">
            <p>We’re developing OpenKhmer: research into making printed Khmer text searchable, accessible, and easier to use.</p>
            <Link className="company-inline-link" href="/research">Explore our research <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="hero-rule"><span>OUR FIRST FOCUS</span><span>KHMER LANGUAGE TECHNOLOGY</span></div>
        </section>
        <section className="company-feature section-shell" aria-labelledby="featured-project">
          <div className="feature-art"><ResearchArt /></div>
          <div className="feature-copy">
            <p className="company-eyebrow">FEATURED PROJECT / 01</p>
            <h2 id="featured-project">OpenKhmer</h2>
            <p className="feature-lead">A digital future<br />for Khmer text.</p>
            <p>Printed documents hold knowledge that is difficult to search. OpenKhmer starts with the foundations: careful data preparation, Khmer script handling, and controlled OCR experiments.</p>
            <div className="feature-stage"><span>Research stage</span><span>Product in development</span></div>
            <Link className="company-button" href="/openkhmer">Discover OpenKhmer <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
        <section className="company-section section-shell" aria-labelledby="latest-research">
          <div className="company-section-head"><div><p className="company-eyebrow">FROM THE RESEARCH</p><h2 id="latest-research">Notes from the work.</h2></div><Link className="company-inline-link" href="/research">All research <span aria-hidden="true">↗</span></Link></div>
          <ResearchEntry />
        </section>
        <section className="company-approach section-shell" aria-labelledby="approach">
          <div><p className="company-eyebrow">HOW WE WORK</p><h2 id="approach">Build carefully.<br />Show the evidence.</h2></div>
          <div className="approach-copy"><p>Our research record separates completed work from planned experiments. We document limitations alongside progress, and evaluate before making product claims.</p><Link className="company-inline-link" href="/about">About Neuroshift <span aria-hidden="true">↗</span></Link></div>
        </section>
        <section className="company-invitation section-shell" aria-labelledby="collaborate">
          <p className="company-eyebrow">COLLABORATION</p><h2 id="collaborate">Help move the<br />research forward.</h2>
          <div><p>We’re looking for technical collaborators, compute support and startup programs for the next OpenKhmer experiment.</p><a className="company-button" href={site.sponsorHref}>Talk with us <span aria-hidden="true">↗</span></a></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
