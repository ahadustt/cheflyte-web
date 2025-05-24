import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "bg-[var(--color-surface-primary)] text-[var(--color-text-primary)] rounded-xl border border-[var(--color-border-primary)] shadow-sm transition-all duration-200 ease-out overflow-hidden",
  {
    variants: {
      variant: {
        default: "hover:shadow-md",
        elevated: "shadow-lg hover:shadow-xl bg-[var(--color-bg-elevated)]",
        outline: "border-2 border-[var(--color-border-accent)] hover:border-[var(--color-border-interactive)]",
        ghost: "border-transparent shadow-none hover:bg-[var(--color-surface-hover)]",
        gradient: "bg-gradient-to-br from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] border-[var(--color-border-primary)] hover:shadow-md",
        interactive: "cursor-pointer hover:-translate-y-1 hover:shadow-lg transform",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      spacing: {
        compact: "gap-3",
        default: "gap-4",
        comfortable: "gap-6",
        spacious: "gap-8",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      spacing: "default",
    },
  }
)

const cardHeaderVariants = cva(
  "flex flex-col space-y-1.5",
  {
    variants: {
      align: {
        left: "text-left",
        center: "text-center items-center",
        right: "text-right items-end",
      }
    },
    defaultVariants: {
      align: "left",
    },
  }
)

const cardTitleVariants = cva(
  "font-display font-semibold tracking-tight leading-tight",
  {
    variants: {
      size: {
        sm: "text-h6",
        default: "text-h4",
        lg: "text-h3",
        xl: "text-h2",
      }
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const cardDescriptionVariants = cva(
  "text-gray-600 leading-relaxed",
  {
    variants: {
      size: {
        sm: "text-body-small",
        default: "text-body",
        lg: "text-body-large",
      }
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface CardProps extends React.ComponentProps<"div">, VariantProps<typeof cardVariants> {}

function Card({ 
  className, 
  variant, 
  size, 
  spacing, 
  ...props 
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({ variant, size }),
        "flex flex-col",
        spacing === "compact" && "gap-3",
        spacing === "default" && "gap-4", 
        spacing === "comfortable" && "gap-6",
        spacing === "spacious" && "gap-8",
        className
      )}
      {...props}
    />
  )
}

export interface CardHeaderProps extends React.ComponentProps<"div">, VariantProps<typeof cardHeaderVariants> {}

function CardHeader({ 
  className, 
  align,
  ...props 
}: CardHeaderProps) {
  return (
    <div
      className={cn(cardHeaderVariants({ align }), className)}
      {...props}
    />
  )
}

export interface CardTitleProps extends React.ComponentProps<"h3">, VariantProps<typeof cardTitleVariants> {}

function CardTitle({ 
  className, 
  size,
  ...props 
}: CardTitleProps) {
  return (
    <h3
      className={cn(cardTitleVariants({ size }), className)}
      {...props}
    />
  )
}

export interface CardDescriptionProps extends React.ComponentProps<"p">, VariantProps<typeof cardDescriptionVariants> {}

function CardDescription({ 
  className, 
  size,
  ...props 
}: CardDescriptionProps) {
  return (
    <p
      className={cn(cardDescriptionVariants({ size }), className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex-1", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...props}
    />
  )
}

function CardImage({ 
  className, 
  src, 
  alt, 
  ...props 
}: React.ComponentProps<"img">) {
  return (
    <img
      className={cn(
        "w-full h-48 object-cover rounded-t-xl -mt-6 -mx-6 mb-2",
        className
      )}
      src={src}
      alt={alt}
      {...props}
    />
  )
}

function CardBadge({ 
  className, 
  children,
  variant = "default",
  ...props 
}: React.ComponentProps<"span"> & {
  variant?: "default" | "primary" | "success" | "warning" | "destructive"
}) {
  const badgeVariants = {
    default: "bg-[var(--color-surface-secondary)] text-[var(--color-text-muted)]",
    primary: "bg-[var(--color-gradient-from)] text-[var(--color-text-inverse)]",
    success: "bg-[var(--color-success)] text-[var(--color-text-inverse)]", 
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400",
    destructive: "bg-[var(--color-destructive)] text-[var(--color-text-inverse)]",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardImage,
  CardBadge,
}
