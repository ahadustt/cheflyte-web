import * as React from "react";

/**
 * Cheflyte Logo: Minimalist chef hat in brand dark green (#213F33)
 * Scalable SVG, no text, for use in header and style guide
 */
export function CheflyteLogo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cheflyte logo"
    >
      {/* Hat dome */}
      <ellipse cx="24" cy="18" rx="16" ry="10" stroke="#213F33" strokeWidth="3" fill="none" />
      {/* Hat base */}
      <rect x="12" y="26" width="24" height="8" rx="4" stroke="#213F33" strokeWidth="3" fill="none" />
      {/* Left cheek */}
      <ellipse cx="14" cy="32" rx="3" ry="2" stroke="#213F33" strokeWidth="2" fill="none" />
      {/* Right cheek */}
      <ellipse cx="34" cy="32" rx="3" ry="2" stroke="#213F33" strokeWidth="2" fill="none" />
    </svg>
  );
}
