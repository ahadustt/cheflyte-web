import * as React from "react";
import Lottie from "lottie-react";
import { ChefHat, Sparkles } from "lucide-react";

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
    console.log('LottieAnimation mounted with props:', { src, animationData, width, height });
    
    if (src && !animationData) {
      setLoading(true);
      console.log('Fetching animation from:', src);
      
      fetch(src)
        .then(response => {
          console.log('Fetch response:', response.status, response.statusText);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('Successfully loaded animation data:', data);
          console.log('Animation has', data.layers?.length || 0, 'layers');
          setAnimation(data);
          setError(null);
        })
        .catch(error => {
          console.error('Error loading Lottie animation:', error);
          setError(error.message);
        })
        .finally(() => {
          console.log('Setting loading to false');
          setLoading(false);
        });
    } else if (animationData) {
      console.log('Using provided animationData');
      setLoading(false);
    } else {
      console.log('No animation source provided');
      setLoading(false);
    }
  }, [src, animationData]);

  console.log('Current state:', { loading, error, hasAnimation: !!animation });

  // Temporary: Use simple animated SVG instead of Lottie for testing
  if (true) { // Force use SVG for debugging
    return (
      <div 
        className={className}
        style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}
      >
        <div className="relative">
          <ChefHat 
            size={64} 
            className="text-primary-600 animate-bounce" 
          />
          <Sparkles 
            size={24} 
            className="absolute -top-2 -right-2 text-accent-500 animate-pulse" 
          />
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div 
        className={className}
        style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}
      >
        <ChefHat size={48} className="text-primary-500 animate-pulse" />
      </div>
    );
  }

  if (error || !animation) {
    console.log('Rendering fallback due to:', { error, hasAnimation: !!animation });
    return (
      <div 
        className={className}
        style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}
      >
        <ChefHat size={48} className="text-primary-500" />
      </div>
    );
  }

  try {
    console.log('Attempting to render Lottie with animation:', animation);
    return (
      <Lottie
        animationData={animation}
        className={className}
        loop={loop}
        autoPlay={autoplay}
        style={{ width, height, ...style }}
        {...props}
      />
    );
  } catch (error) {
    console.error('Error rendering Lottie animation:', error);
    return (
      <div 
        className={className}
        style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}
      >
        <ChefHat size={48} className="text-primary-500" />
      </div>
    );
  }
} 