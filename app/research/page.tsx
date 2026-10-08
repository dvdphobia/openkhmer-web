import type { Metadata } from "next";
import { ActionLink } from "@/components/action-link";
import { Navigation } from "@/components/navigation";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "OpenKhmer research record — Preparation results and next experiment",
  description:
    "A dated record of OpenKhmer’s initial data preparation, current model limitations, and the next validation gate. Khmer OCR research by Neuroshift.",
};

const counts = [
  ["Source rows", "100,000"],
  ["Multiline labels rejected", "25,309"],
  ["Labels without Khmer rejected", "5,787"],
  ["Training rows with labels in source test excluded", "1,493"],
  ["Final training examples", "60,724"],
  ["Final validation examples", "3,308"],
  ["Final locked test examples", "3,379"],
];

export default function ResearchRecord() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation home={false} />
      <main id="main" className="research-record section-shell">
        <header className="record-intro section-padding">
          <ActionLink variant="text" href="/">Back to OpenKhmer</ActionLink>
          <p className="section-kicker">RESEARCH RECORD / 01</p>
          <h1>What we have.<br />What comes next.</h1>
          <p className="lead">
            OpenKhmer is Neuroshift’s Khmer OCR product in development. This
            record separates completed data preparation from experiments that
            still need to run.
          </p>
          <p className="record-date">
            Published October 8, 2026 · Research evidence dated October 2, 2026
          </p>
        </header>

        <section className="record-section" aria-labelledby="preparation-title">
          <div><p className="section-kicker">COMPLETED</p><h2 id="preparation-title">Initial data preparation.</h2></div>
          <div className="record-copy">
            <p>
              The project’s October 2 status notes record a successful Colab
              cleaning run of the Sokheng Khmer Synthetic OCR v1 source. It
              covers synthetic printed Khmer and mixed Khmer-English text; it
              does not establish performance on photographed documents,
              handwriting, or ornate lettering.
            </p>
            <div className="record-table-wrap">
              <table className="record-table">
                <caption>Initial preparation run: row counts</caption>
                <thead><tr><th scope="col">Measure</th><th scope="col">Examples</th></tr></thead>
                <tbody>{counts.map(([label, count]) => <tr key={label}><th scope="row">{label}</th><td>{count}</td></tr>)}</tbody>
              </table>
            </div>
            <p>
              The run found zero exact duplicate images and zero conflicting
              image-label hashes. The training/validation dictionary contains
              184 codepoints. These are preparation results, not OCR accuracy.
            </p>
            <p>
              Labels were normalized to NFC with outer-space trimming. Khmer
              marks and joiners were preserved. Multiline and invalid labels
              were rejected, and training labels found in the source test set
              were excluded before the remaining training data was split.
            </p>
            <details className="record-provenance">
              <summary>Run provenance and reported artifacts</summary>
              <dl>
                <dt>Run ID</dt><dd><code>20261002T143314Z_3a2edb23</code></dd>
                <dt>Recorded completion</dt><dd>October 2, 2026, 15:00:46 UTC</dd>
                <dt>Source revision</dt><dd><code>dca80198ee5e16dea60db11bbe7b7811c973a048</code></dd>
                <dt>Reported outputs</dt><dd>Split files, manifest, cleaning report, Unicode audit, run status, and character dictionary.</dd>
              </dl>
              <p>
                This public record summarizes project notes; the cloud artifacts
                are not provided here for independent inspection. No private
                dataset or cloud access is shared by this website.
              </p>
            </details>
          </div>
        </section>

        <section className="record-section" aria-labelledby="limitations-title">
          <div><p className="section-kicker">CURRENT LIMITATIONS</p><h2 id="limitations-title">No validated OCR model yet.</h2></div>
          <div className="record-copy">
            <p>
              An earlier PaddleOCR-VL diagnostic produced unusable Khmer output.
              It is not a usable product or a benchmark. We have no published
              accuracy result, public OCR API, or verified transcription from
              that diagnostic.
            </p>
            <p>
              The revised Kaggle preparation and smoke-test notebooks have been
              reviewed locally, but their execution on the real inputs and
              saved outputs remains unverified in the October 2 review. Source
              review is separate from a successful run.
            </p>
            <p>
              The homepage’s text examples are hand-authored illustrations.
              They are not predictions from our model. Other document styles
              need separate data and evaluation.
            </p>
          </div>
        </section>

        <section className="record-section" aria-labelledby="gate-title">
          <div><p className="section-kicker">NEXT MILESTONE</p><h2 id="gate-title">Verify the training pipeline.</h2></div>
          <div className="record-copy">
            <p>
              Before larger training runs, we need to show that the revised
              pipeline can prepare a usable corpus and learn a small, fixed set.
              This is a diagnostic gate, not evidence of generalization.
            </p>
            <ol className="record-steps">
              <li><strong>Run and save preparation.</strong> Execute the reviewed Kaggle notebook on attached inputs. Require completed status, nonempty splits, a manifest, a cleaning report, and a Unicode audit. Verify a saved version retains the outputs.</li>
              <li><strong>Inspect labels and tokenization.</strong> Check image/label pairs and Khmer, mixed-script, and joiner round trips. Inspect supervised target tokens before training.</li>
              <li><strong>Run the small-set gate.</strong> Use 16 deterministic training examples and a separate 16-example validation sample. Report NFC-aware character error rate, exact-match rate, and aligned errors. If memorization fails, diagnose the pipeline before scaling.</li>
              <li><strong>Document the result.</strong> Record the data version, model and dependency revisions, seed, training settings, and GPU time. Keep the locked test set untouched while designing and tuning experiments.</li>
            </ol>
            <p>
              If the gate passes, compare recognition approaches on the same
              data and evaluate the locked test set only after selecting a fixed
              configuration. No success date or accuracy target is promised.
            </p>
          </div>
        </section>

        <section className="record-section" aria-labelledby="support-title">
          <div><p className="section-kicker">WORK WITH US</p><h2 id="support-title">Support a defined experiment.</h2></div>
          <div className="record-copy">
            <p>
              Compute credits would support the gate and its follow-up
              evaluation. Technical collaborators could review Khmer labels,
              tokenization, or experimental design. The intended deliverable is
              a documented run and error analysis, including failures.
            </p>
            <p>Project contact: {site.contactName} · {site.company}, Cambodia.</p>
            <div className="record-actions">
              <ActionLink variant="primary" href={site.sponsorHref}>Discuss this milestone</ActionLink>
              <ActionLink variant="text" href="/research-brief.txt" download>Download the research brief</ActionLink>
            </div>
          </div>
        </section>

        <section className="record-section" aria-labelledby="sources-title">
          <div><p className="section-kicker">ABOUT THIS RECORD</p><h2 id="sources-title">Evidence and provenance.</h2></div>
          <div className="record-copy">
            <p>
              This summary is based on two project documents dated October 2,
              2026: <cite>OpenKhmer project status</cite> and <cite>Khmer OCR
              research review and next experiment</cite>. Counts and run metadata
              come from the first; execution limitations and next gates come
              from the second. No new model execution is claimed by this page.
            </p>
            <ActionLink variant="text" href="/research-status.json" download>Download the dated status summary (JSON)</ActionLink>
            <p>
              The <a href={site.websiteSource}>public GitHub repository</a>
              {" "}contains this website’s code. It is not a released OCR model or
              a repository of dataset artifacts.
            </p>
          </div>
        </section>
      </main>
      <footer className="record-footer section-shell">
        <span>OpenKhmer · A Neuroshift product in development</span>
        <ActionLink variant="text" href={`mailto:${site.email}`}>{site.email}</ActionLink>
      </footer>
    </>
  );
}
