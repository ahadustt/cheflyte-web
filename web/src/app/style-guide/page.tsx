'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheflyteLogo } from "@/components/brand/CheflyteLogo";
import React from "react";

const MODERN_COLORS = [
  {
    name: "Primary",
    description: "Trust & innovation",
    shades: [
      { name: "50", hex: "#eff6ff", className: "bg-primary-50" },
      { name: "100", hex: "#dbeafe", className: "bg-primary-100" },
      { name: "500", hex: "#3b82f6", className: "bg-primary-500" },
      { name: "600", hex: "#2563eb", className: "bg-primary-600" },
      { name: "900", hex: "#1e3a8a", className: "bg-primary-900" },
    ]
  },
  {
    name: "Gray",
    description: "Sophisticated neutrals",
    shades: [
      { name: "50", hex: "#fafbfc", className: "bg-gray-50" },
      { name: "100", hex: "#f4f6f8", className: "bg-gray-100" },
      { name: "500", hex: "#6b7280", className: "bg-gray-500" },
      { name: "800", hex: "#1f2937", className: "bg-gray-800" },
      { name: "950", hex: "#0a0e1a", className: "bg-gray-950" },
    ]
  },
  {
    name: "Success",
    description: "Growth & positive outcomes",
    shades: [
      { name: "50", hex: "#ecfdf5", className: "bg-success-50" },
      { name: "100", hex: "#d1fae5", className: "bg-success-100" },
      { name: "500", hex: "#10b981", className: "bg-success-500" },
      { name: "600", hex: "#059669", className: "bg-success-600" },
      { name: "900", hex: "#064e3b", className: "bg-success-900" },
    ]
  },
  {
    name: "Accent",
    description: "Energy & creativity",
    shades: [
      { name: "50", hex: "#f0f9ff", className: "bg-accent-50" },
      { name: "100", hex: "#e0f2fe", className: "bg-accent-100" },
      { name: "500", hex: "#0ea5e9", className: "bg-accent-500" },
      { name: "600", hex: "#0284c7", className: "bg-accent-600" },
      { name: "900", hex: "#0c4a6e", className: "bg-accent-900" },
    ]
  },
];

function ColorSwatch({ name, hex, className }: { name: string; hex: string; className: string }) {
  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(hex);
    }
  };

  return (
    <div className="group cursor-pointer" onClick={handleCopy}>
      <div className={`w-16 h-16 rounded-xl ${className} border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-200 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/5 flex items-center justify-center">
          <span className="text-xs font-medium text-white bg-black/60 px-2 py-1 rounded">Copy</span>
        </div>
      </div>
      <div className="mt-2 text-center">
        <div className="text-xs font-medium text-gray-900">{name}</div>
        <div className="text-xs text-gray-500 font-mono">{hex}</div>
      </div>
    </div>
  );
}

function SectionCard({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-h2 text-gray-900 mb-2">{title}</h2>
        {description && <p className="text-body text-gray-600">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export default function ModernStyleGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-accent-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center border border-gray-200">
              <CheflyteLogo size={40} />
            </div>
            <div>
              <h1 className="text-display gradient-text">Cheflyte</h1>
              <p className="text-h4 text-gray-600 font-normal">Design System 2.0</p>
            </div>
          </div>
          <p className="text-body-large text-gray-700 max-w-2xl">
            A modern, sophisticated design system inspired by the best in class. 
            Built for AI-powered experiences that feel premium, accessible, and delightful.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Color System */}
        <SectionCard 
          title="Color System" 
          description="Sophisticated colors that convey trust, innovation, and premium quality. Each color is designed for both light and dark themes."
        >
          <div className="space-y-8">
            {MODERN_COLORS.map((colorGroup) => (
              <div key={colorGroup.name} className="p-6 bg-gray-50 rounded-2xl">
                <div className="mb-4">
                  <h3 className="text-h4 text-gray-900">{colorGroup.name}</h3>
                  <p className="text-body-small text-gray-600">{colorGroup.description}</p>
                </div>
                <div className="flex gap-4">
                  {colorGroup.shades.map((shade) => (
                    <ColorSwatch
                      key={shade.name}
                      name={shade.name}
                      hex={shade.hex}
                      className={shade.className}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Typography */}
        <SectionCard 
          title="Typography" 
          description="Bold, expressive typography that creates clear hierarchy and commands attention."
        >
          <div className="space-y-8 p-6 bg-gray-50 rounded-2xl">
            <div className="space-y-6">
              <div>
                <span className="text-caption text-gray-500">Display</span>
                <div className="text-display text-gray-900">Design at scale</div>
                <span className="text-body-small text-gray-500 font-mono">72px / 80px • -0.02em</span>
              </div>
              <div>
                <span className="text-caption text-gray-500">Heading 1</span>
                <div className="text-h1 text-gray-900">Modern interfaces</div>
                <span className="text-body-small text-gray-500 font-mono">48px / 56px • -0.02em</span>
              </div>
              <div>
                <span className="text-caption text-gray-500">Heading 2</span>
                <div className="text-h2 text-gray-900">Sophisticated design</div>
                <span className="text-body-small text-gray-500 font-mono">32px / 40px • -0.01em</span>
              </div>
              <div>
                <span className="text-caption text-gray-500">Body Large</span>
                <div className="text-body-large text-gray-700">Large body text for important information and enhanced readability.</div>
                <span className="text-body-small text-gray-500 font-mono">18px / 28px</span>
              </div>
              <div>
                <span className="text-caption text-gray-500">Body</span>
                <div className="text-body text-gray-700">Standard body text for most content. Optimized for reading comfort and accessibility.</div>
                <span className="text-body-small text-gray-500 font-mono">16px / 24px</span>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Components */}
        <SectionCard 
          title="Components" 
          description="Modern, accessible components with sophisticated interactions and beautiful states."
        >
          <div className="space-y-8">
            {/* Buttons */}
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-h4 text-gray-900 mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button className="btn btn-primary btn-lg">Primary Action</Button>
                <Button className="btn btn-secondary btn-md">Secondary</Button>
                <Button className="btn btn-outline btn-md">Outline</Button>
                <Button className="btn btn-ghost btn-md">Ghost</Button>
                <Button className="btn btn-primary btn-sm">Small</Button>
                <Button className="btn btn-primary btn-md" disabled>Disabled</Button>
              </div>
            </div>

            {/* Inputs */}
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-h4 text-gray-900 mb-4">Form Controls</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
                <div>
                  <label className="text-body-small font-medium text-gray-700 mb-2 block">Default Input</label>
                  <Input placeholder="Enter your name" className="input" />
                </div>
                <div>
                  <label className="text-body-small font-medium text-gray-700 mb-2 block">Focused State</label>
                  <Input placeholder="I'm focused!" className="input ring-2 ring-primary-500 ring-offset-2" />
                </div>
                <div>
                  <label className="text-body-small font-medium text-gray-700 mb-2 block">With Value</label>
                  <Input defaultValue="john@example.com" className="input" />
                </div>
                <div>
                  <label className="text-body-small font-medium text-gray-700 mb-2 block">Disabled</label>
                  <Input placeholder="Disabled input" disabled className="input" />
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-h4 text-gray-900 mb-4">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="card p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-primary-600 rounded"></div>
                  </div>
                  <h4 className="text-h4 text-gray-900 mb-2">Feature Card</h4>
                  <p className="text-body-small text-gray-600">Beautiful cards with subtle shadows and smooth hover interactions.</p>
                </Card>
                
                <Card className="card p-6 border-2 border-primary-200 bg-primary-50">
                  <div className="w-12 h-12 bg-success-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-success-600 rounded"></div>
                  </div>
                  <h4 className="text-h4 text-gray-900 mb-2">Highlighted</h4>
                  <p className="text-body-small text-gray-600">Cards can be emphasized with borders and background colors.</p>
                </Card>

                <Card className="card p-6 glass backdrop-blur-xl">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-white/60 rounded"></div>
                  </div>
                  <h4 className="text-h4 text-gray-900 mb-2">Glass Effect</h4>
                  <p className="text-body-small text-gray-600">Modern glass morphism for special use cases.</p>
                </Card>
              </div>
            </div>

            {/* Loading States */}
            <div className="p-6 bg-gray-50 rounded-2xl">
              <h3 className="text-h4 text-gray-900 mb-4">Loading States</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton w-12 h-12 rounded-xl"></div>
                  <div className="space-y-2">
                    <div className="skeleton h-4 w-32 rounded"></div>
                    <div className="skeleton h-3 w-24 rounded"></div>
                  </div>
                </div>
                <div className="skeleton h-20 w-full rounded-xl"></div>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Design Principles */}
        <SectionCard 
          title="Design Principles" 
          description="The foundations that guide every design decision."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 rounded-2xl">
              <h4 className="text-h4 text-gray-900 mb-2">Sophisticated Minimalism</h4>
              <p className="text-body-small text-gray-600">Every element serves a purpose. Generous white space creates hierarchy and breathing room.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-2xl">
              <h4 className="text-h4 text-gray-900 mb-2">Premium Quality</h4>
              <p className="text-body-small text-gray-600">Interactions feel crafted and intentional. Animations are purposeful, never gratuitous.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-2xl">
              <h4 className="text-h4 text-gray-900 mb-2">Accessibility First</h4>
              <p className="text-body-small text-gray-600">Beautiful design that works for everyone. WCAG AA compliance is our baseline.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-2xl">
              <h4 className="text-h4 text-gray-900 mb-2">AI-Forward Aesthetic</h4>
              <p className="text-body-small text-gray-600">Visual language that conveys innovation, intelligence, and forward-thinking technology.</p>
            </div>
          </div>
        </SectionCard>
      </div>
    </main>
  );
}
