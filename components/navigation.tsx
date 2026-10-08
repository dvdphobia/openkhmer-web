"use client";
import { useEffect, useRef, useState } from "react";
import { Arrow, BrandMark } from "./icons";
import { ActionLink } from "./action-link";

const links = [
  ["Research", "#research"],
  ["Concept preview", "#vision"],
  ["Progress", "#progress"],
  ["Support", "#support"],
];

function useCurrentSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const sections = [...document.querySelectorAll("main > section")];
    // Pick the section occupying most of the reading area. Callback entries
    // alone omit sections that stayed visible during an anchor/tab interaction.
    const observer = new IntersectionObserver(
      () => {
        const headerHeight =
          document.querySelector("header")?.getBoundingClientRect().height ??
          88;
        let current = "";
        let largest = 0;
        for (const section of sections) {
          const rect = section.getBoundingClientRect();
          const visible = Math.max(
            0,
            Math.min(rect.bottom, window.innerHeight) -
              Math.max(rect.top, headerHeight),
          );
          if (visible > largest) {
            largest = visible;
            current = `#${section.id}`;
          }
        }
        setActive(current);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return active;
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const active = useCurrentSection();
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
      className="header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          dismiss();
        }
      }}
    >
      <div className="section-shell nav-shell">
        <a className="brand" href="#" aria-label="OpenKhmer home">
          <BrandMark />
          openkhmer<span className="brand-period">.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.slice(0, 3).map(([label, href]) => (
            <a
              href={href}
              key={href}
              aria-current={active === href ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <ActionLink
          className="nav-support"
          variant="outline"
          href="#support"
          aria-current={active === "#support" ? "location" : undefined}
        >
          Support
        </ActionLink>
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
          <a
            key={href}
            href={href}
            aria-current={active === href ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
            <Arrow diagonal />
          </a>
        ))}
      </nav>
    </header>
  );
}
