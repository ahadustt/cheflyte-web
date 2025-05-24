'use client';

import Link from 'next/link';
import { CheflyteLogo } from '@/components/brand/CheflyteLogo';
import { AuthNav } from '@/components/auth/AuthNav';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Find Chefs', href: '/chefs' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Style Guide', href: '/style-guide' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-700/80 shadow-lg shadow-gray-900/5 dark:shadow-black/20' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900 dark:to-accent-900 border border-primary-200/50 dark:border-primary-700/50 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <CheflyteLogo size={28} variant="gradient" />
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-display tracking-tight text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
              Cheflyte
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide hidden sm:block">
              AI-Powered Chef Platform
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  isActiveLink(item.href)
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/50 shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                {item.label}
                {isActiveLink(item.href) && (
                  <div className="absolute inset-x-2 bottom-1 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
          <AuthNav />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <AuthNav />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-200 active:scale-95"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-5 h-5">
              <div className={`absolute top-1 left-0 w-5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></div>
              <div className={`absolute top-2.5 left-0 w-5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`absolute top-4 left-0 w-5 h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-xl z-50 lg:hidden animate-scale-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-4 rounded-xl font-medium transition-all duration-200 ${
                      isActiveLink(item.href)
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/50 border border-primary-200 dark:border-primary-700'
                        : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      isActiveLink(item.href) ? 'bg-primary-500' : 'bg-gray-400 dark:bg-gray-500'
                    }`}></div>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
} 