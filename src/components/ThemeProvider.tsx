"use client";
import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/theme";
import { Moon, Sun } from "lucide-react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Detect system theme preference on first load
    const detectSystemTheme = () => {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme-preference');
        if (!savedTheme) {
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          setTheme(systemTheme);
        }
      }
    };
    
    detectSystemTheme();
    
    // Listen for system theme changes
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem('theme-preference')) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      };
      
      mediaQuery.addEventListener('change', handleSystemThemeChange);
      return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
    }
  }, [setTheme]);

  useEffect(() => {
    if (mounted) {
      setIsTransitioning(true);
      
      // Apply theme changes
      document.documentElement.classList.toggle("dark", theme === "dark");
      document.body.classList.add('theme-transition');
      document.documentElement.style.colorScheme = theme;
      
      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
      if (metaThemeColor) {
        metaThemeColor.content = theme === 'dark' ? '#0a0a0b' : '#ffffff';
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
        document.body.classList.remove('theme-transition');
      }, 300);
    }
  }, [theme, mounted]);

  const handleThemeToggle = () => {
    const button = document.querySelector('[data-theme-toggle]') as HTMLElement;
    if (button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    }
    toggleTheme();
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[60]">
        <button
          data-theme-toggle
          onClick={handleThemeToggle}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className={`
            group relative p-4 rounded-2xl border backdrop-blur-md
            transition-all duration-300 ease-in-out transform-gpu
            shadow-2xl hover:shadow-3xl hover:scale-105
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
            ${theme === 'dark' 
              ? 'border-gray-600 bg-gray-800/95 hover:bg-gray-700 focus:ring-offset-gray-900' 
              : 'border-gray-300 bg-white/95 hover:bg-gray-100 focus:ring-offset-white'
            }
          `}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
          
          <div className="relative">
            {theme === 'dark' ? (
              <Sun size={24} className="text-yellow-500 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
            ) : (
              <Moon size={24} className="text-gray-600 dark:text-gray-300 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-300" />
            )}
          </div>

          <div className={`
            absolute bottom-full right-0 mb-3 px-3 py-2 text-xs font-medium
            rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200
            pointer-events-none whitespace-nowrap backdrop-blur-sm
            ${theme === 'dark' 
              ? 'bg-gray-800/95 text-white border border-gray-700' 
              : 'bg-white/95 text-gray-900 border border-gray-200'
            }
          `}>
            {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            <div className={`
              absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4
              border-l-transparent border-r-transparent
              ${theme === 'dark' ? 'border-t-gray-700' : 'border-t-gray-200'}
            `} />
          </div>
        </button>
      </div>

      {isTransitioning && (
        <div className="fixed inset-0 z-40 pointer-events-none transition-opacity duration-300 bg-black/5 dark:bg-white/5" />
      )}

      {children}
    </>
  );
} 