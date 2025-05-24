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

  React.useEffect(() => {
    if (src && !animationData) {
      fetch(src)
        .then(response => response.json())
        .then(data => setAnimation(data))
        .catch(error => console.error('Error loading Lottie animation:', error));
    }
  }, [src, animationData]);

  if (!animation) {
    return (
      <div 
        className={className}
        style={{ width, height, ...style }}
      >
        Loading animation...
      </div>
    );
  }

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
} 