import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-lg border bg-[var(--color-surface-primary)] px-3 py-2 text-sm ring-offset-[var(--color-bg-primary)] placeholder:text-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all duration-200 ease-out relative",
  {
    variants: {
      variant: {
        default: "border-[var(--color-border-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-border-accent)]/20 focus-visible:border-[var(--color-border-accent)] focus-visible:bg-[var(--color-surface-primary)]",
        filled: "border-[var(--color-border-primary)] bg-[var(--color-surface-secondary)] hover:bg-[var(--color-surface-hover)] focus-visible:border-[var(--color-border-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-border-accent)]/20 focus-visible:bg-[var(--color-surface-primary)]",
        outline: "border-2 border-[var(--color-border-primary)] focus-visible:border-[var(--color-border-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-border-accent)]/20",
      },
      size: {
        sm: "min-h-[60px] px-2 py-1 text-xs",
        default: "min-h-[80px] px-3 py-2 text-sm",
        lg: "min-h-[120px] px-4 py-3 text-base",
        xl: "min-h-[160px] px-5 py-4 text-lg",
      },
      state: {
        default: "",
        error: "border-[var(--color-destructive)] focus-visible:border-[var(--color-destructive)] focus-visible:ring-[var(--color-destructive)]/20",
        success: "border-[var(--color-success)] focus-visible:border-[var(--color-success)] focus-visible:ring-[var(--color-success)]/20",
        warning: "border-yellow-500 focus-visible:border-yellow-500 focus-visible:ring-yellow-500/20",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      state: "default",
    },
  }
)

const textareaLabelVariants = cva(
  "absolute left-3 top-3 pointer-events-none transition-all duration-200 ease-out font-medium text-[var(--color-text-muted)]",
  {
    variants: {
      variant: {
        default: "",
        filled: "",
        outline: "",
      },
      size: {
        sm: "text-xs top-2 left-2",
        default: "text-sm top-3 left-3",
        lg: "text-base top-3 left-4",
        xl: "text-lg top-4 left-5",
      },
      state: {
        default: "",
        error: "text-[var(--color-destructive)]",
        success: "text-[var(--color-success)]",
        warning: "text-yellow-600",
      },
      floating: {
        true: "",
        false: "",
      }
    },
    compoundVariants: [
      // Default variant floating states
      {
        variant: "default",
        size: "sm",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-xs bg-[var(--color-surface-primary)] px-1 text-[var(--color-link)]",
      },
      {
        variant: "default",
        size: "default",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-xs bg-[var(--color-surface-primary)] px-1 text-[var(--color-link)]",
      },
      {
        variant: "default",
        size: "lg",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-xs bg-[var(--color-surface-primary)] px-1 text-[var(--color-link)]",
      },
      {
        variant: "default",
        size: "xl",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-sm bg-[var(--color-surface-primary)] px-1 text-[var(--color-link)]",
      },
      // Filled variant floating states
      {
        variant: "filled",
        size: "sm",
        floating: true,
        className: "top-1 left-2 text-xs text-[var(--color-link)]",
      },
      {
        variant: "filled",
        size: "default",
        floating: true,
        className: "top-2 left-2 text-xs text-[var(--color-link)]",
      },
      {
        variant: "filled",
        size: "lg",
        floating: true,
        className: "top-2 left-3 text-xs text-[var(--color-link)]",
      },
      {
        variant: "filled",
        size: "xl",
        floating: true,
        className: "top-3 left-4 text-sm text-[var(--color-link)]",
      },
      // Outline variant floating states
      {
        variant: "outline",
        size: "sm",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-xs bg-[var(--color-surface-primary)] px-1 text-[var(--color-link)]",
      },
      {
        variant: "outline",
        size: "default",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-xs bg-[var(--color-surface-primary)] px-1 text-[var(--color-link)]",
      },
      {
        variant: "outline",
        size: "lg",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-xs bg-[var(--color-surface-primary)] px-1 text-[var(--color-link)]",
      },
      {
        variant: "outline",
        size: "xl",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-sm bg-[var(--color-surface-primary)] px-1 text-[var(--color-link)]",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      state: "default",
      floating: false,
    },
  }
)

export interface TextareaProps extends Omit<React.ComponentProps<"textarea">, "size"> {
  variant?: VariantProps<typeof textareaVariants>["variant"]
  size?: VariantProps<typeof textareaVariants>["size"]
  state?: VariantProps<typeof textareaVariants>["state"]
  label?: string
  helperText?: string
  errorText?: string
  successText?: string
  showCharCount?: boolean
  maxLength?: number
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    variant = "default",
    size = "default",
    state = "default",
    label,
    helperText,
    errorText,
    successText,
    showCharCount = false,
    maxLength,
    value,
    defaultValue,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(!!value || !!defaultValue)
    const [charCount, setCharCount] = React.useState(
      typeof value === 'string' ? value.length : 
      typeof defaultValue === 'string' ? defaultValue.length : 0
    )
    
    const isFloating = isFocused || hasValue || !!value
    const currentState = errorText ? "error" : successText ? "success" : state

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true)
      props.onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false)
      props.onBlur?.(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasValue(!!e.target.value)
      setCharCount(e.target.value.length)
      props.onChange?.(e)
    }

    const getStatusText = () => {
      if (errorText) return errorText
      if (successText) return successText
      return helperText
    }

    const getCharCountColor = () => {
      if (!maxLength) return "text-[var(--color-text-muted)]"
      const percentage = charCount / maxLength
      if (percentage >= 1) return "text-[var(--color-destructive)]"
      if (percentage >= 0.9) return "text-yellow-600"
      return "text-[var(--color-text-muted)]"
    }

    if (!label) {
      // Simple textarea without floating label
      return (
        <div className="space-y-2">
          <textarea
            className={cn(
              textareaVariants({ variant, size, state: currentState }),
              className
            )}
            ref={ref}
            value={value}
            defaultValue={defaultValue}
            maxLength={maxLength}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />
          
          <div className="flex justify-between items-center">
            <p className={cn(
              "text-xs font-medium transition-colors duration-200",
              currentState === "error" && "text-[var(--color-destructive)]",
              currentState === "success" && "text-[var(--color-success)]",
              currentState === "default" && "text-[var(--color-text-muted)]"
            )}>
              {getStatusText()}
            </p>
            
            {showCharCount && (
              <p className={cn(
                "text-xs font-medium transition-colors duration-200",
                getCharCountColor()
              )}>
                {charCount}{maxLength && `/${maxLength}`}
              </p>
            )}
          </div>
        </div>
      )
    }

    // Textarea with floating label
    return (
      <div className="space-y-2">
        <div className="relative">
          <textarea
            className={cn(
              textareaVariants({ variant, size, state: currentState }),
              className
            )}
            ref={ref}
            value={value}
            defaultValue={defaultValue}
            maxLength={maxLength}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />
          
          <label
            className={cn(
              textareaLabelVariants({ 
                variant, 
                size, 
                state: currentState, 
                floating: isFloating 
              })
            )}
          >
            {label}
          </label>
        </div>
        
        <div className="flex justify-between items-center">
          <p className={cn(
            "text-xs font-medium transition-colors duration-200",
            currentState === "error" && "text-[var(--color-destructive)]",
            currentState === "success" && "text-[var(--color-success)]",
            currentState === "default" && "text-[var(--color-text-muted)]"
          )}>
            {getStatusText()}
          </p>
          
          {showCharCount && (
            <p className={cn(
              "text-xs font-medium transition-colors duration-200",
              getCharCountColor()
            )}>
              {charCount}{maxLength && `/${maxLength}`}
            </p>
          )}
        </div>
      </div>
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea, textareaVariants } 