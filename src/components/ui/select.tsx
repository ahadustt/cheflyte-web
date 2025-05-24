import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const selectVariants = cva(
  "flex w-full rounded-lg border bg-[var(--color-surface-primary)] px-3 py-2 text-sm ring-offset-[var(--color-bg-primary)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ease-out relative appearance-none",
  {
    variants: {
      variant: {
        default: "border-[var(--color-border-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-border-accent)]/20 focus-visible:border-[var(--color-border-accent)]",
        filled: "border-[var(--color-border-primary)] bg-[var(--color-surface-secondary)] hover:bg-[var(--color-surface-hover)] focus-visible:border-[var(--color-border-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-border-accent)]/20",
        outline: "border-2 border-[var(--color-border-primary)] focus-visible:border-[var(--color-border-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-border-accent)]/20",
      },
      size: {
        sm: "h-8 px-2 py-1 text-xs",
        default: "h-10 px-3 py-2 text-sm",
        lg: "h-12 px-4 py-3 text-base",
        xl: "h-14 px-5 py-4 text-lg",
      },
      state: {
        default: "",
        error: "border-[var(--color-destructive)] focus-visible:border-[var(--color-destructive)] focus-visible:ring-[var(--color-destructive)]/20",
        success: "border-[var(--color-success)] focus-visible:border-[var(--color-success)] focus-visible:ring-[var(--color-success)]/20",
        warning: "border-yellow-500 focus-visible:border-yellow-500 focus-visible:ring-yellow-500/20", // TODO: add semantic token for warning
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
  "block mb-1 font-medium text-[var(--color-text-muted)]",
  {
    variants: {
      state: {
        default: "",
        error: "text-[var(--color-destructive)]",
        success: "text-[var(--color-success)]",
        warning: "text-yellow-600", // TODO: add semantic token for warning
      }
    },
    defaultVariants: {
      state: "default",
    },
  }
)

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  variant?: VariantProps<typeof selectVariants>["variant"]
  size?: VariantProps<typeof selectVariants>["size"]
  state?: VariantProps<typeof selectVariants>["state"]
  label?: string
  helperText?: string
  errorText?: string
  successText?: string
  options: Array<{ value: string; label: string; disabled?: boolean }>
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({
    className,
    variant = "default",
    size = "default",
    state = "default",
    label,
    helperText,
    errorText,
    successText,
    options,
    ...props
  }, ref) => {
    const currentState = errorText ? "error" : successText ? "success" : state
    const statusText = errorText || successText || helperText

    return (
      <div className="space-y-2">
        {label && (
          <label className={cn(labelVariants({ state: currentState }))}>
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              selectVariants({ variant, size, state: currentState }),
              className
            )}
            aria-invalid={currentState === "error"}
            aria-describedby={statusText ? `${label}-status` : undefined}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          {/* Chevron Icon */}
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
        {statusText && (
          <p
            id={label ? `${label}-status` : undefined}
            className={cn(
              "text-xs font-medium transition-colors duration-200",
              currentState === "error" && "text-[var(--color-destructive)]",
              currentState === "success" && "text-[var(--color-success)]",
              currentState === "default" && "text-[var(--color-text-muted)]"
            )}
          >
            {statusText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = "Select" 