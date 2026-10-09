# Neuroshift — Claude Startups reapplication preparation

Prepared October 9, 2026. Draft for owner review; no application or support message has been sent.

## Company details

| Field | Confirmed information |
| --- | --- |
| Company | Neuroshift |
| Official website | https://www.neuroshift.dev/ |
| Business email | sophanha@neuroshift.dev |
| Location | Cambodia |
| Founded | March 2025, confirmed by the owner; exact day and incorporation status not supplied |
| Funding | No funding raised, confirmed by the owner |
| Product stage | OpenKhmer is in research and product development; no validated public OCR product or API |
| Named contact | Sophanha Oun, currently listed as project contact; confirm full name and founder role before using a founder title |
| Professional profile | No public LinkedIn supplied; do not invent a profile |

The company founding date is separate from the domain registration date. Do not substitute WHOIS registration for founding or claim incorporation without evidence. Inbox delivery and the actual Claude Console login email still need confirmation.

## Short startup description

Neuroshift is an early-stage startup based in Cambodia, founded in March 2025, developing OpenKhmer, a Khmer OCR research and product platform. We are working toward converting printed Khmer documents into searchable text while preserving Khmer script structure. Current work includes dataset preparation, Unicode handling, and controlled model evaluation. We have not yet raised funding or released a validated OCR product. A future product direction is document chat grounded in OCR text using the Claude API.

## OpenKhmer product description

OpenKhmer aims to make printed Khmer documents searchable and usable digitally. Khmer recognition must handle dependent vowels, subscript consonants, marks, and logical Unicode order. The current prepared source is synthetic printed text; photographed documents, handwriting, and ornate lettering need separate evaluation. The intended workflow is document input, OCR extraction, reviewable text, and eventually questions answered from the extracted document. This is a product plan, not an operational service. Website previews are hand-authored illustrations rather than model predictions.

## Current development stage and milestones

Completed work reported in the October 2 project status record:

- A Colab cleaning run processed 100,000 source rows from one synthetic printed Khmer source.
- The reported splits contain 60,724 training, 3,308 validation, and 3,379 locked test examples.
- The preparation preserved Khmer marks and joiners, normalized labels to NFC, and checked overlap and image hashes. These counts are data preparation results, not model accuracy.
- A public research record and dated JSON summary document the run provenance and its limits. The underlying private cloud artifacts are not publicly inspectable.

Ongoing work and limitations:

- Revised Kaggle preparation and smoke-test source was reviewed locally; execution on real inputs and saved outputs remain unverified in the latest supplied research notes.
- Earlier PaddleOCR-VL diagnostic output was unusable and is not a benchmark or product.
- No OCR accuracy, customer adoption, commercial deployment, or successful training result is claimed.

Next milestones: verify saved preparation outputs, inspect labels/tokenization, run a 16-example training gate with a separate validation sample, report character error rate and aligned errors, then compare fixed recognition approaches before locked-test evaluation.

## Intended role of Claude

Current use is Claude chat; an operational Claude API integration has not been established.

Owner-confirmed plans have two parts:

1. Internal assistance with research, code development, experiment planning, and error analysis. Suggested changes will require review and measured experiments.
2. A future Claude API feature allowing users to chat with documents after OCR extraction. Answers should be grounded in extracted text, with source references and evaluation for Khmer quality and errors introduced by OCR. This feature is planned and has not been implemented or validated.

Claude API credits support calls to Claude, not GPU training of Neuroshift's OCR model. Do not describe API credits as general compute credits.

## Public verification evidence

- [Company website](https://www.neuroshift.dev/)
- [Company background and contact](https://www.neuroshift.dev/about#contact)
- [OpenKhmer product and development stage](https://www.neuroshift.dev/openkhmer)
- [Research index](https://www.neuroshift.dev/research)
- [Dated preparation record](https://www.neuroshift.dev/research/openkhmer-data-preparation)
- [Research status summary](https://www.neuroshift.dev/research-status.json)
- [Research brief](https://www.neuroshift.dev/research-brief.txt)
- [Public website source](https://github.com/dvdphobia/openkhmer-web), which contains website code, not a released OCR model or public dataset artifacts.

[robots.txt](https://www.neuroshift.dev/robots.txt) and [sitemap.xml](https://www.neuroshift.dev/sitemap.xml) were verified live with HTTP 200 after deployment on October 9. Public pages explain the company's work but do not independently establish legal incorporation or prove private run artifacts.

## Current program status — checked October 9, 2026

The [official Claude Startups page](https://claude.com/programs/startups) still links to the [Console application](https://platform.claude.com/offers/startups-application). However, it now says Anthropic is over capacity for the free year of Claude Team and $1,000 API credit offers and will re-review applications. Do not promise these benefits for a new application. The FAQ currently says bootstrapped, pre-seed, and venture-backed startups may apply and aims to review applications within one week.

The current public page no longer states the previous numerical startup-age rule. The owner reports the rejection email mentions startup age and verification; obtain its exact wording and confirm the current account-specific eligibility terms before recommending resubmission. Founding in March 2025 alone does not guarantee acceptance.

[Cambodia is a supported region](https://www.anthropic.com/supported-countries). Account/domain consistency and genuine product evidence should be accurate regardless of the verification method. No official minimum WHOIS domain age or documented rejection algorithm was found.

Recommended next action: complete the missing facts below and ask for clarification or reconsideration of the existing decision. Recheck the live program terms before any resubmission. Application availability does not imply eligibility, approval, or a credit offer.

## Information awaiting owner confirmation

- [ ] Confirm full name and permission to use the role “Founder.”
- [ ] Confirm the business inbox receives mail and the application was submitted with this domain email; supply the actual Console account email if different.
- [ ] Supply the exact rejection message and application date.
- [ ] Confirm legal incorporation status only if requested; no incorporation claim is currently made.
- [ ] Supply any public research repository, saved experiment reports, or authentic demo evidence if available. None is invented.
- [ ] Confirm whether a Google Search Console property already exists; supply access or the exact verification record if you want it configured.

## Reconsideration or clarification request — draft, not sent

Hello Anthropic team,

I would appreciate clarification and, if possible, reconsideration of Neuroshift's Claude Startups application. The decision mentioned startup age eligibility and company verification; could you indicate which criterion our application did not meet and what supporting evidence would help?

Neuroshift is based in Cambodia and was founded in March 2025. We have not raised funding. We are developing OpenKhmer, a Khmer OCR platform currently in research and product development. Our website documents completed data preparation separately from unverified experiments and future features. We do not claim a released OCR API or validated model accuracy.

Our website is https://www.neuroshift.dev/, and our business contact is sophanha@neuroshift.dev. Our dated research record is https://www.neuroshift.dev/research/openkhmer-data-preparation. We currently use Claude chat and plan internal development assistance and a future Claude API document-chat feature grounded in OCR text.

Application account email: [confirm actual submitted email]
Application date: [insert date]
Decision wording: [paste exact message]

Could you confirm our eligibility under the current program and whether the rejection reflects an age criterion, a verification mismatch, or another requirement? We understand that the Team and $1,000 API credit offers are currently over capacity and are not assuming availability.

Thank you,
[confirmed name and role]
Neuroshift

Use the signed-in support route described in [Anthropic's support guide](https://support.claude.com/en/articles/9015913-how-to-get-support). This draft is not authorization to send a message. No dedicated public startup rejection appeal form was verified.

## Search Console readiness

After publishing and checking the canonical URLs and sitemap, add or use the `neuroshift.dev` Domain property in [Google Search Console](https://search.google.com/search-console). Verify ownership using Google's exact DNS TXT record in Cloudflare; do not fabricate a token. Submit `https://www.neuroshift.dev/sitemap.xml`, inspect the five main URLs, and request indexing where appropriate. Search Console ownership verification and sitemap submission have not been performed.

Google's official guidance: [ownership verification](https://support.google.com/webmasters/answer/9008080) and [building/submitting a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap). A submitted sitemap is a discovery hint and does not guarantee indexing or startup approval.
