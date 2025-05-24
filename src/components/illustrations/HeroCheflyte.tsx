import * as React from "react";

export function HeroCheflyte(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="heroTitle heroDesc"
      role="img"
      width="100%"
      height="100%"
      {...props}
    >
      <title id="heroTitle">Cheflyte AI Chef Network Illustration</title>
      <desc id="heroDesc">Abstract network of nodes and lines with a chef hat and utensils, representing the AI-powered chef platform.</desc>
      {/* Background gradient */}
      <defs>
        <linearGradient id="bgGradient" x1="0" y1="0" x2="480" y2="320" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-primary-100, #e0e7ff)" />
          <stop offset="1" stopColor="var(--color-accent-100, #ffe0f7)" />
        </linearGradient>
        <linearGradient id="nodeGradient" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="var(--color-primary-500, #6366f1)" />
          <stop offset="1" stopColor="var(--color-accent-500, #f472b6)" />
        </linearGradient>
      </defs>
      <rect width="480" height="320" rx="32" fill="url(#bgGradient)" />
      {/* Network nodes and lines */}
      <g stroke="url(#nodeGradient)" strokeWidth="2" opacity="0.5">
        <line x1="80" y1="220" x2="180" y2="120" />
        <line x1="180" y1="120" x2="300" y2="140" />
        <line x1="300" y1="140" x2="400" y2="80" />
        <line x1="300" y1="140" x2="380" y2="220" />
        <line x1="180" y1="120" x2="240" y2="60" />
        <line x1="240" y1="60" x2="400" y2="80" />
        <line x1="240" y1="60" x2="120" y2="80" />
        <line x1="120" y1="80" x2="80" y2="220" />
      </g>
      {/* Network nodes */}
      <g>
        <circle cx="80" cy="220" r="12" fill="url(#nodeGradient)" />
        <circle cx="180" cy="120" r="10" fill="url(#nodeGradient)" />
        <circle cx="300" cy="140" r="14" fill="url(#nodeGradient)" />
        <circle cx="400" cy="80" r="10" fill="url(#nodeGradient)" />
        <circle cx="240" cy="60" r="8" fill="url(#nodeGradient)" />
        <circle cx="120" cy="80" r="8" fill="url(#nodeGradient)" />
        <circle cx="380" cy="220" r="12" fill="url(#nodeGradient)" />
      </g>
      {/* Chef hat in the center */}
      <g>
        <ellipse cx="240" cy="180" rx="48" ry="28" fill="#fff" fillOpacity="0.95" stroke="url(#nodeGradient)" strokeWidth="3" />
        <ellipse cx="240" cy="170" rx="32" ry="18" fill="#fff" fillOpacity="0.95" />
        <ellipse cx="220" cy="170" rx="8" ry="6" fill="#e0e7ff" />
        <ellipse cx="240" cy="160" rx="12" ry="8" fill="#e0e7ff" />
        <ellipse cx="260" cy="170" rx="8" ry="6" fill="#e0e7ff" />
        <rect x="210" y="188" width="60" height="12" rx="6" fill="#f3f4f6" />
      </g>
      {/* Utensils - fork and spoon */}
      <g stroke="url(#nodeGradient)" strokeWidth="2" strokeLinecap="round">
        <line x1="200" y1="200" x2="200" y2="220" />
        <line x1="208" y1="200" x2="208" y2="220" />
        <line x1="272" y1="200" x2="272" y2="220" />
        <ellipse cx="272" cy="224" rx="4" ry="2" fill="#fff" />
      </g>
      {/* Plate under the hat */}
      <ellipse cx="240" cy="210" rx="40" ry="8" fill="#f3f4f6" />
    </svg>
  );
} 