"use client";
import { useState, type KeyboardEvent } from "react";
import { Arrow } from "./icons";
const examples = [
  {
    title: "Printed text",
    label: "Printed Khmer sample",
    glyph: "ក",
    lines: ["ភាសាខ្មែរ", "ចំណេះដឹង និងអនាគត"],
    description:
      "Recognize printed Khmer while preserving the characters and marks that give it meaning.",
  },
  {
    title: "Mixed scripts",
    label: "Khmer and Latin sample",
    glyph: "ក Aa",
    lines: ["ភាសាខ្មែរ · Khmer", "OpenKhmer 2026"],
    description:
      "Explore pages where Khmer, Latin text, and numbers appear together.",
  },
  {
    title: "Document text",
    label: "Document concept sample",
    glyph: "ខ្មែរ",
    lines: ["អក្សរខ្មែរ", "From a page to searchable text"],
    description:
      "Work toward document text that people can search, reuse, and share. Full document handling is a future direction.",
  },
];
function SampleLine({ text }: { text: string }) {
  return (
    <p lang="en">
      {text.split(/([\u1780-\u17ff]+)/u).map((part, index) =>
        /[\u1780-\u17ff]/u.test(part) ? (
          <span key={index} lang="km">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </p>
  );
}
export function VisionPreview() {
  const [selected, setSelected] = useState(0);
  const example = examples[selected];
  function selectWithKey(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % examples.length
        : event.key === "ArrowLeft"
          ? (index + examples.length - 1) % examples.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? examples.length - 1
              : null;
    if (next === null) return;
    event.preventDefault();
    setSelected(next);
    document.getElementById(`example-tab-${next}`)?.focus();
  }
  return (
    <div className="vision-preview">
      <div className="preview-toolbar">
        <div
          className="preview-tabs"
          role="tablist"
          aria-label="Illustrative OCR examples"
        >
          {examples.map((item, index) => (
            <button
              key={item.title}
              id={`example-tab-${index}`}
              role="tab"
              aria-selected={selected === index}
              aria-controls="example-panel"
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => selectWithKey(event, index)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <span className="illustration-badge">Concept only</span>
      </div>
      <div
        id="example-panel"
        role="tabpanel"
        aria-labelledby={`example-tab-${selected}`}
        className="preview-body"
        tabIndex={0}
      >
        <div className="input-pane">
          <div className="pane-label">
            <span>SOURCE IMAGE</span>
            <span>image</span>
          </div>
          <div className="sample-page">
            <span className="sample-title">{example.label}</span>
            <div className="sample-glyph" lang="km">
              {example.glyph}
            </div>
            <div className="sample-lines">
              {example.lines.map((line) => (
                <SampleLine key={line} text={line} />
              ))}
            </div>
            <div className="sample-line-art">
              <i />
              <i />
              <i />
            </div>
            <span className="sample-footer">OPENKHMER · CONCEPT SAMPLE</span>
          </div>
        </div>
        <div className="transform-arrow" aria-hidden="true">
          <Arrow />
        </div>
        <div className="output-pane">
          <div className="pane-label">
            <span>EXAMPLE TEXT</span>
            <span>text</span>
          </div>
          <div className="output-text">
            <span className="output-comment">Hand-authored text</span>
            {example.lines.map((line) => (
              <SampleLine key={line} text={line} />
            ))}
          </div>
          <div className="output-caption">
            <p>{example.description}</p>
          </div>
        </div>
      </div>
      <div className="preview-disclaimer">
        <p>
          Concept only: these samples are hand-authored. No OCR is running, and
          the text is not a model prediction.
        </p>
      </div>
    </div>
  );
}
