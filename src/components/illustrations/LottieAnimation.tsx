import * as React from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationData?: any;
  src?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

export function LottieAnimation({
  animationData,
  src,
  width = "100%",
  height = "100%",
  className,
  loop = true,
  autoplay = true,
  style,
  ...props
}: LottieAnimationProps) {
  const [animation, setAnimation] = React.useState(animationData);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (src && !animationData) {
      setLoading(true);
      fetch(src)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setAnimation(data);
          setError(null);
        })
        .catch(error => {
          console.error('Error loading Lottie animation:', error);
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (animationData) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [src, animationData]);

  // Modern, unified hero illustration inspired by Vouch design
  return (
    <div 
      className={className}
      style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}
    >
      <div className="relative w-full max-w-lg mx-auto">
        {/* Main illustration container */}
        <div className="relative">
          {/* Central geometric design */}
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-16 shadow-xl">
            
            {/* Connected network design representing AI matching */}
            <svg
              viewBox="0 0 320 240"
              className="w-full h-auto"
              style={{ maxHeight: '240px' }}
            >
              {/* Background gradient */}
              <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(99 102 241)" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="rgb(236 72 153)" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(99 102 241)" />
                  <stop offset="100%" stopColor="rgb(236 72 153)" />
                </linearGradient>
              </defs>
              
              {/* Background shape */}
              <rect width="320" height="240" fill="url(#bgGradient)" rx="16" />
              
              {/* Connection lines (animated) */}
              <g stroke="rgb(99 102 241)" strokeWidth="2" fill="none" opacity="0.6">
                <line x1="80" y1="60" x2="160" y2="120">
                  <animate attributeName="stroke-dasharray" values="0,200;100,100;0,200" dur="3s" repeatCount="indefinite" />
                </line>
                <line x1="240" y1="60" x2="160" y2="120">
                  <animate attributeName="stroke-dasharray" values="0,200;100,100;0,200" dur="3s" begin="0.5s" repeatCount="indefinite" />
                </line>
                <line x1="160" y1="120" x2="80" y2="180">
                  <animate attributeName="stroke-dasharray" values="0,200;100,100;0,200" dur="3s" begin="1s" repeatCount="indefinite" />
                </line>
                <line x1="160" y1="120" x2="240" y2="180">
                  <animate attributeName="stroke-dasharray" values="0,200;100,100;0,200" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </line>
              </g>
              
              {/* Network nodes */}
              <g>
                {/* Chef node (top-left) */}
                <circle cx="80" cy="60" r="16" fill="url(#nodeGradient)" className="drop-shadow-lg">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="1;1.1;1"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text x="80" y="65" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">👨‍🍳</text>
                
                {/* AI Brain node (top-right) */}
                <circle cx="240" cy="60" r="16" fill="url(#nodeGradient)" className="drop-shadow-lg">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="1;1.1;1"
                    dur="2s"
                    begin="0.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text x="240" y="65" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">🧠</text>
                
                {/* Central AI processing node */}
                <circle cx="160" cy="120" r="20" fill="url(#nodeGradient)" className="drop-shadow-xl">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="1;1.2;1"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text x="160" y="126" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">⚡</text>
                
                {/* Customer node (bottom-left) */}
                <circle cx="80" cy="180" r="16" fill="url(#nodeGradient)" className="drop-shadow-lg">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="1;1.1;1"
                    dur="2s"
                    begin="1s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text x="80" y="185" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">👤</text>
                
                {/* Match result node (bottom-right) */}
                <circle cx="240" cy="180" r="16" fill="url(#nodeGradient)" className="drop-shadow-lg">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="1;1.1;1"
                    dur="2s"
                    begin="1.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text x="240" y="185" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">✨</text>
              </g>
            </svg>
            
            {/* Description text */}
            <div className="text-center mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Smart Chef Matching
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                AI connects customers with perfect chefs
              </p>
            </div>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-3xl blur-xl -z-10"></div>
        </div>
      </div>
    </div>
  );
} 