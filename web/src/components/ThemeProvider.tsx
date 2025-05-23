"use client";
import { useEffect } from "react";
import { useThemeStore } from "@/store/theme";
import { Moon, Sun } from "lucide-react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <div className="w-full flex justify-end items-center px-4 pt-2">
        <button
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="ml-2 p-2 rounded-full border border-brand-sage bg-brand-cream hover:bg-brand-sage hover:text-brand-cream transition-colors focus:outline-none focus:ring-2 focus:ring-brand-mustard"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      {children}
    </>
  );
} 