import { ActionLink } from "@/components/action-link";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { Arrow } from "@/components/icons";
import { Navigation } from "@/components/navigation";
import { DocumentArt } from "@/components/document-art";
import { VisionPreview } from "@/components/vision-preview";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "OpenKhmer — Khmer OCR in development", description: "Neuroshift’s Khmer OCR project: research approach, progress and illustrative product concept." };

const pillars = [
  {
    number: "01",
    title: "Respect the script.",
    text: "We’re studying how to preserve Khmer consonants, vowels, subscripts, and marks as images become encoded text.",
    className: "script-art",
    glyph: "ខ្មែរ",
    caption: "A language, in all its layers.",
  },
  {
    number: "02",
    title: "Start with better data.",
    text: "Reliable recognition starts before training. We audit labels, preserve Unicode, remove overlap, and reserve a locked test split.",
    className: "data-art",
    glyph: "Aa",
    caption: "Careful inputs. Clearer experiments.",
  },
  {
    number: "03",
    title: "Let evidence lead.",
    text: "Small, controlled experiments come first. We plan to compare recognition approaches on the same data and report character error rate.",
    className: "evidence-art",
    glyph: "↗",
    caption: "Measure, learn, then build.",
  },
];
const milestones = [
  {
    state: "Completed",
    title: "Prepare the foundation",
    text: "An initial cleaning run for one synthetic printed Khmer source, with training, validation, and locked test splits.",
  },
  {
    state: "Next",
    title: "Validate the pipeline",
    text: "Verify the revised preparation workflow and run a small-set training gate before larger experiments.",
  },
  {
    state: "Planned",
    title: "Compare and evaluate",
    text: "Compare recognition approaches fairly, inspect errors, and evaluate a fixed configuration on the locked test set.",
  },
  {
    state: "Future direction",
    title: "Move toward real documents",
    text: "Study ornate lettering and other document styles separately, before working toward a useful public tool.",
  },
];
const questions = [
  {
    question: "Can I use OpenKhmer OCR today?",
    answer:
      "Not yet. OpenKhmer is a research initiative. We don’t have a public OCR product, a released API, or published accuracy results. The preview above is a hand-authored illustration of the intended experience, not live model output.",
  },
  {
    question: "What has been completed so far?",
    answer:
      "Our October 2, 2026 research notes record a completed initial data-cleaning run for one synthetic printed Khmer source: 60,724 training, 3,308 validation, and 3,379 locked test examples. Execution of the revised preparation workflow and the next training gate remains to be verified.",
  },
  {
    question: "How can a sponsor help?",
    answer:
      "Cloud and GPU credits can support controlled training and evaluation. Technical mentorship can help us review model choices and experimental design. Startup programs can help us build a path from research to a sustainable product. Get in touch to discuss a specific contribution and milestone.",
  },
  {
    question: "Do you have external sponsors or startup program membership?",
    answer:
      "No external sponsorship or startup program membership is claimed. OpenKhmer is a Neuroshift product in development. We’re seeking conversations with AI infrastructure providers, startup programs, and Khmer language research collaborators.",
  },
];

// The server-rendered page keeps the complete narrative together; only navigation
// and the illustrative tabs need client state.
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow-pill">Khmer OCR research by Neuroshift</p>
            <h1 id="hero-title">
              Khmer text.
              <br />A new chapter.
            </h1>
            <p className="hero-description">
              We’re researching how to turn printed Khmer into searchable text,
              starting with careful data preparation and model evaluation.
            </p>
            <div className="hero-actions">
              <ActionLink variant="primary" href={site.sponsorHref}>
                Email the team
              </ActionLink>
              <ActionLink variant="text" href="/research/openkhmer-data-preparation">
                Read the research record
              </ActionLink>
            </div>
            <p className="hero-note">Research stage. No public OCR tool yet.</p>
          </div>
          <DocumentArt />
          <div className="hero-bottom">
            <span>OPENKHMER / RESEARCH IN CAMBODIA</span>
            <a href="#mission">
              Why Khmer OCR <Arrow className="arrow-down" />
            </a>
          </div>
        </section>
        <div className="mission-strip" aria-label="Research priorities">
          <span>Khmer script</span>
          <span>Training data</span>
          <span>Model evaluation</span>
        </div>
        <section id="mission" className="mission section-shell section-padding">
          <div className="section-kicker">MISSION</div>
          <div className="mission-layout">
            <h2>
              Making Khmer
              <br />
              text searchable.
            </h2>
            <div className="mission-copy">
              <p className="lead">
                Printed Khmer documents should be as easy to search and reuse as
                the text we create digitally.
              </p>
              <p>
                Our research starts with synthetic printed text, audited labels,
                and controlled recognition experiments. Real documents will need
                separate data and evaluation before a public tool is ready.
              </p>
              <ActionLink variant="text" href="#research">
                Meet the research <Arrow />
              </ActionLink>
            </div>
          </div>
          <div className="possibilities">
            <span>WHAT WE’RE WORKING TOWARD</span>
            <div>
              <span>Searchable documents</span>
              <span>Accessible knowledge</span>
              <span>Khmer-first tools</span>
            </div>
          </div>
        </section>
        <section
          id="research"
          className="research section-shell section-padding"
        >
          <div className="section-heading">
            <div>
              <div className="section-kicker">RESEARCH</div>
              <h2>
                Our research
                <br />
                priorities.
              </h2>
            </div>
            <p>
              Data quality, script handling, and controlled evaluation guide our
              experiments.
            </p>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar" key={pillar.number}>
                <div
                  className={`pillar-visual ${pillar.className}`}
                  aria-hidden="true"
                >
                  <div className="art-grid" />
                  <span
                    className="pillar-glyph"
                    lang={pillar.number === "01" ? "km" : undefined}
                  >
                    {pillar.glyph}
                  </span>
                  {pillar.number === "02" && (
                    <>
                      <i />
                      <i />
                      <i />
                    </>
                  )}
                  {pillar.number === "03" && (
                    <div className="chart-bars">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  )}
                  <span className="art-caption">{pillar.caption}</span>
                </div>
                <div className="pillar-content">
                  <span className="mono-label">/{pillar.number}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="vision" className="vision section-shell section-padding">
          <div className="section-heading">
            <div>
              <div className="section-kicker">CONCEPT PREVIEW</div>
              <h2>
                From printed Khmer
                <br />
                to digital text.
              </h2>
            </div>
            <p>Three examples of the intended reading experience.</p>
          </div>
          <VisionPreview />
        </section>
        <section
          id="progress"
          className="progress-section section-shell section-padding"
        >
          <div className="section-heading">
            <div>
              <div className="section-kicker">STATUS</div>
              <h2>
                Progress and
                <br />
                next steps.
              </h2>
            </div>
            <div className="progress-intro">
              <p>
                We’re building the foundation, and sharing where we stand. No
                public product or validated benchmark yet.
              </p>
              <span className="mono-label">
                RESEARCH SNAPSHOT · OCT 02, 2026
              </span>
            </div>
          </div>
          <div className="corpus">
            <div className="corpus-title">
              <span className="status-dot" />
              <span>
                Initial prepared corpus
                <br />
                <small>One synthetic printed source</small>
              </span>
            </div>
            <div>
              <strong>60,724</strong>
              <span>Training examples</span>
            </div>
            <div>
              <strong>3,308</strong>
              <span>Validation examples</span>
            </div>
            <div>
              <strong>3,379</strong>
              <span>Locked test examples</span>
            </div>
          </div>
          <div className="milestone-grid">
            {milestones.map((milestone, index) => (
              <article className="milestone" key={milestone.title}>
                <div className="milestone-top">
                  <span
                    className={`milestone-dot ${index === 0 ? "done" : ""}`}
                  >
                    {index === 0 ? "✓" : `0${index + 1}`}
                  </span>
                  <span
                    className={`stage-label ${index === 0 ? "completed" : ""}`}
                  >
                    {milestone.state}
                  </span>
                </div>
                <h3>{milestone.title}</h3>
                <p>{milestone.text}</p>
              </article>
            ))}
          </div>
          <div className="record-actions">
            <ActionLink variant="text" href="/research/openkhmer-data-preparation">
              Read the preparation results and next experiment <Arrow />
            </ActionLink>
            <ActionLink variant="text" href="/research-brief.txt" download>
              Download the research brief
            </ActionLink>
          </div>
        </section>
        <section id="team" className="team-section section-shell section-padding">
          <div>
            <div className="section-kicker">THE COMPANY BEHIND OPENKHMER</div>
            <h2>Built by Neuroshift.</h2>
          </div>
          <div className="team-copy">
            <p className="lead">
              OpenKhmer is {site.company}’s Khmer OCR product in development,
              based in Cambodia. Our current work is research and evaluation.
            </p>
            <p>
              Project contact: {site.contactName}. For research questions,
              technical collaboration, or startup program enquiries, contact us
              directly.
            </p>
            <ActionLink variant="text" href={`mailto:${site.email}`}>
              {site.email}
            </ActionLink>
            <ActionLink variant="text" href={site.websiteSource}>
              View the website source on GitHub <Arrow diagonal />
            </ActionLink>
          </div>
        </section>
        <section id="support" className="support-section">
          <div className="section-shell support-inner">
            <div className="support-copy">
              <div className="section-kicker">SPONSORSHIP</div>
              <h2>
                Support Khmer
                <br />
                OCR research.
              </h2>
              <p>
                Our next milestone is to verify the revised data pipeline and
                run a 16-example training gate. Compute credits and technical
                guidance would help us complete and document that work.
              </p>
              <ActionLink variant="primary" href={site.sponsorHref}>
                Email the team
              </ActionLink>
              <ActionLink
                className="support-email"
                variant="text"
                href={`mailto:${site.email}`}
              >
                {site.email} <Arrow diagonal />
              </ActionLink>
            </div>
            <div className="support-options">
              <article>
                <span className="support-number">01</span>
                <div>
                  <h3>Compute & cloud credits</h3>
                  <p>
                    Make room for controlled training, model comparisons, and
                    careful evaluation.
                  </p>
                </div>
              </article>
              <article>
                <span className="support-number">02</span>
                <div>
                  <h3>Technical mentorship</h3>
                  <p>
                    Bring expertise in OCR, Khmer language technology, and
                    research design.
                  </p>
                </div>
              </article>
              <article>
                <span className="support-number">03</span>
                <div>
                  <h3>Startup program support</h3>
                  <p>
                    Help shape a sustainable path from a research idea to a
                    useful product.
                  </p>
                </div>
              </article>
              <p className="support-footnote">
                Seeking collaborators and program support.
                <br />
                No external program membership or sponsorship is claimed.
              </p>
            </div>
          </div>
          <div className="support-watermark" aria-hidden="true" lang="km">
            ក
          </div>
        </section>
        <section id="faq" className="faq section-shell section-padding">
          <div>
            <div className="section-kicker">FAQ</div>
            <h2>
              Questions about
              <br />
              the project.
            </h2>
            <p>
              Have another question?
              <br />
              <ActionLink variant="text" href={`mailto:${site.email}`}>
                Say hello <Arrow diagonal />
              </ActionLink>
            </p>
          </div>
          <div className="faq-list">
            {questions.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <span className="faq-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
