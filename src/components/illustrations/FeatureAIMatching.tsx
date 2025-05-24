import * as React from "react";

export function FeatureAIMatching(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="aiMatchTitle aiMatchDesc"
      role="img"
      width={64}
      height={64}
      {...props}
    >
      <title id="aiMatchTitle">AI-Powered Matching Icon</title>
      <desc id="aiMatchDesc">Chef hat with network nodes and connecting lines, representing AI-powered chef matching.</desc>
      <defs>
        <linearGradient id="aiNodeGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-primary-500, #6366f1)" />
          <stop offset="1" stopColor="var(--color-accent-500, #f472b6)" />
        </linearGradient>
      </defs>
      {/* Connection lines */}
      <g stroke="url(#aiNodeGradient)" strokeWidth="1.5" opacity="0.7">
        <line x1="16" y1="48" x2="32" y2="24" />
        <line x1="48" y1="48" x2="32" y2="24" />
        <line x1="32" y1="24" x2="32" y2="12" />
        <line x1="24" y1="36" x2="40" y2="36" />
      </g>
      {/* Network nodes */}
      <circle cx="16" cy="48" r="3" fill="url(#aiNodeGradient)" />
      <circle cx="48" cy="48" r="3" fill="url(#aiNodeGradient)" />
      <circle cx="32" cy="24" r="3" fill="url(#aiNodeGradient)" />
      <circle cx="32" cy="12" r="2" fill="url(#aiNodeGradient)" />
      <circle cx="24" cy="36" r="2" fill="url(#aiNodeGradient)" />
      <circle cx="40" cy="36" r="2" fill="url(#aiNodeGradient)" />
      {/* Chef hat */}
      <g>
        <ellipse cx="32" cy="32" rx="10" ry="6" fill="#fff" fillOpacity="0.95" stroke="url(#aiNodeGradient)" strokeWidth="1.5" />
        <ellipse cx="32" cy="29" rx="7" ry="3.5" fill="#e0e7ff" />
        <ellipse cx="28" cy="29" rx="2" ry="1.2" fill="#e0e7ff" />
        <ellipse cx="36" cy="29" rx="2" ry="1.2" fill="#e0e7ff" />
        <rect x="27" y="36" width="10" height="3" rx="1.5" fill="#f3f4f6" />
      </g>
    </svg>
  );
} 