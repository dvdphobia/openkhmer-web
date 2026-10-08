import type { ComponentProps } from "react";

type ActionLinkProps = ComponentProps<"a"> & {
  variant?: "primary" | "text" | "outline";
};

export function ActionLink({
  variant = "text",
  className = "",
  ...props
}: ActionLinkProps) {
  return (
    <a className={`action-link action--${variant} ${className}`} {...props} />
  );
}
