"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const links = [
  ["Research", "/research"],
  ["OpenKhmer", "/openkhmer"],
  ["About", "/about"],
  ["Contact", "/about#contact"],
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const current = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 701px)");
    const closeOnDesktop = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);
  function dismiss() {
    setOpen(false);
    toggle.current?.focus();
  }
  return (
    <header
      className="header company-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          dismiss();
        }
      }}
    >
      <div className="section-shell nav-shell">
        <Link className="brand company-brand" href="/" aria-label="Neuroshift home" onClick={() => setOpen(false)}>
          neuroshift<span className="company-brand-dot">.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link
              href={href}
              key={href}
              aria-current={current(href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a className="company-contact nav-support" href={`mailto:${site.email}`}>Get in touch <span aria-hidden="true">↗</span></a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </div>
      <nav
        hidden={!open}
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
      >
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            aria-current={current(href) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
        <a href={`mailto:${site.email}`}>Get in touch <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}
