'use client';

import { useAuthStore } from '@/stores/authStore';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CookDashboard() {
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

  if (!userProfile || userProfile.role !== 'cook') {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-brand-dark mb-4">Access Denied</h1>
        <p className="text-brand-sage mb-6">This area is for registered cooks only.</p>
        <Button onClick={() => window.location.href = '/auth/signup?role=cook'}>
          Sign Up as Cook
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-brand-dark mb-2">
          Cook Dashboard - {userProfile.displayName}
        </h1>
        <p className="text-brand-sage">
          Manage your cooking services and connect with food lovers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-3">
            📋 Job Requests
          </h3>
          <p className="text-brand-sage mb-4">
            View and manage incoming cooking requests from clients.
          </p>
          <Button className="w-full">
            View Requests
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-3">
            📅 My Schedule
          </h3>
          <p className="text-brand-sage mb-4">
            Manage your availability and upcoming cooking sessions.
          </p>
          <Button variant="outline" className="w-full">
            Manage Schedule
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-3">
            💰 Earnings
          </h3>
          <p className="text-brand-sage mb-4">
            Track your earnings and payout information.
          </p>
          <Button variant="outline" className="w-full">
            View Earnings
          </Button>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-4">
            Profile Completion
          </h3>
          <div className="space-y-3 text-brand-sage">
            <p>✅ Basic information completed</p>
            <p>🔄 Add your specialties and cuisine types</p>
            <p>🔄 Upload portfolio photos</p>
            <p>🔄 Set your service areas and rates</p>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold text-brand-dark mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3 text-brand-sage">
            <p>🎉 Welcome to Cheflyte as a cook!</p>
            <p>📝 Complete your profile to start receiving bookings.</p>
            <p>⭐ Build your reputation with great cooking experiences.</p>
          </div>
        </Card>
      </div>
    </div>
  );
} 