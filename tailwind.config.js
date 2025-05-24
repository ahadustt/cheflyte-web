const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Enhanced Primary Color System with Dark Mode Optimization
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Enhanced Accent Color System 
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        // Sophisticated Gray Scale for Dark Mode
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          850: '#1a202c', // Custom shade for dark mode
          900: '#111827',
          925: '#0d131e', // Custom shade for dark mode
          950: '#030712',
        },
        // Success Color System
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        // Warning Color System
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Error/Destructive Color System
        destructive: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Dark Mode Specific Colors
        dark: {
          bg: {
            primary: '#0a0a0b',     // Deep black with blue undertone
            secondary: '#111113',   // Slightly lighter
            tertiary: '#1a1a1c',   // Card backgrounds
            elevated: '#212124',   // Elevated surfaces
            overlay: '#2a2a2e',    // Modal overlays
          },
          surface: {
            primary: '#141416',     // Primary surfaces
            secondary: '#1e1e21',   // Secondary surfaces  
            tertiary: '#252529',    // Tertiary surfaces
            interactive: '#2d2d32', // Interactive elements
            hover: '#343439',       // Hover states
          },
          border: {
            primary: '#2a2a2e',     // Primary borders
            secondary: '#343439',   // Secondary borders
            interactive: '#404047', // Interactive borders
            accent: '#4a4a52',      // Accent borders
          },
          text: {
            primary: '#ffffff',     // Primary text - pure white
            secondary: '#e4e4e7',   // Secondary text
            tertiary: '#a1a1aa',    // Tertiary text
            muted: '#71717a',       // Muted text
            inverse: '#09090b',     // Inverse text (for light backgrounds)
          }
        },
        // Light Mode Specific Colors
        light: {
          bg: {
            primary: '#ffffff',     // Pure white
            secondary: '#fafafa',   // Slightly off-white
            tertiary: '#f4f4f5',   // Card backgrounds
            elevated: '#f9f9f9',   // Elevated surfaces
            overlay: '#f0f0f0',    // Modal overlays
          },
          surface: {
            primary: '#ffffff',     // Primary surfaces
            secondary: '#f8f8f8',   // Secondary surfaces
            tertiary: '#f1f1f1',   // Tertiary surfaces
            interactive: '#e8e8e8', // Interactive elements
            hover: '#e1e1e1',      // Hover states
          },
          border: {
            primary: '#e4e4e7',     // Primary borders
            secondary: '#d4d4d8',   // Secondary borders
            interactive: '#a1a1aa', // Interactive borders
            accent: '#71717a',      // Accent borders
          },
          text: {
            primary: '#09090b',     // Primary text
            secondary: '#18181b',   // Secondary text
            tertiary: '#3f3f46',    // Tertiary text
            muted: '#71717a',       // Muted text
            inverse: '#ffffff',     // Inverse text (for dark backgrounds)
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-manrope)', ...defaultTheme.fontFamily.sans],
      },
      // Enhanced Animations for Dark Mode
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'shimmer': 'shimmer 1.5s ease-in-out infinite',
        'pulse-ring': 'pulseRing 1.5s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'theme-transition': 'themeTransition 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.33)', opacity: '1' },
          '80%, 100%': { transform: 'scale(2.33)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px currentColor' },
          '100%': { boxShadow: '0 0 20px currentColor' },
        },
        themeTransition: {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
      },
      // Enhanced Box Shadows for Dark Mode
      boxShadow: {
        'sm-dark': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
        'md-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'lg-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
        'xl-dark': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        '2xl-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        'glow-primary': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-accent': '0 0 20px rgba(16, 185, 129, 0.5)',
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.3)',
      },
      // Enhanced Backdrop Blur
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      // Enhanced Border Radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      // Enhanced Spacing for Better Dark Mode Layouts
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
} 