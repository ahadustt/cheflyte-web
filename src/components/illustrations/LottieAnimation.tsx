import * as React from "react";
import Lottie from "lottie-react";
import { ChefHat, Sparkles, Utensils, Star } from "lucide-react";

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

  // Large, prominent animated illustration like Vouch website
  return (
    <div 
      className={className}
      style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}
    >
      <div className="relative w-full max-w-md mx-auto">
        {/* Main chef illustration - much larger */}
        <div className="relative bg-gradient-to-br from-primary-100/30 to-accent-100/30 rounded-3xl p-12 backdrop-blur-sm">
          {/* Central chef hat */}
          <div className="flex justify-center mb-8">
            <ChefHat 
              size={120} 
              className="text-primary-600 animate-bounce" 
              style={{ animationDuration: '2s' }}
            />
          </div>
          
          {/* Floating elements around the chef hat */}
          <div className="absolute top-8 left-8">
            <Sparkles 
              size={32} 
              className="text-accent-500 animate-pulse" 
              style={{ animationDelay: '0.5s' }}
            />
          </div>
          
          <div className="absolute top-12 right-12">
            <Star 
              size={28} 
              className="text-yellow-500 animate-pulse fill-current" 
              style={{ animationDelay: '1s' }}
            />
          </div>
          
          <div className="absolute bottom-8 left-12">
            <Utensils 
              size={36} 
              className="text-primary-500 animate-pulse" 
              style={{ animationDelay: '1.5s' }}
            />
          </div>
          
          <div className="absolute bottom-12 right-8">
            <Star 
              size={24} 
              className="text-accent-400 animate-pulse fill-current" 
              style={{ animationDelay: '2s' }}
            />
          </div>
          
          {/* Additional floating sparkles */}
          <div className="absolute top-1/3 left-4">
            <div className="w-3 h-3 bg-primary-400 rounded-full animate-ping" style={{ animationDelay: '0.8s' }}></div>
          </div>
          
          <div className="absolute bottom-1/3 right-4">
            <div className="w-2 h-2 bg-accent-400 rounded-full animate-ping" style={{ animationDelay: '1.3s' }}></div>
          </div>
          
          {/* Subtitle text */}
          <div className="text-center mt-6">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              AI-Powered Chef Matching
            </p>
          </div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary-200/20 to-accent-200/20 rounded-3xl blur-2xl -z-10"></div>
      </div>
    </div>
  );
} 