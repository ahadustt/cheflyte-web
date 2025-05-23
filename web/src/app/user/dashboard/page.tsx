'use client';

import { useAuthStore } from '@/stores/authStore';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function UserDashboard() {
  const { userProfile, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-brand-sage/20 rounded animate-pulse"></div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-32 bg-brand-sage/20 rounded animate-pulse"></div>
          <div className="h-32 bg-brand-sage/20 rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-brand-dark mb-4">Access Denied</h1>
        <p className="text-brand-sage mb-6">Please sign in to access your dashboard.</p>
        <Button onClick={() => window.location.href = '/auth/signin'}>
          Sign In
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-brand-dark mb-2">
          Welcome back, {userProfile.displayName}!
        </h1>
        <p className="text-brand-sage">
          Ready to discover your next delicious meal experience?
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-3">
            🤖 AI Meal Planning
          </h3>
          <p className="text-brand-sage mb-4">
            Get personalized meal recommendations based on your preferences.
          </p>
          <Button className="w-full">
            Generate Meal Plan
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-3">
            👨‍🍳 Find Cooks
          </h3>
          <p className="text-brand-sage mb-4">
            Browse and book talented local cooks in your area.
          </p>
          <Button variant="outline" className="w-full">
            Browse Cooks
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-3">
            📅 My Bookings
          </h3>
          <p className="text-brand-sage mb-4">
            View and manage your upcoming cooking sessions.
          </p>
          <Button variant="outline" className="w-full">
            View Bookings
          </Button>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold text-brand-dark mb-4">
          Recent Activity
        </h3>
        <div className="space-y-3 text-brand-sage">
          <p>🎉 Welcome to Cheflyte! Complete your profile to get started.</p>
          <p>📝 Set up your dietary preferences for better meal recommendations.</p>
          <p>🔍 Explore cooks in your area and book your first session.</p>
        </div>
      </Card>
    </div>
  );
} 