import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-lg border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-out relative",
  {
    variants: {
      variant: {
        default: "border-gray-200 focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:border-blue-400 focus-visible:bg-white",
        filled: "border-gray-200 bg-gray-50 hover:bg-gray-100 focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20 focus-visible:bg-white",
        flushed: "border-0 border-b-2 border-gray-200 rounded-none px-0 hover:border-blue-300 focus-visible:border-blue-500 focus-visible:ring-0",
        outline: "border-2 border-gray-200 focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500/20",
      },
      size: {
        sm: "h-8 px-2 py-1 text-xs",
        default: "h-10 px-3 py-2 text-sm",
        lg: "h-12 px-4 py-3 text-base",
        xl: "h-14 px-5 py-4 text-lg",
      },
      state: {
        default: "",
        error: "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20",
        success: "border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500/20",
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

const labelVariants = cva(
  "absolute left-3 pointer-events-none transition-all duration-200 ease-out font-medium",
  {
    variants: {
      variant: {
        default: "top-1/2 -translate-y-1/2 text-gray-500",
        filled: "top-1/2 -translate-y-1/2 text-gray-500",
        flushed: "top-1/2 -translate-y-1/2 left-0 text-gray-500",
        outline: "top-1/2 -translate-y-1/2 text-gray-500",
      },
      size: {
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base",
        xl: "text-lg",
      },
      state: {
        default: "",
        error: "text-destructive",
        success: "text-green-600",
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
        className: "top-0 -translate-y-1/2 left-2 text-xs bg-white px-1 text-blue-600",
      },
      {
        variant: "default",
        size: "default",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-xs bg-white px-1 text-blue-600",
      },
      {
        variant: "default",
        size: "lg",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-xs bg-white px-1 text-blue-600",
      },
      {
        variant: "default",
        size: "xl",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-sm bg-white px-1 text-blue-600",
      },
      // Filled variant floating states
      {
        variant: "filled",
        size: "sm",
        floating: true,
        className: "top-1 left-2 text-xs text-blue-600",
      },
      {
        variant: "filled",
        size: "default",
        floating: true,
        className: "top-2 left-2 text-xs text-blue-600",
      },
      {
        variant: "filled",
        size: "lg",
        floating: true,
        className: "top-2 left-3 text-xs text-blue-600",
      },
      {
        variant: "filled",
        size: "xl",
        floating: true,
        className: "top-3 left-4 text-sm text-blue-600",
      },
      // Flushed variant floating states
      {
        variant: "flushed",
        floating: true,
        className: "top-0 -translate-y-full left-0 text-xs text-blue-600",
      },
      // Outline variant floating states
      {
        variant: "outline",
        size: "sm",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-xs bg-white px-1 text-blue-600",
      },
      {
        variant: "outline",
        size: "default",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-xs bg-white px-1 text-blue-600",
      },
      {
        variant: "outline",
        size: "lg",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-xs bg-white px-1 text-blue-600",
      },
      {
        variant: "outline",
        size: "xl",
        floating: true,
        className: "top-0 -translate-y-1/2 left-2 text-sm bg-white px-1 text-blue-600",
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

export interface InputProps extends Omit<React.ComponentProps<"input">, "size"> {
  variant?: VariantProps<typeof inputVariants>["variant"]
  size?: VariantProps<typeof inputVariants>["size"]
  state?: VariantProps<typeof inputVariants>["state"]
  label?: string
  helperText?: string
  errorText?: string
  successText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
  showPassword?: boolean
  onTogglePassword?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    variant = "default",
    size = "default",
    state = "default",
    label,
    helperText,
    errorText,
    successText,
    leftIcon,
    rightIcon,
    loading = false,
    showPassword,
    onTogglePassword,
    value,
    defaultValue,
    ...props 
  }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(!!value || !!defaultValue)
    
    const isFloating = isFocused || hasValue || !!value
    const currentState = errorText ? "error" : successText ? "success" : state

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)
      props.onFocus?.(e)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      props.onBlur?.(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value)
      props.onChange?.(e)
    }

    const getStatusText = () => {
      if (errorText) return errorText
      if (successText) return successText
      return helperText
    }

    const getStatusIcon = () => {
      if (loading) {
        return (
          <svg className="h-4 w-4 animate-spin text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )
      }
      
      if (currentState === "error") {
        return (
          <svg className="h-4 w-4 text-[var(--color-destructive)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      }
      
      if (currentState === "success") {
        return (
          <svg className="h-4 w-4 text-[var(--color-success)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      }
      
      return rightIcon
    }

    const getPasswordToggleIcon = () => {
      if (type !== "password" && !showPassword) return null
      
      return (
        <button
          type="button"
          onClick={onTogglePassword}
          className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
          tabIndex={-1}
        >
          {showPassword ? (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
      )
    }

    if (!label) {
      // Simple input without floating label
      return (
        <div className="space-y-2">
          <div className="relative">
            {leftIcon && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                {leftIcon}
              </div>
            )}
            <input
              type={type}
              className={cn(
                inputVariants({ variant, size, state: currentState }),
                leftIcon && "pl-9",
                (rightIcon || loading || currentState === "error" || currentState === "success") && "pr-9",
                className
              )}
              ref={ref}
              value={value}
              defaultValue={defaultValue}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              {...props}
            />
            {(getStatusIcon() || getPasswordToggleIcon()) && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {getPasswordToggleIcon()}
                {getStatusIcon()}
              </div>
            )}
          </div>
          {getStatusText() && (
            <p className={cn(
              "text-xs font-medium transition-colors duration-200",
              currentState === "error" && "text-[var(--color-destructive)]",
              currentState === "success" && "text-[var(--color-success)]",
              currentState === "default" && "text-[var(--color-text-muted)]"
            )}>
              {getStatusText()}
            </p>
          )}
        </div>
      )
    }

    // Input with floating label
    return (
      <div className="space-y-2">
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
              {leftIcon}
            </div>
          )}
          
          <input
            type={showPassword ? "text" : type}
            className={cn(
              inputVariants({ variant, size, state: currentState }),
              leftIcon && "pl-9",
              (rightIcon || loading || currentState === "error" || currentState === "success" || type === "password") && "pr-9",
              className
            )}
            ref={ref}
            value={value}
            defaultValue={defaultValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />
          
          <label
            className={cn(
              labelVariants({ 
                variant, 
                size, 
                state: currentState, 
                floating: isFloating 
              }),
              leftIcon && !isFloating && variant !== "flushed" && "left-9"
            )}
          >
            {label}
          </label>
          
          {(getStatusIcon() || getPasswordToggleIcon()) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              {getPasswordToggleIcon()}
              {getStatusIcon()}
            </div>
          )}
        </div>
        
        {getStatusText() && (
          <p className={cn(
            "text-xs font-medium transition-colors duration-200",
            currentState === "error" && "text-[var(--color-destructive)]",
            currentState === "success" && "text-[var(--color-success)]",
            currentState === "default" && "text-[var(--color-text-muted)]"
          )}>
            {getStatusText()}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export { Input, inputVariants }
