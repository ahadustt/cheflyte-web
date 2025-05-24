import * as React from "react";

/**
 * Cheflyte Logo: Modern AI-forward brand mark
 * Sophisticated geometric design representing connection, innovation, and culinary excellence
 * Scalable SVG with gradient support for premium aesthetic
 */
export function CheflyteLogo({ 
  size = 40, 
  className = "", 
  variant = "default" 
}: { 
  size?: number; 
  className?: string;
  variant?: "default" | "white" | "dark" | "gradient"
}) {
  
  // Use React's useId hook for consistent SSR/client IDs
  const uniqueId = React.useId();
  const gradientId = `cheflyte-gradient-${uniqueId}`;
  const shadowId = `cheflyte-shadow-${uniqueId}`;

  // Color variants for different contexts
  const getColors = () => {
    switch (variant) {
      case "white":
        return {
          primary: "#ffffff",
          secondary: "#ffffff",
          accent: "#ffffff"
        };
      case "dark":
        return {
          primary: "#1f2937",
          secondary: "#374151", 
          accent: "#4b5563"
        };
      case "gradient":
        return {
          primary: `url(#${gradientId})`,
          secondary: `url(#${gradientId})`,
          accent: `url(#${gradientId})`
        };
      default:
        return {
          primary: "#2563eb",
          secondary: "#0ea5e9",
          accent: "#10b981"
        };
    }
  };

  const colors = getColors();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cheflyte - AI-powered chef platform"
    >
      <defs>
        {/* Modern gradient for premium feel */}
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        
        {/* Subtle shadow for depth */}
        <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.1"/>
        </filter>
      </defs>

      {/* Main symbol: Abstract "C" representing connection and sophistication */}
      <g filter={`url(#${shadowId})`}>
        {/* Outer ring - represents global reach and completeness */}
        <path
          d="M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18c7.732 0 14.383-4.87 16.937-11.696"
          stroke={colors.primary}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Inner dynamic element - represents AI intelligence and movement */}
        <path
          d="M24 12c-5.062 0-9.343 3.14-11.086 7.565"
          stroke={colors.secondary}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Central dot - represents precision and focus */}
        <circle
          cx="24"
          cy="24"
          r="3"
          fill={colors.accent}
        />
        
        {/* Connecting lines - represent network and connectivity */}
        <path
          d="M24 21v6M21 24h6"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        
        {/* Accent curves - represent innovation and forward movement */}
        <path
          d="M30 15c2.5 2.5 4 6 4 9.5"
          stroke={colors.secondary}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        
        <path
          d="M33 18c1.5 1.5 2.5 3.5 2.5 6"
          stroke={colors.accent}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
