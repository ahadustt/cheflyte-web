"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

// Loading Spinner Component
const spinnerVariants = cva(
  "animate-spin rounded-full border-solid",
  {
    variants: {
      variant: {
        default: "border-gray-300 border-t-primary-600",
        primary: "border-primary-200 border-t-primary-600",
        secondary: "border-gray-200 border-t-gray-600",
        accent: "border-accent-200 border-t-accent-600",
        white: "border-white/30 border-t-white",
      },
      size: {
        sm: "h-4 w-4 border-2",
        default: "h-6 w-6 border-2",
        lg: "h-8 w-8 border-3",
        xl: "h-12 w-12 border-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface LoadingSpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

export function LoadingSpinner({ variant, size, className }: LoadingSpinnerProps) {
  return (
    <div className={cn(spinnerVariants({ variant, size }), className)} />
  );
}

// Pulsing Dots Component
const dotsVariants = cva(
  "flex space-x-2",
  {
    variants: {
      variant: {
        default: "[&>div]:bg-gray-600",
        primary: "[&>div]:bg-primary-600",
        accent: "[&>div]:bg-accent-600",
        white: "[&>div]:bg-white",
      },
      size: {
        sm: "[&>div]:h-2 [&>div]:w-2",
        default: "[&>div]:h-3 [&>div]:w-3",
        lg: "[&>div]:h-4 [&>div]:w-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface LoadingDotsProps extends VariantProps<typeof dotsVariants> {
  className?: string;
}

export function LoadingDots({ variant, size, className }: LoadingDotsProps) {
  return (
    <div className={cn(dotsVariants({ variant, size }), className)}>
      <div className="rounded-full animate-pulse" style={{ animationDelay: "0ms", animationDuration: "1.4s" }} />
      <div className="rounded-full animate-pulse" style={{ animationDelay: "160ms", animationDuration: "1.4s" }} />
      <div className="rounded-full animate-pulse" style={{ animationDelay: "320ms", animationDuration: "1.4s" }} />
    </div>
  );
}

// Progress Bar Component
const progressVariants = cva(
  "w-full bg-gray-200 rounded-full overflow-hidden",
  {
    variants: {
      variant: {
        default: "[&>div]:bg-primary-600",
        accent: "[&>div]:bg-accent-600",
        success: "[&>div]:bg-green-600",
        gradient: "[&>div]:bg-gradient-to-r [&>div]:from-primary-600 [&>div]:to-accent-600",
      },
      size: {
        sm: "h-1",
        default: "h-2",
        lg: "h-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface LoadingProgressProps extends VariantProps<typeof progressVariants> {
  progress?: number;
  indeterminate?: boolean;
  className?: string;
}

export function LoadingProgress({ 
  variant, 
  size, 
  progress = 0, 
  indeterminate = false, 
  className 
}: LoadingProgressProps) {
  return (
    <div className={cn(progressVariants({ variant, size }), className)}>
      <div 
        className={cn(
          "h-full transition-all duration-300 ease-out",
          indeterminate 
            ? "w-1/3 animate-[shimmer_2s_ease-in-out_infinite]" 
            : ""
        )}
        style={!indeterminate ? { width: `${Math.min(100, Math.max(0, progress))}%` } : undefined}
      />
    </div>
  );
}

// Skeleton Loader Component
const skeletonVariants = cva(
  "animate-pulse rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]",
  {
    variants: {
      variant: {
        default: "bg-gray-200",
        card: "bg-gray-100",
        text: "bg-gray-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface LoadingSkeletonProps extends VariantProps<typeof skeletonVariants> {
  className?: string;
  children?: React.ReactNode;
}

export function LoadingSkeleton({ variant, className, children }: LoadingSkeletonProps) {
  return (
    <div className={cn(skeletonVariants({ variant }), className)}>
      {children}
    </div>
  );
}

// Page Loading Component
interface PageLoadingProps {
  title?: string;
  description?: string;
  className?: string;
}

export function PageLoading({ 
  title = "Loading...", 
  description = "Please wait while we prepare your content", 
  className 
}: PageLoadingProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center min-h-[400px] space-y-6", className)}>
      <div className="relative">
        <LoadingSpinner variant="primary" size="xl" />
        <div className="absolute inset-0 rounded-full bg-primary-600/20 animate-ping" />
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <LoadingDots variant="primary" />
    </div>
  );
}

// Button Loading State (for integration with Button component)
export function ButtonLoading({ size = "default" }: { size?: "sm" | "default" | "lg" }) {
  const spinnerSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "default";
  return <LoadingSpinner variant="white" size={spinnerSize} />;
}

// Card Loading Skeleton
export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800", className)}>
      <div className="space-y-4">
        <LoadingSkeleton className="h-12 w-12 rounded-xl" />
        <div className="space-y-2">
          <LoadingSkeleton className="h-6 w-3/4" />
          <LoadingSkeleton className="h-4 w-full" />
          <LoadingSkeleton className="h-4 w-2/3" />
        </div>
      </div>
    </div>
  );
}

// Form Loading Skeleton
export function FormSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <LoadingSkeleton className="h-4 w-20" />
        <LoadingSkeleton className="h-10 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <LoadingSkeleton className="h-4 w-24" />
        <LoadingSkeleton className="h-10 w-full rounded-lg" />
      </div>
      <div className="space-y-2">
        <LoadingSkeleton className="h-4 w-32" />
        <LoadingSkeleton className="h-24 w-full rounded-lg" />
      </div>
      <LoadingSkeleton className="h-10 w-32 rounded-lg" />
    </div>
  );
} 