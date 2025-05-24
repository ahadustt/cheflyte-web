'use client';

import React, { useState } from 'react';
import { Button } from './button';
import { Card } from './card';
import { cn } from '@/lib/utils';
import { 
  ArrowRight,
  Check,
  Star,
  Users,
  Award,
  Shield,
  Zap,
  Heart,
  PlayCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Globe,
  Clock,
  ChefHat,
  DollarSign
} from 'lucide-react';
import { HoverScale, HoverLift, FadeInUp, SlideInRight } from './micro-animations';

// Hero Section Component
interface HeroSectionProps {
  variant?: 'default' | 'gradient' | 'video' | 'minimal';
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  backgroundImage?: string;
  videoUrl?: string;
  stats?: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
  illustration?: React.ReactNode;
}

export function HeroSection({
  variant = 'default',
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  videoUrl,
  stats,
  className,
  illustration
}: HeroSectionProps) {
  const variantStyles = {
    default: 'bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:to-gray-800',
    gradient: 'bg-gradient-to-br from-blue-50/80 via-white to-purple-50/80 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden',
    video: 'bg-black relative overflow-hidden',
    minimal: 'bg-white dark:bg-gray-900'
  };

  const textStyles = {
    default: 'text-gray-900 dark:text-white',
    gradient: 'text-gray-900 dark:text-white',
    video: 'text-white',
    minimal: 'text-gray-900 dark:text-white'
  };

  return (
    <section className={cn(
      'relative py-24 lg:py-40 px-6',
      variantStyles[variant],
      className
    )}>
      {/* Next-gen background effects for gradient variant */}
      {variant === 'gradient' && (
        <>
          {/* Animated gradient orbs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-l from-accent-400/15 to-primary-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        </>
      )}

      {/* Background Elements */}
      {variant === 'video' && videoUrl && (
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
      
      {backgroundImage && variant !== 'video' && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Gradient Overlay for Video */}
      {variant === 'video' && (
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto">
        {illustration && (
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-lg relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100/20 to-accent-100/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
                {illustration}
              </div>
            </div>
          </div>
        )}
        <div className={cn(
          'text-center mx-auto',
          illustration ? 'max-w-4xl' : 'max-w-6xl'
        )}>
          <FadeInUp>
            {subtitle && (
              <div className="mb-8">
                <span className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-semibold backdrop-blur-sm',
                  variant === 'video'
                    ? 'bg-white/20 text-white'
                    : 'bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 dark:from-primary-900/50 dark:to-accent-900/50 dark:text-primary-300 border border-primary-200/50 dark:border-primary-700/50'
                )}>
                  <Sparkles className="h-5 w-5" />
                  {subtitle}
                </span>
              </div>
            )}

            <h1 className={cn(
              'font-bold font-display mb-8 leading-[0.9] tracking-tight',
              illustration 
                ? 'text-4xl md:text-6xl lg:text-7xl' 
                : 'text-5xl md:text-7xl lg:text-8xl xl:text-9xl',
              textStyles[variant]
            )}>
              {title}
            </h1>

            <p className={cn(
              'mb-12 leading-relaxed font-medium',
              illustration 
                ? 'text-xl md:text-2xl max-w-4xl mx-auto' 
                : 'text-2xl md:text-3xl lg:text-4xl max-w-5xl mx-auto',
              variant === 'video'
                ? 'text-white/90'
                : 'text-gray-600 dark:text-gray-300'
            )}>
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <HoverScale>
                <Button
                  variant={variant === 'video' ? 'secondary' : 'gradient'}
                  size="xl"
                  onClick={primaryCTA.onClick}
                  className="text-xl font-bold px-8 py-4 h-auto"
                >
                  {primaryCTA.text}
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </HoverScale>

              {secondaryCTA && (
                <HoverScale>
                  <Button
                    variant={variant === 'video' ? 'ghost' : 'outline'}
                    size="xl"
                    onClick={secondaryCTA.onClick}
                    className={cn(
                      'text-xl font-bold px-8 py-4 h-auto',
                      variant === 'video' && 'text-white border-white/30 hover:bg-white/10'
                    )}
                  >
                    <PlayCircle className="mr-3 h-6 w-6" />
                    {secondaryCTA.text}
                  </Button>
                </HoverScale>
              )}
            </div>

            {stats && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {stats.map((stat, index) => (
                  <SlideInRight key={index} delay={index * 0.1}>
                    <div className="text-center">
                      <div className={cn(
                        'font-bold font-display mb-3',
                        illustration 
                          ? 'text-3xl md:text-4xl' 
                          : 'text-4xl md:text-5xl lg:text-6xl',
                        textStyles[variant]
                      )}>
                        {stat.value}
                      </div>
                      <div className={cn(
                        'uppercase tracking-wide font-semibold',
                        illustration 
                          ? 'text-sm' 
                          : 'text-base md:text-lg',
                        variant === 'video'
                          ? 'text-white/80'
                          : 'text-gray-500 dark:text-gray-400'
                      )}>
                        {stat.label}
                      </div>
                    </div>
                  </SlideInRight>
                ))}
              </div>
            )}
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

// Feature Showcase Component
interface FeatureShowcaseProps {
  title: string;
  description?: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    image?: string;
    benefits?: string[];
  }>;
  layout?: 'grid' | 'alternating' | 'carousel';
  className?: string;
}

export function FeatureShowcase({
  title,
  description,
  features,
  layout = 'grid',
  className
}: FeatureShowcaseProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  if (layout === 'grid') {
    return (
      <section className={cn('py-20 px-6', className)}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInUp>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6">
                {title}
              </h2>
              {description && (
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              )}
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <SlideInRight key={index} delay={index * 0.1}>
                <HoverLift>
                  <Card className="p-8 h-full text-center group">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {feature.description}
                    </p>
                    {feature.benefits && (
                      <ul className="text-sm text-left space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </HoverLift>
              </SlideInRight>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn('py-20 px-6', className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInUp>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6">
              {title}
            </h2>
            {description && (
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {description}
              </p>
            )}
          </FadeInUp>
        </div>

        {/* Alternating Layout */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
                index % 2 === 1 && 'lg:grid-flow-col-dense'
              )}
            >
              <div className={cn(index % 2 === 1 && 'lg:col-start-2')}>
                <FadeInUp>
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400 mb-6">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  {feature.benefits && (
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </FadeInUp>
              </div>
              
              <div className={cn(index % 2 === 1 && 'lg:col-start-1')}>
                <SlideInRight delay={0.2}>
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/50 dark:to-accent-900/50 rounded-2xl flex items-center justify-center">
                    {feature.image ? (
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    ) : (
                      <div className="text-8xl text-primary-600 dark:text-primary-400 opacity-50">
                        {feature.icon}
                      </div>
                    )}
                  </div>
                </SlideInRight>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial Section Component
interface TestimonialSectionProps {
  title: string;
  description?: string;
  testimonials: Array<{
    id: string;
    content: string;
    author: {
      name: string;
      role: string;
      company?: string;
      avatar?: string;
    };
    rating?: number;
    featured?: boolean;
  }>;
  layout?: 'grid' | 'carousel' | 'masonry';
  className?: string;
}

export function TestimonialSection({
  title,
  description,
  testimonials,
  layout = 'grid',
  className
}: TestimonialSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (layout === 'carousel') {
    return (
      <section className={cn('py-20 px-6 bg-gray-50 dark:bg-gray-900', className)}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <FadeInUp>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6">
                {title}
              </h2>
              {description && (
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              )}
            </FadeInUp>
          </div>

          <div className="relative">
            <FadeInUp>
              <Card className="p-8 md:p-12 text-center">
                <Quote className="h-12 w-12 text-primary-600 dark:text-primary-400 mx-auto mb-6" />
                
                <blockquote className="text-xl md:text-2xl text-gray-900 dark:text-white font-medium leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {testimonials[currentIndex].rating && (
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'h-5 w-5',
                          i < testimonials[currentIndex].rating!
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300 dark:text-gray-600'
                        )}
                      />
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-center gap-4">
                  {testimonials[currentIndex].author.avatar && (
                    <img
                      src={testimonials[currentIndex].author.avatar}
                      alt={testimonials[currentIndex].author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].author.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonials[currentIndex].author.role}
                      {testimonials[currentIndex].author.company && (
                        <span> at {testimonials[currentIndex].author.company}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </FadeInUp>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-10 h-10 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-colors',
                    index === currentIndex
                      ? 'bg-primary-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn('py-20 px-6 bg-gray-50 dark:bg-gray-900', className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInUp>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6">
              {title}
            </h2>
            {description && (
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {description}
              </p>
            )}
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <SlideInRight key={testimonial.id} delay={index * 0.1}>
              <HoverLift>
                <Card className={cn(
                  'p-6 h-full',
                  testimonial.featured && 'ring-2 ring-primary-600 bg-primary-50 dark:bg-primary-900/20'
                )}>
                  {testimonial.rating && (
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            'h-4 w-4',
                            i < testimonial.rating!
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 dark:text-gray-600'
                          )}
                        />
                      ))}
                    </div>
                  )}

                  <blockquote className="text-gray-900 dark:text-white mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center gap-3 mt-auto">
                    {testimonial.author.avatar && (
                      <img
                        src={testimonial.author.avatar}
                        alt={testimonial.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {testimonial.author.name}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        {testimonial.author.role}
                        {testimonial.author.company && (
                          <span> at {testimonial.author.company}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </HoverLift>
            </SlideInRight>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section Component
interface PricingSectionProps {
  title: string;
  description?: string;
  plans: Array<{
    id: string;
    name: string;
    description: string;
    price: {
      amount: number;
      currency: string;
      period: string;
    };
    features: string[];
    highlighted?: boolean;
    badge?: string;
    cta: {
      text: string;
      href?: string;
      onClick?: () => void;
    };
  }>;
  billingToggle?: {
    monthly: string;
    yearly: string;
    discount?: string;
  };
  className?: string;
}

export function PricingSection({
  title,
  description,
  plans,
  billingToggle,
  className
}: PricingSectionProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className={cn('py-20 px-6', className)}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInUp>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 dark:text-white mb-6">
              {title}
            </h2>
            {description && (
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {description}
              </p>
            )}

            {billingToggle && (
              <div className="inline-flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <button
                  onClick={() => setIsYearly(false)}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                    !isYearly
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow'
                      : 'text-gray-600 dark:text-gray-300'
                  )}
                >
                  {billingToggle.monthly}
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-md transition-colors relative',
                    isYearly
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow'
                      : 'text-gray-600 dark:text-gray-300'
                  )}
                >
                  {billingToggle.yearly}
                  {billingToggle.discount && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      {billingToggle.discount}
                    </span>
                  )}
                </button>
              </div>
            )}
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <SlideInRight key={plan.id} delay={index * 0.1}>
              <HoverLift>
                <Card className={cn(
                  'p-8 h-full relative',
                  plan.highlighted && 'ring-2 ring-primary-600 bg-primary-50 dark:bg-primary-900/20'
                )}>
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {plan.price.currency}{plan.price.amount * (isYearly ? 10 : 1)}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">
                        /{plan.price.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.highlighted ? 'gradient' : 'outline'}
                    size="lg"
                    className="w-full"
                    onClick={plan.cta.onClick}
                  >
                    {plan.cta.text}
                  </Button>
                </Card>
              </HoverLift>
            </SlideInRight>
          ))}
        </div>
      </div>
    </section>
  );
}

// Call to Action Section Component
interface CallToActionProps {
  variant?: 'default' | 'gradient' | 'centered' | 'split';
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  backgroundPattern?: boolean;
  className?: string;
}

export function CallToAction({
  variant = 'default',
  title,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundPattern = false,
  className
}: CallToActionProps) {
  const variantStyles = {
    default: 'bg-gray-50 dark:bg-gray-900',
    gradient: 'bg-gradient-to-r from-primary-600 to-accent-600',
    centered: 'bg-white dark:bg-gray-800',
    split: 'bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/50 dark:to-accent-900/50'
  };

  const textStyles = {
    default: 'text-gray-900 dark:text-white',
    gradient: 'text-gray-900 dark:text-white',
    centered: 'text-gray-900 dark:text-white',
    split: 'text-gray-900 dark:text-white'
  };

  return (
    <section className={cn(
      'py-20 px-6 relative overflow-hidden',
      variantStyles[variant],
      className
    )}>
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 scale-150" />
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <FadeInUp>
          <h2 className={cn(
            'text-3xl md:text-5xl font-bold font-display mb-6',
            textStyles[variant]
          )}>
            {title}
          </h2>
          <p className={cn(
            'text-xl mb-10',
            variant === 'gradient'
              ? 'text-white/90'
              : 'text-gray-600 dark:text-gray-300'
          )}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HoverScale>
              <Button
                variant={variant === 'gradient' ? 'secondary' : 'gradient'}
                size="xl"
                onClick={primaryCTA.onClick}
                className="text-lg font-semibold"
              >
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </HoverScale>

            {secondaryCTA && (
              <HoverScale>
                <Button
                  variant={variant === 'gradient' ? 'ghost' : 'outline'}
                  size="xl"
                  onClick={secondaryCTA.onClick}
                  className={cn(
                    'text-lg font-semibold',
                    variant === 'gradient' && 'text-white border-white/30 hover:bg-white/10'
                  )}
                >
                  {secondaryCTA.text}
                </Button>
              </HoverScale>
            )}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// Stats Section Component
interface StatsSectionProps {
  title?: string;
  description?: string;
  stats: Array<{
    value: string;
    label: string;
    icon?: React.ReactNode;
    description?: string;
  }>;
  layout?: 'horizontal' | 'grid' | 'compact';
  variant?: 'default' | 'gradient' | 'minimal';
  className?: string;
}

export function StatsSection({
  title,
  description,
  stats,
  layout = 'horizontal',
  variant = 'default',
  className
}: StatsSectionProps) {
  const variantStyles = {
    default: 'bg-white dark:bg-gray-900',
    gradient: 'bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/50 dark:to-accent-900/50',
    minimal: 'bg-transparent'
  };

  const gridCols = {
    horizontal: stats.length <= 2 ? 'grid-cols-1 md:grid-cols-2' : stats.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-4',
    grid: 'grid-cols-2 md:grid-cols-4',
    compact: 'grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className={cn(
      'py-16',
      variantStyles[variant],
      className
    )}>
      <div className="max-w-7xl mx-auto px-6">
        {(title || description) && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeInUp>
              {title && (
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-4">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              )}
            </FadeInUp>
          </div>
        )}

        <div className={cn('grid gap-8', gridCols[layout])}>
          {stats.map((stat, index) => (
            <SlideInRight key={index} delay={index * 0.1}>
              <div className="text-center">
                {stat.icon && (
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400 mb-4">
                    {stat.icon}
                  </div>
                )}
                <div className="text-3xl md:text-4xl font-bold font-display text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </div>
                )}
              </div>
            </SlideInRight>
          ))}
        </div>
      </div>
    </section>
  );
}

// Logo Cloud Component
interface LogoCloudProps {
  title?: string;
  logos: Array<{
    name: string;
    src: string;
    href?: string;
  }>;
  variant?: 'default' | 'minimal' | 'badges';
  className?: string;
}

export function LogoCloud({
  title,
  logos,
  variant = 'default',
  className
}: LogoCloudProps) {
  return (
    <section className={cn('py-16 px-6', className)}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="text-center mb-12">
            <FadeInUp>
              <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                {title}
              </h3>
            </FadeInUp>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <SlideInRight key={logo.name} delay={index * 0.05}>
              <div className="flex items-center justify-center">
                {logo.href ? (
                  <a
                    href={logo.href}
                    className="block opacity-60 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-8 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                    />
                  </a>
                ) : (
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 md:h-12 object-contain opacity-60"
                  />
                )}
              </div>
            </SlideInRight>
          ))}
        </div>
      </div>
    </section>
  );
} 