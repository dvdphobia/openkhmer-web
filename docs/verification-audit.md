# Neuroshift verification audit

Audit date: October 9, 2026. Scope: credibility, public evidence, crawl readiness, and reapplication preparation. Existing branding, layout, Vercel hosting, and Cloudflare security rules are preserved.

## Baseline findings

| Check | Observed result before changes |
| --- | --- |
| Main public pages | `/`, `/about`, `/openkhmer`, `/research`, and `/research/openkhmer-data-preparation` returned HTTP 200 |
| Research brief | HTTP 200, plain text, company email readable |
| Navigation | Source destinations and section anchors exist; explicit footer Contact link absent |
| Company identity | Cambodia, Neuroshift/OpenKhmer relationship, and project contact already disclosed; founding/funding details absent |
| Research claims | Preparation counts agree with local project notes; unfinished execution and lack of validated accuracy are disclosed |
| Canonicals | Missing on all five pages |
| Metadata | Page titles/descriptions already present; route-specific Open Graph URLs, metadata base, and structured data absent |
| `robots.txt` | HTTP 404; absence does not itself mean crawling is blocked |
| `sitemap.xml` | HTTP 404 |
| Cloudflare email rewriting | Public email text and anchors replaced with obfuscated email markup; plain address also appears in Next's serialized payload |
| Crawler user-agent probes | `/about` returned 200 for Googlebot, Claude-SearchBot, and Claude-User strings, with no detected challenge or noindex |
| Public GitHub | Website repository accessible; no public research model/artifact repository verified |

User-agent probes originate from this environment, not authenticated crawler IPs, and do not establish access from Anthropic's actual verification system. No evidence establishes that any observed website issue caused the rejection. Cloudflare dashboard security events and account-specific application eligibility remain uninspected.

## Confirmed facts and publishing boundaries

The owner confirmed March 2025 founding, no funding raised, and a planned Claude role in internal assistance and future document chat on OCR output. No public LinkedIn profile is available. The existing name Sophanha Oun remains a project contact until the founder title is explicitly confirmed. No incorporation, customers, employees, partnerships, sponsorships, public OCR API, or accuracy claims are added.

## Implementation and verification

Implemented focused changes:

- About and the brief now state March 2025 founding and no funding raised.
- OpenKhmer's FAQ and brief explain current Claude chat use and planned internal assistance/document chat, without claiming a working API integration.
- All five pages have self-canonical URLs, route-specific Open Graph and Twitter metadata. A minimal Organization JSON-LD block uses the known name, website, email, and country; no incorporation date or unconfirmed founder title is asserted.
- Added `robots.txt` allowing public crawling and a sitemap containing exactly the five public page URLs, without invented modification dates.
- Added Contact navigation to the existing About contact section.
- Public visible email links use Cloudflare's documented scoped `email_off` comments. This preserves the surrounding page design and avoids changing zone-wide security settings. Other generic email CTAs retain their existing behavior.
- The brief now labels private preparation results as reported and supplies an absolute research-record link.

Validation passed: production build, ESLint, whitespace/diff check, and independent source review. Production-preview HTTP checks returned 200 for all five pages, robots, sitemap, and the brief; canonical/OG URLs and Organization schema were present on every page. Desktop and 390px mobile About layouts were checked, mobile Contact navigation reached `/about#contact`, and the new Claude FAQ expanded with the planned-status explanation. No new dependencies were added. The existing research counts and accuracy limitations were preserved.

## Preparation checklist

- [x] Inspect existing code and live public responses.
- [x] Compare research claims with supplied project status and review notes.
- [x] Obtain founding month/year and funding status from the owner.
- [x] Verify current official program and application link.
- [x] Draft startup description, product description, evidence list, and reconsideration message in `claude-startups-reapplication.md`.
- [x] Complete final implementation review and affected-page tests.
- [ ] Verify published changes after deployment.
- [ ] Owner confirms founder name/role, email delivery, and actual application account email.
- [ ] Owner supplies exact rejection wording and application date.
- [ ] Verify Search Console ownership and submit sitemap using a real Google-issued token.
- [ ] Owner authorizes any eventual application or Anthropic message; neither has been sent.

## Current application availability

On October 9 the [official program page](https://claude.com/programs/startups) still linked to the Console application, but announced capacity limits for the free Team year and $1,000 credit offers and a re-review of applications. It states bootstrapped/pre-seed startups may apply and aims for decisions within one week. The updated public FAQ does not publish the former numerical age cutoff. Reconfirm current account-specific terms before recommending resubmission; do not promise credits or approval.

## Delegation record

The requested AGY scan used its installed CLI and verified model catalog. The attempted Gemini 3.8 Flash (Medium) plan-mode run was denied its file-inspection command by headless permissions and produced no code findings. No permission bypass was used. A native read-only reviewer then completed the codebase scan; a separate native implementation worker was requested with `gpt-6-luna`, maximum reasoning. Worker configuration is requested routing, not independently confirmed provider identity. Usage/cost for native workers is unavailable. Run records remain outside the repository.
