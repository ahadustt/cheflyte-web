import * as React from "react";
import Lottie from "lottie-react";
import { ChefHat } from "lucide-react";

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
          console.log('Loaded animation data:', data);
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
    }
  }, [src, animationData]);

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