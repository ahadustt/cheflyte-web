import * as React from "react";

export function FeatureChefPro(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="chefProTitle chefProDesc"
      role="img"
      width={64}
      height={64}
      {...props}
    >
      <title id="chefProTitle">World-Class Professional Chefs Icon</title>
      <desc id="chefProDesc">Chef hat with a star and sparkles, representing world-class professional chefs.</desc>
      <defs>
        <linearGradient id="chefProGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-primary-500, #6366f1)" />
          <stop offset="1" stopColor="var(--color-accent-500, #f472b6)" />
        </linearGradient>
      </defs>
      {/* Chef hat */}
      <g>
        <ellipse cx="32" cy="36" rx="10" ry="6" fill="#fff" fillOpacity="0.95" stroke="url(#chefProGradient)" strokeWidth="1.5" />
        <ellipse cx="32" cy="33" rx="7" ry="3.5" fill="#e0e7ff" />
        <ellipse cx="28" cy="33" rx="2" ry="1.2" fill="#e0e7ff" />
        <ellipse cx="36" cy="33" rx="2" ry="1.2" fill="#e0e7ff" />
        <rect x="27" y="39" width="10" height="3" rx="1.5" fill="#f3f4f6" />
      </g>
      {/* Star (award) */}
      <polygon points="32,20 34,26 40,26 35,30 37,36 32,32 27,36 29,30 24,26 30,26" fill="url(#chefProGradient)" stroke="url(#chefProGradient)" strokeWidth="1" />
      {/* Sparkles/tech accents */}
      <g stroke="url(#chefProGradient)" strokeWidth="1.2" strokeLinecap="round">
        <line x1="44" y1="24" x2="48" y2="24" />
        <line x1="46" y1="22" x2="46" y2="26" />
        <line x1="16" y1="28" x2="20" y2="28" />
        <line x1="18" y1="26" x2="18" y2="30" />
        <line x1="40" y1="44" x2="44" y2="48" />
        <line x1="24" y1="44" x2="20" y2="48" />
      </g>
    </svg>
  );
} 