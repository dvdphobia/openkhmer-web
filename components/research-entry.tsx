import Link from "next/link";
import { researchEntry } from "@/lib/research";
import { ResearchArt } from "./research-art";

export function ResearchEntry() {
  return (
    <Link className="research-entry" href={researchEntry.href}>
      <ResearchArt compact />
      <div className="research-entry-copy">
        <div className="company-meta"><span>{researchEntry.category}</span><time dateTime={researchEntry.published}>{researchEntry.dateLabel}</time></div>
        <h3>{researchEntry.title}</h3>
        <p>{researchEntry.description}</p>
        <span className="company-inline-link">Read the record <span aria-hidden="true">↗</span></span>
      </div>
    </Link>
  );
}
