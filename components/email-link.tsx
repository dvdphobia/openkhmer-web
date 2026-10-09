import { site } from "@/lib/site";

type EmailLinkProps = {
  className?: string;
  label?: string;
  suffix?: string;
  variant?: "primary" | "text" | "outline";
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#x27;";
    }
  });
}

export function EmailLink({
  className = "",
  label = site.email,
  suffix,
  variant,
}: EmailLinkProps) {
  const classes = [
    className,
    variant ? `action-link action--${variant}` : "",
  ]
    .filter(Boolean)
    .join(" ");
  const safeEmail = escapeHtml(site.email);
  const safeLabel = escapeHtml(label);
  const safeClasses = escapeHtml(classes);
  const suffixMarkup = suffix
    ? ` <span aria-hidden="true">${escapeHtml(suffix)}</span>`
    : "";
  const html = `<!--email_off--><a class="${safeClasses}" href="mailto:${safeEmail}">${safeLabel}${suffixMarkup}</a><!--/email_off-->`;

  return (
    <span
      className="email-link-shell"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
