'use client';

import React from 'react';
import { HeroSection, FeatureShowcase, TestimonialSection, StatsSection, CallToAction } from "@/components/ui/marketing";
import { 
  ChefHat, 
  Shield, 
  Users, 
  Star, 
  Globe,
  Award,
  Clock
} from 'lucide-react';
import { FeatureAIMatching } from "@/components/illustrations/FeatureAIMatching";
import { FeatureChefPro } from "@/components/illustrations/FeatureChefPro";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Full width with constrained content */}
      <section className="bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection
            variant="minimal"
            subtitle="AI-Powered Chef Platform"
            title="Transform Your Dining Experience with World-Class Chefs"
            description="Connect with professional chefs for unforgettable culinary experiences. From intimate home dining to large-scale events, our AI matches you with the perfect chef for every occasion."
            primaryCTA={{
              text: "Get Started",
              onClick: () => window.location.href = '/auth/signup'
            }}
            secondaryCTA={{
              text: "Watch Demo",
              onClick: () => console.log('Demo clicked')
            }}
            stats={[
              { value: "10,000+", label: "Happy Customers" },
              { value: "500+", label: "Expert Chefs" },
              { value: "4.9★", label: "Average Rating" }
            ]}
            className="py-20 lg:py-32"
          />
        </div>
      </section>

      {/* Features Section - Full width with contrasting background */}
      <section className="bg-gray-50 dark:bg-gray-800/50 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeatureShowcase
            title="Why Choose Cheflyte?"
            description="Discover what makes our platform the perfect choice for exceptional culinary experiences"
            features={[
              {
                icon: <FeatureAIMatching />,
                title: "AI-Powered Matching",
                description: "Our sophisticated algorithm analyzes your preferences, dietary needs, and event requirements to connect you with the perfect chef every time.",
                benefits: [
                  "Smart chef recommendations based on your taste profile",
                  "Dietary restriction and allergy consideration",
                  "Event size and cuisine expertise matching",
                  "Real-time availability optimization"
                ]
              },
              {
                icon: <FeatureChefPro />,
                title: "World-Class Professional Chefs",
                description: "Connect with verified professional chefs who bring restaurant-quality experiences directly to your preferred location.",
                benefits: [
                  "Michelin-trained and certified professionals",
                  "Specialized cuisine expertise and techniques",
                  "Full background checks and insurance coverage",
                  "Personalized menu creation and planning"
                ]
              },
              {
                icon: <Shield size={24} />,
                title: "Secure & Trusted Platform",
                description: "Enjoy peace of mind with our comprehensive safety measures, secure payments, and full insurance coverage for every booking.",
                benefits: [
                  "Encrypted payment processing and data protection",
                  "Comprehensive liability and property insurance",
                  "24/7 customer support and emergency assistance",
                  "Verified chef credentials and review system"
                ]
              },
              {
                icon: <Users size={24} />,
                title: "Personalized Service Excellence",
                description: "Every detail is customized to your preferences, from menu planning to presentation style and dietary accommodations.",
                benefits: [
                  "Custom menu design for your event and preferences",
                  "Flexible service options (cooking, serving, cleanup)",
                  "Special dietary accommodations and allergen management",
                  "Professional table setting and presentation"
                ]
              },
              {
                icon: <Award size={24} />,
                title: "Premium Quality Guarantee",
                description: "We maintain the highest standards through rigorous chef vetting, quality monitoring, and satisfaction guarantees.",
                benefits: [
                  "Multi-stage chef screening and skill assessment",
                  "Regular quality audits and performance reviews",
                  "100% satisfaction guarantee with refund protection",
                  "Continuous training and development programs"
                ]
              },
              {
                icon: <Clock size={24} />,
                title: "Flexible & Convenient Booking",
                description: "Book your chef experience with ease using our streamlined platform, with flexible scheduling and instant confirmation.",
                benefits: [
                  "Simple 3-step booking process with instant quotes",
                  "Flexible scheduling including same-day availability",
                  "Easy rebooking and modification options",
                  "Mobile app for on-the-go management"
                ]
              }
            ]}
            layout="grid"
            className="py-20 px-0"
          />
        </div>
      </section>

      {/* Testimonials Section - Full width with different background */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TestimonialSection
            title="What Our Customers Say"
            description="Hear from people who've transformed their dining experiences with Cheflyte"
            testimonials={[
              {
                id: "1",
                content: "Cheflyte completely transformed our anniversary dinner. Chef Maria created an incredible 5-course Italian experience that was better than any restaurant. The personalized service and attention to detail were extraordinary.",
                author: {
                  name: "Sarah Johnson",
                  role: "Marketing Director",
                  company: "TechFlow"
                },
                rating: 5,
                featured: true
              },
              {
                id: "2",
                content: "As a busy executive, I don't have time to plan elaborate meals. Cheflyte's AI perfectly matched me with Chef David who now handles all my client dinners. Professional, reliable, and the food is always exceptional.",
                author: {
                  name: "Michael Chen",
                  role: "CEO",
                  company: "InnovateLabs"
                },
                rating: 5
              },
              {
                id: "3",
                content: "We used Cheflyte for our company retreat, and it was a game-changer. Chef Ahmed accommodated all dietary restrictions seamlessly and created an unforgettable team-building experience around food.",
                author: {
                  name: "Emily Rodriguez",
                  role: "HR Director",
                  company: "Creative Solutions"
                },
                rating: 5
              }
            ]}
            layout="grid"
            className="py-20 px-0"
          />
        </div>
      </section>

      {/* Statistics Section - Full width with gradient background */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsSection
            title="Trusted by Thousands Worldwide"
            description="Join a growing community of food enthusiasts who've discovered the joy of personalized chef experiences"
            stats={[
              { 
                value: "15,000+", 
                label: "Satisfied Customers", 
                icon: <Users size={24} />, 
                description: "Across 50+ cities globally" 
              },
              { 
                value: "750+", 
                label: "Professional Chefs", 
                icon: <ChefHat size={24} />, 
                description: "Vetted and certified experts" 
              },
              { 
                value: "4.9/5", 
                label: "Average Rating", 
                icon: <Star size={24} />, 
                description: "From 12,000+ reviews" 
              },
              { 
                value: "65+", 
                label: "Cuisine Types", 
                icon: <Globe size={24} />, 
                description: "From around the world" 
              }
            ]}
            layout="horizontal"
            variant="gradient"
            className="py-20 px-0"
          />
        </div>
      </section>

      {/* Call to Action Section - Full width with contrasting background */}
      <section className="bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CallToAction
            variant="gradient"
            title="Ready to Transform Your Dining Experience?"
            description="Join thousands of food enthusiasts who've discovered the joy of professional chef experiences. Book your first session today and taste the difference quality makes."
            primaryCTA={{
              text: "Start Your Culinary Journey",
              onClick: () => window.location.href = '/auth/signup'
            }}
            secondaryCTA={{
              text: "Browse Our Chefs",
              onClick: () => console.log('Browse chefs clicked')
            }}
            backgroundPattern={true}
            className="py-20 px-0"
          />
        </div>
      </section>
    </main>
  );
}
