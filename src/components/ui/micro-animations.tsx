"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

// Intersection Observer Hook for scroll-triggered animations
function useIntersectionObserver(options?: IntersectionObserverInit & { triggerOnce?: boolean }) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const { triggerOnce, ...observerOptions } = options || {};

    const observer = new IntersectionObserver(([entry]) => {
      const isCurrentlyIntersecting = entry.isIntersecting;
      
      if (triggerOnce) {
        if (isCurrentlyIntersecting && !hasTriggered) {
          setIsIntersecting(true);
          setHasTriggered(true);
        }
      } else {
        setIsIntersecting(isCurrentlyIntersecting);
      }
    }, observerOptions);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options, hasTriggered]);

  return { ref, isIntersecting };
}

// Fade In Up Animation Component
interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function FadeInUp({ 
  children, 
  delay = 0, 
  duration = 500, 
  className,
  once = true 
}: FadeInUpProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: once,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isIntersecting 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Scale In Animation Component
interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function ScaleIn({ 
  children, 
  delay = 0, 
  duration = 300, 
  className,
  once = true 
}: ScaleInProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: once,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isIntersecting 
          ? "opacity-100 scale-100" 
          : "opacity-0 scale-95",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Slide In From Right Animation Component
interface SlideInRightProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function SlideInRight({ 
  children, 
  delay = 0, 
  duration = 400, 
  className,
  once = true 
}: SlideInRightProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: once,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isIntersecting 
          ? "opacity-100 translate-x-0" 
          : "opacity-0 translate-x-8",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Slide In From Left Animation Component
interface SlideInLeftProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function SlideInLeft({ 
  children, 
  delay = 0, 
  duration = 400, 
  className,
  once = true 
}: SlideInLeftProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: once,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isIntersecting 
          ? "opacity-100 translate-x-0" 
          : "opacity-0 -translate-x-8",
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Stagger Animation Container
interface StaggerProps {
  children: React.ReactNode;
  delay?: number;
  stagger?: number;
  className?: string;
  once?: boolean;
}

export function Stagger({ 
  children, 
  delay = 0, 
  stagger = 100, 
  className,
  once = true 
}: StaggerProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: once,
  });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <FadeInUp
          key={index}
          delay={delay + (index * stagger)}
          once={once}
        >
          {child}
        </FadeInUp>
      ))}
    </div>
  );
}

// Hover Scale Effect Component
interface HoverScaleProps {
  children: React.ReactNode;
  scale?: number;
  className?: string;
}

export function HoverScale({ 
  children, 
  scale = 1.05, 
  className 
}: HoverScaleProps) {
  return (
    <div 
      className={cn(
        "transition-transform duration-200 ease-out cursor-pointer",
        className
      )}
      style={{
        transform: `scale(1)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `scale(${scale})`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `scale(1)`;
      }}
    >
      {children}
    </div>
  );
}

// Hover Lift Effect Component
interface HoverLiftProps {
  children: React.ReactNode;
  lift?: number;
  className?: string;
}

export function HoverLift({ 
  children, 
  lift = 4, 
  className 
}: HoverLiftProps) {
  return (
    <div 
      className={cn(
        "transition-all duration-200 ease-out cursor-pointer",
        className
      )}
      style={{
        transform: `translateY(0px)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = `translateY(-${lift}px)`;
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = `translateY(0px)`;
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {children}
    </div>
  );
}

// Hover Glow Effect Component
interface HoverGlowProps {
  children: React.ReactNode;
  color?: string;
  intensity?: number;
  className?: string;
}

export function HoverGlow({ 
  children, 
  color = "rgb(59, 130, 246)", // primary-600
  intensity = 0.3,
  className 
}: HoverGlowProps) {
  return (
    <div 
      className={cn(
        "transition-all duration-300 ease-out cursor-pointer",
        className
      )}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${color.replace('rgb', 'rgba').replace(')', `, ${intensity})`)}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {children}
    </div>
  );
}

// Loading State Transition Component
interface LoadingStateProps {
  loading: boolean;
  children: React.ReactNode;
  skeleton?: React.ReactNode;
  className?: string;
}

export function LoadingState({ 
  loading, 
  children, 
  skeleton,
  className 
}: LoadingStateProps) {
  return (
    <div className={cn("relative", className)}>
      <div 
        className={cn(
          "transition-opacity duration-300",
          loading ? "opacity-0" : "opacity-100"
        )}
      >
        {children}
      </div>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {skeleton || (
            <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg w-full h-full" />
          )}
        </div>
      )}
    </div>
  );
}

// Parallax Effect Component
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ 
  children, 
  speed = 0.5, 
  className 
}: ParallaxProps) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      setOffset(rate);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
}

// Typewriter Effect Component
interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
}

export function Typewriter({ 
  text, 
  speed = 50, 
  delay = 0,
  className,
  cursor = true 
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay]);

  useEffect(() => {
    if (cursor) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 530);

      return () => clearInterval(cursorTimer);
    }
  }, [cursor]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && currentIndex >= text.length && (
        <span className={cn("ml-1", showCursor ? "opacity-100" : "opacity-0")}>
          |
        </span>
      )}
    </span>
  );
} 