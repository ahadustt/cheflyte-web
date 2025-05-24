'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheflyteLogo } from "@/components/brand/CheflyteLogo";
import { 
  LoadingSpinner, 
  LoadingDots, 
  LoadingProgress, 
  LoadingSkeleton, 
  PageLoading,
  CardSkeleton,
  FormSkeleton
} from "@/components/ui/loading";
import {
  HoverScale,
  HoverLift,
  HoverGlow,
  LoadingState
} from "@/components/ui/micro-animations";
import {
  MetricCard,
  ChartContainer,
  BarChart,
  ActivityFeed,
  DashboardGrid,
  QuickStats,
  DashboardHeader,
  DataTable
} from "@/components/ui/dashboard";
import {
  HeroSection,
  FeatureShowcase,
  TestimonialSection,
  PricingSection,
  CallToAction,
  StatsSection,
  LogoCloud
} from "@/components/ui/marketing";
import {
  DarkModeColorPalette,
  ContrastChecker,
  DarkModeComponentShowcase,
  DarkModeAccessibility
} from "@/components/ui/dark-mode";
import React, { useState } from "react";
import { 
  Users, 
  DollarSign, 
  Activity, 
  ChefHat,
  Star,
  TrendingUp,
  Calendar,
  Filter,
  Download,
  Sparkles,
  Shield,
  Zap,
  Heart,
  Clock,
  Award,
  Globe
} from "lucide-react";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function StyleGuide() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(75);

  const toggleLoading = () => {
    setLoading(!loading);
  };

  const incrementProgress = () => {
    setProgress(prev => Math.min(100, prev + 10));
  };

  const decrementProgress = () => {
    setProgress(prev => Math.max(0, prev - 10));
  };

  // Form component state
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [inputError, setInputError] = useState(false);
  const [inputSuccess, setInputSuccess] = useState(false);

  const toggleInputError = () => {
    setInputError(!inputError);
    setInputSuccess(false);
  };

  const toggleInputSuccess = () => {
    setInputSuccess(!inputSuccess);
    setInputError(false);
  };

  // Sample data for dashboard components
  const sampleMetrics = [
    {
      title: "Total Bookings",
      value: "2,847",
      change: { value: 12.5, isPositive: true, period: "last month" },
      icon: <Calendar size={20} />,
      variant: "primary" as const
    },
    {
      title: "Active Chefs",
      value: "156",
      change: { value: 8.2, isPositive: true, period: "last month" },
      icon: <ChefHat size={20} />,
      variant: "success" as const
    },
    {
      title: "Revenue",
      value: "$48,392",
      change: { value: -3.1, isPositive: false, period: "last month" },
      icon: <DollarSign size={20} />,
      variant: "warning" as const
    },
    {
      title: "Avg Rating",
      value: "4.8",
      change: { value: 0.3, isPositive: true, period: "last month" },
      icon: <Star size={20} />,
      variant: "default" as const
    }
  ];

  const sampleChartData = [
    { label: "Mon", value: 45, color: "bg-primary-600" },
    { label: "Tue", value: 67, color: "bg-primary-600" },
    { label: "Wed", value: 52, color: "bg-accent-600" },
    { label: "Thu", value: 78, color: "bg-primary-600" },
    { label: "Fri", value: 89, color: "bg-accent-600" },
    { label: "Sat", value: 94, color: "bg-green-600" },
    { label: "Sun", value: 71, color: "bg-green-600" }
  ];

  const sampleActivity = [
    {
      id: "1",
      user: "Sarah Chen",
      action: "booked a chef for",
      target: "Italian dinner party",
      timestamp: "2 minutes ago",
      type: "booking" as const
    },
    {
      id: "2",
      user: "Marco Rodriguez",
      action: "completed cooking session",
      timestamp: "15 minutes ago",
      type: "chef" as const
    },
    {
      id: "3",
      user: "Payment processed",
      action: "for booking #2847",
      timestamp: "1 hour ago",
      type: "payment" as const
    },
    {
      id: "4",
      user: "Jennifer Wu",
      action: "left a 5-star review",
      timestamp: "2 hours ago",
      type: "review" as const
    },
    {
      id: "5",
      user: "System",
      action: "auto-matched chef preferences",
      timestamp: "3 hours ago",
      type: "system" as const
    }
  ];

  const sampleStats = [
    { label: "Online Chefs", value: "42", icon: <ChefHat size={20} />, color: "success" as const },
    { label: "Pending", value: "8", icon: <Activity size={20} />, color: "warning" as const },
    { label: "Today's Bookings", value: "23", icon: <Calendar size={20} />, color: "primary" as const },
    { label: "New Reviews", value: "15", icon: <Star size={20} />, color: "primary" as const }
  ];

  const sampleTableColumns = [
    { key: "name", label: "Chef Name", sortable: true },
    { key: "cuisine", label: "Cuisine", sortable: true },
    { key: "rating", label: "Rating", sortable: true, render: (value: number) => (
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span>{value}</span>
      </div>
    )},
    { key: "bookings", label: "Bookings", sortable: true },
    { key: "status", label: "Status", render: (value: string) => (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        value === "online" ? "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400" :
        value === "busy" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400" :
        "bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-400"
      }`}>
        {value}
      </span>
    )}
  ];

  const sampleTableData = [
    { name: "Marco Rodriguez", cuisine: "Italian", rating: 4.9, bookings: 127, status: "online" },
    { name: "Sarah Kim", cuisine: "Korean", rating: 4.8, bookings: 89, status: "busy" },
    { name: "Pierre Dubois", cuisine: "French", rating: 4.7, bookings: 156, status: "online" },
    { name: "Maria Santos", cuisine: "Mexican", rating: 4.9, bookings: 203, status: "offline" },
    { name: "Yuki Tanaka", cuisine: "Japanese", rating: 4.8, bookings: 91, status: "online" }
  ];

  // Sample data for marketing components
  const sampleFeatures = [
    {
      icon: <ChefHat size={24} />,
      title: "Expert Chefs",
      description: "Connect with professional chefs who specialize in your favorite cuisines",
      benefits: ["Verified professional chefs", "Specialized cuisine expertise", "Personalized cooking experiences"]
    },
    {
      icon: <Shield size={24} />,
      title: "Secure Bookings",
      description: "Safe, secure payment processing with full insurance coverage",
      benefits: ["Encrypted payment processing", "Full insurance coverage", "24/7 customer support"]
    },
    {
      icon: <Sparkles size={24} />,
      title: "AI-Powered Matching",
      description: "Our AI finds the perfect chef based on your preferences and dietary needs",
      benefits: ["Smart chef matching", "Dietary preference analysis", "Personalized recommendations"]
    }
  ];

  const sampleTestimonials = [
    {
      id: "1",
      content: "Cheflyte transformed our dinner party into an unforgettable culinary experience. The chef was incredible!",
      author: {
        name: "Sarah Johnson",
        role: "Event Planner",
        company: "Elite Events"
      },
      rating: 5,
      featured: true
    },
    {
      id: "2",
      content: "As a busy professional, Cheflyte saves me so much time while giving me restaurant-quality meals at home.",
      author: {
        name: "Michael Chen",
        role: "Software Engineer",
        company: "TechCorp"
      },
      rating: 5
    },
    {
      id: "3",
      content: "The variety of cuisines and the quality of chefs on Cheflyte is amazing. Highly recommend!",
      author: {
        name: "Emily Rodriguez",
        role: "Marketing Director",
        company: "Creative Agency"
      },
      rating: 5
    }
  ];

  const samplePricingPlans = [
    {
      id: "basic",
      name: "Basic",
      description: "Perfect for occasional cooking experiences",
      price: { amount: 49, currency: "$", period: "session" },
      features: [
        "Professional chef for 2-3 hours",
        "Menu planning consultation",
        "Basic ingredient sourcing",
        "Kitchen cleanup included"
      ],
      cta: { text: "Book Now", onClick: () => {} }
    },
    {
      id: "premium",
      name: "Premium",
      description: "Most popular for special occasions",
      price: { amount: 89, currency: "$", period: "session" },
      features: [
        "Professional chef for 3-4 hours",
        "Custom menu creation",
        "Premium ingredient sourcing",
        "Kitchen cleanup included",
        "Serving and presentation",
        "Recipe cards included"
      ],
      highlighted: true,
      badge: "Most Popular",
      cta: { text: "Book Now", onClick: () => {} }
    },
    {
      id: "luxury",
      name: "Luxury",
      description: "Ultimate culinary experience",
      price: { amount: 149, currency: "$", period: "session" },
      features: [
        "Professional chef for 4-5 hours",
        "Multi-course tasting menu",
        "Premium ingredient sourcing",
        "Kitchen cleanup included",
        "Professional serving staff",
        "Recipe cards included",
        "Wine pairing consultation"
      ],
      cta: { text: "Book Now", onClick: () => {} }
    }
  ];

  const samplePlatformStats = [
    { value: "10,000+", label: "Happy Customers", icon: <Users size={24} />, description: "Across 50+ cities" },
    { value: "500+", label: "Expert Chefs", icon: <ChefHat size={24} />, description: "Verified professionals" },
    { value: "4.9", label: "Average Rating", icon: <Star size={24} />, description: "From customer reviews" },
    { value: "50+", label: "Cuisines", icon: <Globe size={24} />, description: "From around the world" }
  ];

  // Add Select demo options
  const selectOptions = [
    { value: '', label: 'Select an option', disabled: true },
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <CheflyteLogo size={64} variant="gradient" />
        </div>
        <div>
          <h1 className="text-hero gradient-text">
            Cheflyte Design System
          </h1>
          <p className="text-lead text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            Modern, sophisticated design system for premium AI-powered platforms. 
            Built with accessibility, performance, and user experience in mind.
          </p>
        </div>
      </div>

      {/* Marketing Components Library */}
      <section className="space-y-8">
        <div>
          <h2 className="text-section-title text-gray-900 dark:text-white">Marketing Components Library</h2>
          <p className="text-body text-gray-600 dark:text-gray-400">
            Conversion-focused marketing components for landing pages, product showcases, and promotional content.
          </p>
        </div>

        {/* Hero Sections */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Hero Sections</h3>
          
          {/* Default Hero */}
          <div className="space-y-4">
            <h4 className="text-h6 text-gray-900 dark:text-white">Default Hero</h4>
            <Card className="overflow-hidden">
              <HeroSection
                variant="default"
                subtitle="AI-Powered Chef Platform"
                title="Connecting you with trusted chefs through authentic recommendations"
                description="Professional chefs for unforgettable culinary experiences. Simple, engaging, and beautifully designed."
                primaryCTA={{ text: "Book a Chef", onClick: () => {} }}
                secondaryCTA={{ text: "Learn More", onClick: () => {} }}
                stats={[
                  { value: "10,000+", label: "Happy Customers" },
                  { value: "500+", label: "Expert Chefs" },
                  { value: "4.9★", label: "Average Rating" }
                ]}
                className="py-12"
              />
            </Card>
          </div>

          {/* Gradient Hero */}
          <div className="space-y-4">
            <h4 className="text-h6 text-gray-900 dark:text-white">Gradient Hero</h4>
            <Card className="overflow-hidden">
              <HeroSection
                variant="gradient"
                subtitle="Premium Culinary Experience"
                title="Michelin-quality dining experiences at home"
                description="Experience restaurant-quality meals crafted by professional chefs. Clean, modern, and beautifully balanced design."
                primaryCTA={{ text: "Start Cooking", onClick: () => {} }}
                secondaryCTA={{ text: "Explore Chefs", onClick: () => {} }}
                className="py-12"
              />
            </Card>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Feature Showcase</h3>
          
          {/* Grid Layout */}
          <div className="space-y-4">
            <h4 className="text-h6 text-gray-900 dark:text-white">Grid Layout</h4>
            <Card className="overflow-hidden">
              <FeatureShowcase
                title="Why Choose Cheflyte?"
                description="Discover what makes our platform the perfect choice for culinary experiences"
                features={sampleFeatures}
                layout="grid"
                className="py-12"
              />
            </Card>
          </div>

          {/* Alternating Layout */}
          <div className="space-y-4">
            <h4 className="text-h6 text-gray-900 dark:text-white">Alternating Layout</h4>
            <Card className="overflow-hidden">
              <FeatureShowcase
                title="Platform Features"
                description="Everything you need for the perfect dining experience"
                features={sampleFeatures.slice(0, 2)}
                layout="alternating"
                className="py-12"
              />
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Testimonial Sections</h3>
          
          {/* Grid Layout */}
          <div className="space-y-4">
            <h4 className="text-h6 text-gray-900 dark:text-white">Grid Layout</h4>
            <Card className="overflow-hidden">
              <TestimonialSection
                title="What Our Customers Say"
                description="Hear from people who've transformed their dining experiences with Cheflyte"
                testimonials={sampleTestimonials}
                layout="grid"
                className="py-12"
              />
            </Card>
          </div>

          {/* Carousel Layout */}
          <div className="space-y-4">
            <h4 className="text-h6 text-gray-900 dark:text-white">Carousel Layout</h4>
            <Card className="overflow-hidden">
              <TestimonialSection
                title="Customer Stories"
                description="Interactive testimonial carousel with navigation controls"
                testimonials={sampleTestimonials}
                layout="carousel"
                className="py-12"
              />
            </Card>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Pricing Tables</h3>
          
          <Card className="overflow-hidden">
            <PricingSection
              title="Choose Your Experience"
              description="Flexible pricing for every occasion and budget"
              plans={samplePricingPlans}
              billingToggle={{
                monthly: "Per Session",
                yearly: "Monthly Plan",
                discount: "Save 20%"
              }}
              className="py-12"
            />
          </Card>
        </div>

        {/* Call to Action */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Call to Action Sections</h3>
          
          {/* Default CTA */}
          <div className="space-y-4">
            <h4 className="text-h6 text-gray-900 dark:text-white">Default CTA</h4>
            <Card className="overflow-hidden">
              <CallToAction
                variant="default"
                title="Ready to Start Cooking?"
                description="Join thousands of food lovers who've discovered the joy of professional chef experiences at home."
                primaryCTA={{ text: "Get Started", onClick: () => {} }}
                secondaryCTA={{ text: "Learn More", onClick: () => {} }}
                className="py-12"
              />
            </Card>
          </div>

          {/* Gradient CTA */}
          <div className="space-y-4">
            <h4 className="text-h6 text-gray-900 dark:text-white">Gradient CTA</h4>
            <Card className="overflow-hidden">
              <CallToAction
                variant="gradient"
                title="Transform Your Kitchen Today"
                description="Experience the magic of professional cooking with our expert chefs."
                primaryCTA={{ text: "Book Now", onClick: () => {} }}
                secondaryCTA={{ text: "View Chefs", onClick: () => {} }}
                backgroundPattern={true}
                className="py-12"
              />
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Statistics Display</h3>
          
          <Card className="overflow-hidden">
            <StatsSection
              title="Platform Performance"
              description="Numbers that speak to our success and growth"
              stats={samplePlatformStats}
              layout="horizontal"
              variant="gradient"
              className="py-12"
            />
          </Card>

          {/* Compact Stats */}
          <div className="space-y-4">
            <h4 className="text-h6 text-gray-900 dark:text-white">Compact Layout</h4>
            <Card className="overflow-hidden">
              <StatsSection
                stats={samplePlatformStats}
                layout="compact"
                variant="minimal"
                className="py-8"
              />
            </Card>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Logo Cloud</h3>
          
          <Card className="p-6">
            <LogoCloud
              title="Trusted by Leading Companies"
              logos={[
                { name: "TechCorp", src: "/api/placeholder/120/60" },
                { name: "Creative Agency", src: "/api/placeholder/120/60" },
                { name: "Elite Events", src: "/api/placeholder/120/60" },
                { name: "Gourmet Inc", src: "/api/placeholder/120/60" },
                { name: "Culinary Co", src: "/api/placeholder/120/60" },
                { name: "Food Network", src: "/api/placeholder/120/60" }
              ]}
            />
          </Card>
        </div>

        {/* Marketing Page Layout Example */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Complete Marketing Page Layout</h3>
          
          <Card className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Full Marketing Page Example</h4>
            
            <div className="space-y-12 scale-75 transform origin-top">
              {/* Mini Hero */}
              <HeroSection
                variant="gradient"
                subtitle="Demo Page"
                title="Complete Marketing Experience"
                description="This demonstrates how all components work together in a real marketing page."
                primaryCTA={{ text: "Get Started", onClick: () => {} }}
                secondaryCTA={{ text: "Learn More", onClick: () => {} }}
                className="py-8"
              />

              {/* Mini Features */}
              <FeatureShowcase
                title="Key Features"
                features={sampleFeatures.slice(0, 3)}
                layout="grid"
                className="py-8"
              />

              {/* Mini Stats */}
              <StatsSection
                stats={samplePlatformStats}
                layout="horizontal"
                variant="gradient"
                className="py-6"
              />

              {/* Mini CTA */}
              <CallToAction
                variant="default"
                title="Ready to Get Started?"
                description="Join the revolution in home dining experiences."
                primaryCTA={{ text: "Sign Up", onClick: () => {} }}
                className="py-8"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Dark Mode Design System */}
      <section className="space-y-8">
        <div>
          <h2 className="text-section-title text-gray-900 dark:text-white">Dark Mode Design System</h2>
          <p className="text-body text-gray-600 dark:text-gray-400">
            Sophisticated dark mode implementation with WCAG AA compliance, system preference detection, and smooth transitions.
          </p>
        </div>

        {/* Color Palettes */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Color Palettes</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DarkModeColorPalette
              title="Primary & Accent Colors"
              colors={[
                {
                  name: "Primary Blue",
                  light: "#3b82f6",
                  dark: "#60a5fa",
                  description: "Main brand color with enhanced brightness for dark mode"
                },
                {
                  name: "Accent Green",
                  light: "#10b981",
                  dark: "#34d399",
                  description: "Success and accent color optimized for contrast"
                },
                {
                  name: "Warning Orange",
                  light: "#f59e0b",
                  dark: "#fbbf24",
                  description: "Warning states with improved visibility"
                },
                {
                  name: "Error Red",
                  light: "#ef4444",
                  dark: "#f87171",
                  description: "Error states with proper contrast ratios"
                }
              ]}
            />

            <DarkModeColorPalette
              title="Surface & Background Colors"
              colors={[
                {
                  name: "Primary Background",
                  light: "#ffffff",
                  dark: "#0a0a0b",
                  description: "Main background with deep black undertone"
                },
                {
                  name: "Secondary Background",
                  light: "#fafafa",
                  dark: "#111113",
                  description: "Slightly elevated surfaces"
                },
                {
                  name: "Card Background",
                  light: "#f4f4f5",
                  dark: "#1a1a1c",
                  description: "Card and component backgrounds"
                },
                {
                  name: "Interactive Surface",
                  light: "#e8e8e8",
                  dark: "#2d2d32",
                  description: "Hover and interactive states"
                }
              ]}
            />
          </div>
        </div>

        {/* Contrast Compliance */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Contrast Compliance</h3>
          
          <ContrastChecker
            combinations={[
              {
                name: "Primary Text on Background",
                background: "#0a0a0b",
                text: "#ffffff",
                ratio: 19.5,
                aaPass: true,
                aaaPass: true
              },
              {
                name: "Secondary Text on Background",
                background: "#0a0a0b",
                text: "#e4e4e7",
                ratio: 15.2,
                aaPass: true,
                aaaPass: true
              },
              {
                name: "Primary Button",
                background: "#3b82f6",
                text: "#ffffff",
                ratio: 4.8,
                aaPass: true,
                aaaPass: false
              },
              {
                name: "Success Button",
                background: "#10b981",
                text: "#ffffff",
                ratio: 4.2,
                aaPass: true,
                aaaPass: false
              },
              {
                name: "Muted Text on Card",
                background: "#1a1a1c",
                text: "#71717a",
                ratio: 4.6,
                aaPass: true,
                aaaPass: false
              },
              {
                name: "Link Text",
                background: "#0a0a0b",
                text: "#60a5fa",
                ratio: 8.1,
                aaPass: true,
                aaaPass: true
              }
            ]}
          />
        </div>

        {/* Component Examples */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Dark Mode Component Examples</h3>
          <DarkModeComponentShowcase />
        </div>

        {/* Accessibility Features */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Accessibility & Best Practices</h3>
          <DarkModeAccessibility />
        </div>

        {/* Theme Transition Demo */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Theme Transition Demo</h3>
          
          <Card className="p-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900 dark:text-white">Smooth Theme Transitions</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All components feature smooth 300ms transitions when switching between light and dark modes. 
                The theme toggle button is located in the bottom-right corner of the screen.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg transition-all duration-300">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Gradient Backgrounds</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Gradients adapt seamlessly between themes
                  </p>
                </div>
                
                <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-300">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Border Colors</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Borders maintain proper contrast
                  </p>
                </div>
                
                <div className="p-4 bg-white dark:bg-gray-800 shadow-sm dark:shadow-lg rounded-lg transition-all duration-300">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">Shadow Effects</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Shadows enhance depth in dark mode
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">System Integration</h5>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Automatically detects system theme preference</li>
                  <li>• Respects user's manual theme selection</li>
                  <li>• Updates meta theme-color for mobile browsers</li>
                  <li>• Smooth transitions with reduced motion support</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Dashboard Component Library */}
      <section className="space-y-8">
        <div>
          <h2 className="text-section-title text-gray-900 dark:text-white">Dashboard Component Library</h2>
          <p className="text-body text-gray-600 dark:text-gray-400">
            Enterprise-grade dashboard components for data visualization and analytics interfaces.
          </p>
        </div>

        {/* Dashboard Header Example */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Dashboard Header</h3>
          <Card className="p-6">
            <DashboardHeader
              title="Analytics Dashboard"
              description="Real-time insights and performance metrics"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Analytics", href: "/analytics" },
                { label: "Dashboard" }
              ]}
              actions={
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              }
            />
          </Card>
        </div>

        {/* Metric Cards */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Metric Cards</h3>
          <DashboardGrid columns={4} gap="md">
            {sampleMetrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </DashboardGrid>
          
          {/* Loading States */}
          <div className="space-y-4">
            <h4 className="text-h6 text-gray-900 dark:text-white">Loading States</h4>
            <DashboardGrid columns={4} gap="md">
              {[...Array(4)].map((_, i) => (
                <MetricCard
                  key={i}
                  title=""
                  value=""
                  loading={true}
                  variant={["primary", "success", "warning", "default"][i] as any}
                />
              ))}
            </DashboardGrid>
          </div>
        </div>

        {/* Charts and Data Visualization */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Charts & Data Visualization</h3>
          
          <DashboardGrid columns={2} gap="lg">
            <ChartContainer
              title="Weekly Bookings"
              description="Number of bookings per day this week"
              actions={
                <Button variant="outline" size="sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              }
            >
              <BarChart data={sampleChartData} height={250} />
            </ChartContainer>

            <ChartContainer
              title="Loading State Example"
              description="Chart container with loading animation"
              loading={true}
            >
              <div></div>
            </ChartContainer>
          </DashboardGrid>
        </div>

        {/* Activity Feed & Quick Stats */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Activity Feed & Quick Stats</h3>
          
          <DashboardGrid columns={2} gap="lg">
            <ActivityFeed items={sampleActivity} />
            <QuickStats stats={sampleStats} />
          </DashboardGrid>
        </div>

        {/* Data Table */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Data Table</h3>
          
          <DataTable
            columns={sampleTableColumns}
            data={sampleTableData}
          />
          
          {/* Loading State */}
          <div className="space-y-4">
            <h4 className="text-h6 text-gray-900 dark:text-white">Loading State</h4>
            <DataTable
              columns={sampleTableColumns}
              data={[]}
              loading={true}
            />
          </div>
        </div>

        {/* Dashboard Layouts */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Dashboard Layouts</h3>
          
          <div className="space-y-8">
            {/* Full Dashboard Example */}
            <Card className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Complete Dashboard Layout</h4>
              
              <div className="space-y-8">
                {/* Metrics Row */}
                <DashboardGrid columns={4} gap="md">
                  {sampleMetrics.slice(0, 4).map((metric, index) => (
                    <MetricCard key={index} {...metric} className="scale-90" />
                  ))}
                </DashboardGrid>

                {/* Charts & Activity Row */}
                <DashboardGrid columns={3} gap="md">
                  <div className="lg:col-span-2">
                    <ChartContainer
                      title="Performance Overview"
                      className="scale-90"
                    >
                      <BarChart data={sampleChartData} height={200} />
                    </ChartContainer>
                  </div>
                  <div className="lg:col-span-1">
                    <QuickStats stats={sampleStats} className="scale-90" />
                  </div>
                </DashboardGrid>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-section-title text-gray-900 dark:text-white">Typography System</h2>
          <p className="text-body text-gray-600 dark:text-gray-400">
            Manrope + Inter font pairing for premium, tech-forward aesthetic.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="card-modern p-6 space-y-4">
            <h3 className="text-card-title text-gray-900 dark:text-white">Headings (Manrope)</h3>
            <div className="space-y-3">
              <p className="text-display">Display Text</p>
              <p className="text-h1">Heading 1 Text</p>
              <p className="text-h2">Heading 2 Text</p>
              <p className="text-h3">Heading 3 Text</p>
              <p className="text-h4">Heading 4 Text</p>
              <p className="text-h5">Heading 5 Text</p>
              <p className="text-h6">Heading 6 Text</p>
            </div>
          </Card>

          <Card className="card-modern p-6 space-y-4">
            <h3 className="text-card-title text-gray-900 dark:text-white">Body Text (Inter)</h3>
            <div className="space-y-3">
              <p className="text-body-xl">Body XL: The quick brown fox jumps over the lazy dog</p>
              <p className="text-body-large">Body Large: The quick brown fox jumps over the lazy dog</p>
              <p className="text-body">Body: The quick brown fox jumps over the lazy dog</p>
              <p className="text-body-small">Body Small: The quick brown fox jumps over the lazy dog</p>
              <p className="text-caption">Caption: The quick brown fox</p>
              <p className="text-overline">Overline: The quick brown fox</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Loading States */}
      <section className="space-y-8">
        <div>
          <h2 className="text-section-title text-gray-900 dark:text-white">Loading States & Animations</h2>
          <p className="text-body text-gray-600 dark:text-gray-400">
            Sophisticated loading animations and micro-interactions that bring the interface to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Loading Spinners */}
          <Card className="card-modern p-6 space-y-4">
            <h3 className="text-card-title text-gray-900 dark:text-white">Loading Spinners</h3>
            <div className="flex items-center gap-4">
              <LoadingSpinner variant="primary" size="sm" />
              <LoadingSpinner variant="primary" size="default" />
              <LoadingSpinner variant="primary" size="lg" />
              <LoadingSpinner variant="primary" size="xl" />
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>Variants: default, primary, secondary, accent, white</p>
              <p>Sizes: sm, default, lg, xl</p>
            </div>
          </Card>

          {/* Loading Dots */}
          <Card className="card-modern p-6 space-y-4">
            <h3 className="text-card-title text-gray-900 dark:text-white">Loading Dots</h3>
            <div className="space-y-3">
              <LoadingDots variant="primary" size="default" />
              <LoadingDots variant="accent" size="lg" />
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>Pulsing animation with staggered timing</p>
              <p>Perfect for subtle loading indicators</p>
            </div>
          </Card>

          {/* Progress Bars */}
          <Card className="card-modern p-6 space-y-4">
            <h3 className="text-card-title text-gray-900 dark:text-white">Progress Bars</h3>
            <div className="space-y-4">
              <div>
                <LoadingProgress variant="default" progress={progress} />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{progress}% Complete</p>
              </div>
              <LoadingProgress variant="gradient" indeterminate />
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={decrementProgress}>-10%</Button>
                <Button variant="outline" size="sm" onClick={incrementProgress}>+10%</Button>
              </div>
            </div>
          </Card>

          {/* Skeletons */}
          <Card className="card-modern p-6 space-y-4">
            <h3 className="text-card-title text-gray-900 dark:text-white">Skeleton Loaders</h3>
            <div className="space-y-3">
              <LoadingSkeleton className="h-4 w-3/4" />
              <LoadingSkeleton className="h-4 w-1/2" />
              <LoadingSkeleton className="h-8 w-8 rounded-full" />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <p>Animated gradients for content placeholders</p>
            </div>
          </Card>

          {/* Loading State Demo */}
          <Card className="card-modern p-6 space-y-4">
            <h3 className="text-card-title text-gray-900 dark:text-white">Loading State Demo</h3>
            <LoadingState 
              loading={loading}
              skeleton={<LoadingSkeleton className="h-16 w-full" />}
            >
              <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <p className="text-primary-700 dark:text-primary-300">Content loaded successfully!</p>
              </div>
            </LoadingState>
            <Button variant="outline" size="sm" onClick={toggleLoading}>
              {loading ? "Show Content" : "Show Loading"}
            </Button>
          </Card>

          {/* Page Loading */}
          <Card className="card-modern p-6 space-y-4">
            <h3 className="text-card-title text-gray-900 dark:text-white">Page Loading</h3>
            <div className="h-32">
              <PageLoading 
                title="Loading Content"
                description="Please wait..."
                className="min-h-0 h-full"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Hover Effects */}
      <section className="space-y-8">
        <div>
          <h2 className="text-section-title text-gray-900 dark:text-white">Hover Effects</h2>
          <p className="text-body text-gray-600 dark:text-gray-400">
            Delightful hover effects that enhance user experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Hover Scale */}
          <Card className="card-modern">
            <HoverScale>
              <div className="p-6 text-center space-y-2">
                <div className="w-12 h-12 bg-primary-600 rounded-full mx-auto" />
                <h4 className="font-medium text-gray-900 dark:text-white">Hover Scale</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Gentle scale animation</p>
              </div>
            </HoverScale>
          </Card>

          {/* Hover Lift */}
          <Card className="card-modern">
            <HoverLift>
              <div className="p-6 text-center space-y-2">
                <div className="w-12 h-12 bg-accent-600 rounded-full mx-auto" />
                <h4 className="font-medium text-gray-900 dark:text-white">Hover Lift</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Subtle lift with shadow</p>
              </div>
            </HoverLift>
          </Card>

          {/* Hover Glow */}
          <Card className="card-modern">
            <HoverGlow>
              <div className="p-6 text-center space-y-2">
                <div className="w-12 h-12 bg-green-600 rounded-full mx-auto" />
                <h4 className="font-medium text-gray-900 dark:text-white">Hover Glow</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Glowing effect on hover</p>
              </div>
            </HoverGlow>
          </Card>

          {/* Combined Effects */}
          <Card className="card-modern">
            <HoverScale>
              <HoverGlow color="rgb(147, 197, 253)" intensity={0.4}>
                <div className="p-6 text-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto" />
                  <h4 className="font-medium text-gray-900 dark:text-white">Combined</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Scale + glow effects</p>
                </div>
              </HoverGlow>
            </HoverScale>
          </Card>
        </div>
      </section>

      {/* Skeleton Layouts */}
      <section className="space-y-8">
        <div>
          <h2 className="text-section-title text-gray-900 dark:text-white">Skeleton Layouts</h2>
          <p className="text-body text-gray-600 dark:text-gray-400">
            Pre-built loading skeletons for common UI patterns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-card-title text-gray-900 dark:text-white">Card Skeleton</h3>
            <CardSkeleton />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-card-title text-gray-900 dark:text-white">Form Skeleton</h3>
            <FormSkeleton />
          </div>
        </div>
      </section>

      {/* Button System */}
      <section className="space-y-8">
        <div>
          <h2 className="text-section-title text-gray-900 dark:text-white">Button System</h2>
          <p className="text-body text-gray-600 dark:text-gray-400">
            Sophisticated button variants with micro-animations and comprehensive state management.
          </p>
        </div>
        
        <Card className="card-modern p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-card-title text-gray-900 dark:text-white">Button Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="gradient">Gradient</Button>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="success">Success</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-card-title text-gray-900 dark:text-white">Button Sizes</h3>
            <div className="flex flex-wrap items-end gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-card-title text-gray-900 dark:text-white">Button States</h3>
            <div className="flex flex-wrap gap-3">
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button variant="outline" loading>Loading Outline</Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Input & Form Components */}
      <section className="space-y-8">
        <div>
          <h2 className="text-section-title text-gray-900 dark:text-white">Input & Form Components</h2>
          <p className="text-body text-gray-600 dark:text-gray-400">
            Modern form components with floating labels, validation states, and comprehensive accessibility features.
          </p>
        </div>
        
        {/* Input Components */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Input Variants</h3>
          
          <Card className="card-modern p-8 space-y-8">
            {/* Input Variants */}
            <div className="space-y-6">
              <h4 className="text-h6 text-gray-900 dark:text-white">Input Styles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input
                    label="Default Input"
                    placeholder="Enter your text..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <Input
                    variant="filled"
                    label="Filled Input"
                    placeholder="Filled variant..."
                  />
                </div>
                <div className="space-y-4">
                  <Input
                    variant="outline"
                    label="Outline Input"
                    placeholder="Outline variant..."
                  />
                  <Input
                    variant="flushed"
                    label="Flushed Input"
                    placeholder="Flushed variant..."
                  />
                </div>
              </div>
            </div>

            {/* Input Sizes */}
            <div className="space-y-6">
              <h4 className="text-h6 text-gray-900 dark:text-white">Input Sizes</h4>
              <div className="space-y-4">
                <Input size="sm" label="Small Input" placeholder="Small size..." />
                <Input size="default" label="Default Input" placeholder="Default size..." />
                <Input size="lg" label="Large Input" placeholder="Large size..." />
                <Input size="xl" label="Extra Large Input" placeholder="Extra large size..." />
              </div>
            </div>

            {/* Input States */}
            <div className="space-y-6">
              <h4 className="text-h6 text-gray-900 dark:text-white">Input States</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input
                    label="Error State"
                    placeholder="This has an error..."
                    state={inputError ? "error" : "default"}
                    errorText={inputError ? "This field is required" : undefined}
                  />
                  <Input
                    label="Success State"
                    placeholder="This is valid!"
                    state={inputSuccess ? "success" : "default"}
                    successText={inputSuccess ? "Looks good!" : undefined}
                  />
                </div>
                <div className="space-y-4">
                  <Input
                    label="Disabled Input"
                    placeholder="Cannot edit this..."
                    disabled
                  />
                  <Input
                    label="Loading Input"
                    placeholder="Processing..."
                    loading
                  />
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={toggleInputError}
                  className={inputError ? "border-red-500 text-red-600" : ""}
                >
                  {inputError ? "Clear Error" : "Show Error"}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={toggleInputSuccess}
                  className={inputSuccess ? "border-green-500 text-green-600" : ""}
                >
                  {inputSuccess ? "Clear Success" : "Show Success"}
                </Button>
              </div>
            </div>

            {/* Input with Icons */}
            <div className="space-y-6">
              <h4 className="text-h6 text-gray-900 dark:text-white">Input with Icons</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your@email.com"
                    leftIcon={<Users size={18} />}
                  />
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter password..."
                    leftIcon={<Shield size={18} />}
                    showPassword={false}
                  />
                </div>
                <div className="space-y-4">
                  <Input
                    label="Search"
                    placeholder="Search anything..."
                    rightIcon={<TrendingUp size={18} />}
                  />
                  <Input
                    label="Amount"
                    type="number"
                    placeholder="0.00"
                    leftIcon={<DollarSign size={18} />}
                    rightIcon={<span className="text-sm text-gray-500">USD</span>}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Textarea Component */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Textarea Components</h3>
          
          <Card className="card-modern p-8 space-y-8">
            {/* Textarea Variants */}
            <div className="space-y-6">
              <h4 className="text-h6 text-gray-900 dark:text-white">Textarea Styles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Textarea
                    label="Default Textarea"
                    placeholder="Enter your message..."
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    maxLength={500}
                    showCharCount
                  />
                  <Textarea
                    variant="filled"
                    label="Filled Textarea"
                    placeholder="Filled variant..."
                    rows={3}
                  />
                </div>
                <div className="space-y-4">
                  <Textarea
                    variant="outline"
                    label="Outline Textarea"
                    placeholder="Outline variant..."
                    rows={4}
                  />
                  <Textarea
                    variant="outline"
                    label="Outline Textarea (Alt)"
                    placeholder="Alternative outline..."
                  />
                </div>
              </div>
            </div>

            {/* Textarea Sizes */}
            <div className="space-y-6">
              <h4 className="text-h6 text-gray-900 dark:text-white">Textarea Sizes</h4>
              <div className="space-y-4">
                <Textarea size="sm" label="Small Textarea" placeholder="Small size..." />
                <Textarea size="default" label="Default Textarea" placeholder="Default size..." />
                <Textarea size="lg" label="Large Textarea" placeholder="Large size..." />
              </div>
            </div>

            {/* Textarea States */}
            <div className="space-y-6">
              <h4 className="text-h6 text-gray-900 dark:text-white">Textarea States</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Textarea
                  label="Error Textarea"
                  placeholder="This has an error..."
                  state="error"
                  errorText="This field is required"
                  rows={3}
                />
                <Textarea
                  label="Success Textarea"
                  placeholder="This is valid!"
                  state="success"
                  successText="Message looks good!"
                  rows={3}
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Select Component */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Select Components</h3>
          
          <Card className="card-modern p-8 space-y-8">
            {/* Select Variants */}
            <div className="space-y-6">
              <h4 className="text-h6 text-gray-900 dark:text-white">Select Styles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Select
                    label="Default Select"
                    options={selectOptions}
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                  />
                  <Select
                    variant="filled"
                    label="Filled Select"
                    options={selectOptions}
                  />
                </div>
                <div className="space-y-4">
                  <Select
                    variant="outline"
                    label="Outline Select"
                    options={selectOptions}
                  />
                  <Select
                    variant="outline"
                    label="Outline Select (Alt)"
                    options={selectOptions}
                  />
                </div>
              </div>
            </div>

            {/* Select Sizes */}
            <div className="space-y-6">
              <h4 className="text-h6 text-gray-900 dark:text-white">Select Sizes</h4>
              <div className="space-y-4">
                <Select size="sm" label="Small Select" options={selectOptions} />
                <Select size="default" label="Default Select" options={selectOptions} />
                <Select size="lg" label="Large Select" options={selectOptions} />
              </div>
            </div>

            {/* Select States */}
            <div className="space-y-6">
              <h4 className="text-h6 text-gray-900 dark:text-white">Select States</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Select
                    label="Error Select"
                    options={selectOptions}
                    state="error"
                    errorText="Please select an option"
                  />
                  <Select
                    label="Success Select"
                    options={selectOptions}
                    state="success"
                    successText="Great choice!"
                    value="option1"
                  />
                </div>
                <div className="space-y-4">
                  <Select
                    label="Disabled Select"
                    options={selectOptions}
                    disabled
                  />
                  <Select
                    label="Loading Select"
                    options={[{ value: '', label: 'Loading...', disabled: true }]}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Form Example */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Complete Form Example</h3>
          
          <Card className="card-modern p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  placeholder="Enter your first name"
                  required
                  leftIcon={<Users size={18} />}
                />
                <Input
                  label="Last Name"
                  placeholder="Enter your last name"
                  required
                />
              </div>
              
              <Input
                type="email"
                label="Email Address"
                placeholder="your@email.com"
                required
                leftIcon={<Users size={18} />}
              />
              
              <Input
                type="password"
                label="Password"
                placeholder="Create a secure password"
                required
                leftIcon={<Shield size={18} />}
                showPassword={false}
                helperText="Password must be at least 8 characters long"
              />
              
              <Select
                label="Preferred Cuisine"
                options={[
                  { value: '', label: 'Select your favorite cuisine...', disabled: true },
                  { value: 'italian', label: 'Italian' },
                  { value: 'french', label: 'French' },
                  { value: 'japanese', label: 'Japanese' },
                  { value: 'mexican', label: 'Mexican' },
                  { value: 'indian', label: 'Indian' },
                ]}
                required
              />
              
              <Textarea
                label="Special Requests"
                placeholder="Tell us about any dietary restrictions or special requests..."
                rows={4}
                maxLength={500}
                showCharCount
                helperText="Optional: Let us know how we can customize your experience"
              />
              
              <div className="flex gap-4 pt-4">
                <Button variant="primary" size="lg" type="submit">
                  Create Account
                </Button>
                <Button variant="outline" size="lg" type="button">
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        </div>

        {/* Form Validation Example */}
        <div className="space-y-6">
          <h3 className="text-card-title text-gray-900 dark:text-white">Form Validation States</h3>
          
          <Card className="card-modern p-8">
            <div className="space-y-6">
              <h4 className="text-h6 text-gray-900 dark:text-white">Real-time Validation Demo</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                These inputs demonstrate real-time validation feedback with appropriate states and messages.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input
                    type="email"
                    label="Email Validation"
                    placeholder="test@example.com"
                    value="invalid-email"
                    state="error"
                    errorText="Please enter a valid email address"
                    leftIcon={<Users size={18} />}
                  />
                  <Input
                    label="Required Field"
                    placeholder="This field is required"
                    state="error"
                    errorText="This field cannot be empty"
                    required
                  />
                </div>
                <div className="space-y-4">
                  <Input
                    label="Password Strength"
                    type="password"
                    placeholder="Strong password"
                    value="MyStr0ngP@ssw0rd!"
                    state="success"
                    successText="Strong password!"
                    leftIcon={<Shield size={18} />}
                    showPassword={false}
                  />
                  <Input
                    label="Confirmed Input"
                    placeholder="Confirmation successful"
                    value="confirmed@example.com"
                    state="success"
                    successText="Email confirmed successfully"
                    leftIcon={<Users size={18} />}
                  />
                </div>
              </div>
              
              <Textarea
                label="Message Validation"
                placeholder="Enter your message (min 10 characters)..."
                value="Short"
                state="error"
                errorText="Message must be at least 10 characters long"
                maxLength={200}
                showCharCount
                rows={3}
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center py-16">
        <h2 className="text-h2 font-display text-gray-900 dark:text-white mb-4">
          Ready to Build Amazing Experiences?
        </h2>
        <p className="text-body text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          This design system provides everything you need to create beautiful, 
          accessible, and performant user interfaces.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="gradient" size="lg">Get Started</Button>
          <Button variant="outline" size="lg">View Documentation</Button>
        </div>
      </div>
    </div>
  );
}
