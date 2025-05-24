'use client';

import Link from 'next/link';
import { CheflyteLogo } from '@/components/brand/CheflyteLogo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const footerLinks = {
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  platform: {
    title: 'Platform',
    links: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'For Home Cooks', href: '/for-cooks' },
      { label: 'For Clients', href: '/for-clients' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Safety', href: '/safety' },
      { label: 'Community Guidelines', href: '/guidelines' },
      { label: 'Trust & Safety', href: '/trust-safety' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
};

const socialLinks = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/cheflyte',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/cheflyte',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.68 13.559 3.68 12c0-1.558.518-2.895 1.446-3.691.875-.807 2.026-1.297 3.323-1.297s2.449.49 3.324 1.297c.928.796 1.446 2.133 1.446 3.691 0 1.559-.518 2.895-1.446 3.691-.875.807-2.027 1.297-3.324 1.297zm7.394 0c-1.297 0-2.449-.49-3.324-1.297-.928-.796-1.446-2.132-1.446-3.691 0-1.558.518-2.895 1.446-3.691.875-.807 2.027-1.297 3.324-1.297s2.448.49 3.323 1.297c.928.796 1.446 2.133 1.446 3.691 0 1.559-.518 2.895-1.446 3.691-.875.807-2.026 1.297-3.323 1.297z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/cheflyte',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/cheflyte',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Newsletter subscription logic would go here
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 font-display font-bold text-white mb-4">
              Stay Updated with Cheflyte
            </h2>
            <p className="text-body-large text-primary-100 mb-8">
              Get the latest news, chef spotlights, and exclusive offers delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-primary-200 focus:bg-white/20 focus:border-white"
                  required
                />
              </div>
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="h-12 px-8 bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl transition-all duration-200"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Subscribed!
                  </div>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-200/50 flex items-center justify-center shadow-lg">
                <CheflyteLogo size={24} variant="gradient" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-gray-900">
                Cheflyte
              </span>
            </div>
            <p className="text-body text-gray-600 mb-8 leading-relaxed">
              AI-powered chef booking platform connecting you with world-class culinary professionals for unforgettable dining experiences.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-body-small font-medium text-gray-700">Follow us:</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:border-primary-300 flex items-center justify-center text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200 hover:shadow-md group"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <div className="transition-transform duration-200 group-hover:scale-110">
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-h6 font-display font-semibold text-gray-900 mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-small text-gray-600 hover:text-primary-600 transition-colors duration-200 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-body-small text-gray-600">
              <p>© 2025 Cheflyte. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-primary-600 transition-colors duration-200">
                  Privacy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-primary-600 transition-colors duration-200">
                  Terms
                </Link>
                <span>•</span>
                <Link href="/accessibility" className="hover:text-primary-600 transition-colors duration-200">
                  Accessibility
                </Link>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-body-small text-gray-600">
              <span>Made with</span>
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>in California</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 