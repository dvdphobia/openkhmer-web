# OpenKhmer web

Next.js App Router company website for Neuroshift, with OpenKhmer as its featured research project and product in development. Company pages share an editorial layout, original Khmer script artwork and reusable navigation. The OpenKhmer project retains its original minimal visual direction.

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

- `app/page.tsx`: Neuroshift home, featured project, latest research and collaboration.
- `app/research/page.tsx`: research index; only actual published records are listed.
- `app/research/openkhmer-data-preparation/page.tsx`: dated record, preparation counts, limitations, provenance and next gate.
- `app/openkhmer/page.tsx`: project mission, approach, milestones, sponsorship and FAQ.
- `app/about/page.tsx`: company/project relationship and verified contact.
- `components/navigation.tsx` and `components/site-footer.tsx`: shared company navigation and footer.
- `components/research-entry.tsx`, `components/research-art.tsx` and `lib/research.ts`: shared research entry and original script artwork.
- `public/research-status.json`: dated preparation summary with explicit provenance limitations; it is not an exported model benchmark.
- `app/globals.css`: responsive layout, palette, original CSS/SVG artwork.
- `components/vision-preview.tsx`: keyboard-accessible illustrative example tabs.
- `lib/site.ts`: public contact email and sponsor email link.
- `public/research-brief.txt`: downloadable sponsor research summary.
- `app/layout.tsx` and `app/icon.svg`: metadata and favicon.

The preview is hand-authored and does not perform OCR. There is no upload, backend, email delivery service, analytics, or database. Sponsor links open the visitor's email client. Research counts refer only to the initial completed preparation run documented on October 2, 2026. Update both the page and brief when new results are verified. Never imply a released product, measured accuracy, or existing sponsors without evidence.

The website source is published at https://github.com/dvdphobia/openkhmer-web. The website is live at https://www.neuroshift.dev/ and can be deployed as a normal Next.js application. Khmer artwork uses a self-hosted Noto Sans Khmer font; its license is retained in `public/fonts/OFL.txt`.

The company relationship was confirmed by the project owner. The site uses neuroshift.dev. The owner supplied sophanha@neuroshift.dev as the company contact; mailbox delivery must be verified separately. Hosting and DNS are managed outside this repository. Do not add incorporation dates, customer claims, Claude integration, or sponsorship without evidence. The public research record is a curated summary of the October 2 project notes; private cloud artifact URLs and local machine paths are deliberately not published.

Dependency audit: production dependencies have no reported vulnerabilities as of setup. The generated ESLint toolchain has five linked high-severity development-only advisories from `braces` (deeply nested glob patterns); the registry offers no patched `braces` release at setup. Avoid processing untrusted glob patterns and update the toolchain when a compatible fix is available.

## Design audit and shared controls

`UI_UX_AUDIT.html` contains the pre-edit issue register, the requested A–G summary, implementation order, and final verification/limitations. Open it in a browser for the formatted report.

`components/action-link.tsx` provides primary, text and outline link variants. Shared type, spacing, surface and control tokens are declared in `app/globals.css`. Narrative sections use 64px desktop and 48px mobile spacing; essential labels are 14px. Navigation marks the current route, including nested research records, and supports mobile Escape/focus recovery. The OCR preview marks Khmer runs within mixed-script text and remains illustrative.

Typography uses self-hosted DM Sans (SIL Open Font License) for Latin text, with the existing Noto Khmer font for Khmer. DM Sans provides a similar visual direction to OpenAI Sans; this project does not distribute OpenAI's custom font. Font licenses are included in public/fonts.
