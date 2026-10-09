import Link from "next/link";
import { EmailLink } from "@/components/email-link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="company-footer section-shell">
      <div className="company-footer-top">
        <Link className="brand company-brand" href="/">neuroshift<span className="company-brand-dot">.</span></Link>
        <p>Research and product development.<br />Based in Cambodia.</p>
        <EmailLink className="company-inline-link" suffix="↗" />
      </div>
      <div className="company-footer-bottom">
        <span>© 2026 Neuroshift</span>
        <nav aria-label="Footer navigation"><Link href="/research">Research</Link><Link href="/openkhmer">OpenKhmer</Link><Link href="/about">About</Link><Link href="/about#contact">Contact</Link><a href={site.websiteSource}>Website source <span aria-hidden="true">↗</span></a></nav>
        <span>OpenKhmer is in development.</span>
      </div>
    </footer>
  );
}
