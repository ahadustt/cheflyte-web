import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { CheflyteLogo } from "@/components/brand/CheflyteLogo";
import Link from "next/link";
import { useThemeStore } from "@/store/theme";
import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cheflyte",
  description: "AI-powered chef booking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = typeof window === 'undefined' ? 'light' : useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-brand-cream text-brand-dark`}>
        <header className="sticky top-0 z-30 w-full bg-brand-cream/95 border-b border-brand-sage shadow-sm">
          <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="inline-block w-9 h-9 rounded-full bg-brand-cream flex items-center justify-center border border-brand-dark">
                <CheflyteLogo size={28} />
              </span>
              <span className="text-2xl font-bold tracking-tight text-brand-dark group-hover:text-brand-sage transition-colors">Cheflyte</span>
            </Link>
            <div className="flex items-center gap-6 text-lg font-medium">
              <Link href="/" className="hover:text-brand-mustard transition-colors">Home</Link>
              <Link href="/style-guide" className="hover:text-brand-mustard transition-colors">Style Guide</Link>
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="ml-2 p-2 rounded-full border border-brand-sage bg-brand-cream hover:bg-brand-sage hover:text-brand-cream transition-colors focus:outline-none focus:ring-2 focus:ring-brand-mustard"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
