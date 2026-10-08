# OpenKhmer web

Next.js App Router landing page for independent Khmer OCR research. Inspired by fal.ai's minimal layout and expressive visual direction; all branding and document illustrations are original.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview, run `npm run build` followed by `npm start`.

## Verify

```sh
npm run lint
npx tsc --noEmit
npm run build
```

## Update content

- `app/page.tsx`: mission, approach, milestones, sponsor section, FAQ.
- `app/globals.css`: responsive layout, palette, original CSS/SVG artwork.
- `components/vision-preview.tsx`: keyboard-accessible illustrative example tabs.
- `lib/site.ts`: public contact email and sponsor email link.
- `public/research-brief.txt`: downloadable sponsor research summary.
- `app/layout.tsx` and `app/icon.svg`: metadata and favicon.

The preview is hand-authored and does not perform OCR. There is no upload, backend, email delivery service, analytics, or database. Sponsor links open the visitor's email client. Research counts refer only to the initial completed preparation run documented on October 2, 2026. Update both the page and brief when new results are verified. Never imply a released product, measured accuracy, or existing sponsors without evidence.

This project is local and has not been published. It can be deployed as a normal Next.js application. Khmer artwork uses a self-hosted Noto Sans Khmer font; its license is retained in `public/fonts/OFL.txt`.

Dependency audit: production dependencies have no reported vulnerabilities as of setup. The generated ESLint toolchain has five linked high-severity development-only advisories from `braces` (deeply nested glob patterns); the registry offers no patched `braces` release at setup. Avoid processing untrusted glob patterns and update the toolchain when a compatible fix is available.

## Design audit and shared controls

`UI_UX_AUDIT.html` contains the pre-edit issue register, the requested A–G summary, implementation order, and final verification/limitations. Open it in a browser for the formatted report.

`components/action-link.tsx` provides primary, text and outline link variants. Shared type, spacing, surface and control tokens are declared in `app/globals.css`. Narrative sections use 64px desktop and 48px mobile spacing; essential labels are 14px. Navigation observes the current section and supports mobile Escape/focus recovery. The OCR preview marks Khmer runs within mixed-script text and remains illustrative.
