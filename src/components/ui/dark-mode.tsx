'use client';

import React from 'react';
import { Card } from './card';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { 
  Moon, 
  Sun, 
  Eye, 
  Palette, 
  Monitor,
  Contrast,
  Accessibility,
  Check,
  X
} from 'lucide-react';

// Dark Mode Color Palette Component
interface ColorPaletteProps {
  title: string;
  colors: Array<{
    name: string;
    light: string;
    dark: string;
    description: string;
  }>;
  className?: string;
}

export function DarkModeColorPalette({ title, colors, className }: ColorPaletteProps) {
  return (
    <Card className={cn('p-6', className)}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Palette className="h-5 w-5 text-primary-600 dark:text-primary-400" />
        {title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {colors.map((color, index) => (
          <div key={index} className="space-y-3">
            <h4 className="font-medium text-gray-900 dark:text-white">{color.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">{color.description}</p>
            
            <div className="grid grid-cols-2 gap-3">
              {/* Light Mode Color */}
              <div className="space-y-2">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400">Light Mode</div>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-12 h-8 rounded border border-gray-200 dark:border-gray-700"
                    style={{ backgroundColor: color.light }}
                  />
                  <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono">
                    {color.light}
                  </code>
                </div>
              </div>
              
              {/* Dark Mode Color */}
              <div className="space-y-2">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400">Dark Mode</div>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-12 h-8 rounded border border-gray-200 dark:border-gray-700"
                    style={{ backgroundColor: color.dark }}
                  />
                  <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-mono">
                    {color.dark}
                  </code>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// Contrast Checker Component
interface ContrastCheckerProps {
  combinations: Array<{
    name: string;
    background: string;
    text: string;
    ratio: number;
    aaPass: boolean;
    aaaPass: boolean;
  }>;
  className?: string;
}

export function ContrastChecker({ combinations, className }: ContrastCheckerProps) {
  return (
    <Card className={cn('p-6', className)}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Contrast className="h-5 w-5 text-primary-600 dark:text-primary-400" />
        Contrast Compliance
      </h3>
      
      <div className="space-y-4">
        {combinations.map((combo, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-900 dark:text-white">{combo.name}</h4>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600 dark:text-gray-400">Ratio: {combo.ratio}:1</span>
              </div>
            </div>
            
            {/* Preview */}
            <div 
              className="p-4 rounded mb-3 text-center font-medium"
              style={{ 
                backgroundColor: combo.background, 
                color: combo.text 
              }}
            >
              Sample Text Preview
            </div>
            
            {/* Compliance Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                {combo.aaPass ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-red-500" />
                )}
                <span className={`text-sm ${combo.aaPass ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  WCAG AA {combo.aaPass ? 'Pass' : 'Fail'}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                {combo.aaaPass ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-red-500" />
                )}
                <span className={`text-sm ${combo.aaaPass ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                  WCAG AAA {combo.aaaPass ? 'Pass' : 'Fail'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// Dark Mode Component Showcase
export function DarkModeComponentShowcase({ className }: { className?: string }) {
  return (
    <Card className={cn('p-6', className)}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <Monitor className="h-5 w-5 text-primary-600 dark:text-primary-400" />
        Dark Mode Component Examples
      </h3>
      
      <div className="space-y-8">
        {/* Navigation Example */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900 dark:text-white">Navigation Bar</h4>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg"></div>
                <nav className="flex items-center gap-6">
                  <a href="#" className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Home
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    About
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    Contact
                  </a>
                </nav>
              </div>
              <Button variant="primary" size="sm">Sign In</Button>
            </div>
          </div>
        </div>

        {/* Card Example */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900 dark:text-white">Content Cards</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Card Title</h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                This is an example of how cards look in both light and dark modes with proper contrast.
              </p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>
            
            <Card className="p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
              <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Featured Card</h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Featured cards use gradient backgrounds that adapt beautifully to dark mode.
              </p>
              <Button variant="primary" size="sm">Get Started</Button>
            </Card>
          </div>
        </div>

        {/* Form Example */}
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900 dark:text-white">Form Elements</h4>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                           dark:focus:ring-primary-400 dark:focus:border-primary-400"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                           dark:focus:ring-primary-400 dark:focus:border-primary-400"
                  placeholder="Your message..."
                />
              </div>
              
              <Button variant="primary">Send Message</Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

// Accessibility Features Component
export function DarkModeAccessibility({ className }: { className?: string }) {
  const features = [
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Reduced Eye Strain",
      description: "Dark mode reduces blue light emission and provides comfortable viewing in low-light environments."
    },
    {
      icon: <Contrast className="h-5 w-5" />,
      title: "Enhanced Contrast",
      description: "Carefully designed contrast ratios ensure readability while maintaining visual appeal."
    },
    {
      icon: <Accessibility className="h-5 w-5" />,
      title: "WCAG Compliance",
      description: "All color combinations meet or exceed WCAG AA accessibility standards."
    },
    {
      icon: <Monitor className="h-5 w-5" />,
      title: "System Integration",
      description: "Automatically detects and respects user's system theme preferences."
    }
  ];

  return (
    <Card className={cn('p-6', className)}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <Accessibility className="h-5 w-5 text-primary-600 dark:text-primary-400" />
        Accessibility Features
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-lg">
              {feature.icon}
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Best Practices */}
      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Best Practices</h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
            Always test color combinations for sufficient contrast
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
            Provide smooth transitions between light and dark modes
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
            Respect user preferences and system settings
          </li>
          <li className="flex items-start gap-2">
            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
            Use semantic colors that convey meaning in both modes
          </li>
        </ul>
      </div>
    </Card>
  );
} 