import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] relative overflow-hidden group",
  {
    variants: {
      variant: {
        // Primary: Bold, confident primary action
        primary:
          "bg-[var(--color-bg-primary)] text-[var(--color-text-inverse)] font-semibold shadow-lg hover:bg-[var(--color-bg-secondary)] hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-[var(--color-border-accent)] active:shadow-md transition-all duration-200",
        
        // Secondary: Sophisticated outline style
        secondary:
          "bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)] font-medium shadow-sm hover:bg-[var(--color-surface-hover)] hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-[var(--color-border-accent)] focus-visible:ring-offset-[var(--color-bg-primary)]",
          
        // Ghost: Minimal, clean interaction
        ghost:
          "text-[var(--color-text-muted)] font-medium hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)] focus-visible:bg-[var(--color-surface-hover)] transition-colors duration-200",
          
        // Outline: Clean, modern outline
        outline:
          "border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-medium shadow-sm hover:bg-[var(--color-surface-hover)] hover:border-[var(--color-border-accent)] hover:shadow-md focus-visible:ring-[var(--color-border-accent)] transition-all duration-200",
          
        // Destructive: Clear error/delete actions
        destructive:
          "bg-[var(--color-destructive)] text-[var(--color-text-inverse)] font-semibold shadow-lg hover:bg-[var(--color-destructive-hover)] hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-[var(--color-destructive)] active:shadow-md transition-all duration-200",
          
        // Success: Positive confirmation actions
        success:
          "bg-[var(--color-success)] text-[var(--color-text-inverse)] font-semibold shadow-lg hover:bg-[var(--color-success-hover)] hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-[var(--color-success)] active:shadow-md transition-all duration-200",
          
        // Link: Text-based link style
        link: 
          "text-[var(--color-link)] font-medium underline-offset-4 hover:underline hover:text-[var(--color-link-hover)] focus-visible:ring-[var(--color-link)] focus-visible:ring-offset-[var(--color-bg-primary)]",
          
        // Gradient: Premium gradient effect (uses brand gradient, fallback to semantic bg/text)
        gradient:
          "bg-gradient-to-r from-[var(--color-gradient-from)] to-[var(--color-gradient-to)] text-[var(--color-text-inverse)] font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 focus-visible:ring-[var(--color-border-accent)] active:shadow-md",
      },
      size: {
        sm: "h-8 px-3 py-1 text-sm rounded-md gap-1.5",
        default: "h-10 px-4 py-2 text-base rounded-lg gap-2",
        lg: "h-12 px-6 py-3 text-lg rounded-xl gap-2.5",
        xl: "h-14 px-8 py-4 text-xl rounded-xl gap-3",
        icon: "h-10 w-10 rounded-lg",
        "icon-sm": "h-8 w-8 rounded-md",
        "icon-lg": "h-12 w-12 rounded-xl",
      },
      loading: {
        true: "cursor-not-allowed opacity-75",
        false: "",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      loading: false,
    },
  }
)

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    loading = false,
    leftIcon,
    rightIcon,
    asChild = false, 
    children,
    disabled,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const isDisabled = disabled || loading

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, loading, className }))}
        ref={ref}
        disabled={isDisabled}
        data-loading={loading}
        {...props}
      >
        {/* Shimmer effect for premium variants */}
        {(variant === "primary" || variant === "gradient") && (
          <div className="absolute inset-0 -top-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500" />
        )}
        
        {/* Left icon */}
        {leftIcon && !loading && (
          <span className="flex-shrink-0">
            {leftIcon}
          </span>
        )}
        
        {/* Loading spinner */}
        {loading && (
          <div className="flex-shrink-0">
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        )}
        
        {/* Button content */}
        <span className={cn(
          "flex-1 min-w-0",
          loading && "opacity-75"
        )}>
          {children}
        </span>
        
        {/* Right icon */}
        {rightIcon && !loading && (
          <span className="flex-shrink-0">
            {rightIcon}
          </span>
        )}
      </Comp>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
export type { ButtonProps }
