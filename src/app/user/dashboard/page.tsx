'use client';

import { useAuthStore } from '@/stores/authStore';
import { Button } from '@/components/ui/button';
import { 
  DashboardHeader, 
  MetricCard, 
  ActivityFeed, 
  QuickStats, 
  DashboardGrid 
} from '@/components/ui/dashboard';
import { 
  Calendar, 
  ChefHat, 
  Star, 
  TrendingUp, 
  Clock, 
  Heart,
  Search,
  BookOpen,
  Settings
} from 'lucide-react';

export default function UserDashboard() {
  const { userProfile, loading } = useAuthStore();

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (!userProfile) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Access Denied</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Please sign in to access your dashboard.</p>
        <Button onClick={() => window.location.href = '/auth/signin'} variant="gradient">
          Sign In
        </Button>
      </div>
    );
  }

  // Sample metrics data for the user
  const userMetrics = [
    {
      title: "Active Bookings",
      value: "3",
      change: { value: 2, isPositive: true, period: "this month" },
      icon: <Calendar size={20} />,
      variant: "primary" as const
    },
    {
      title: "Favorite Chefs",
      value: "12",
      change: { value: 4, isPositive: true, period: "this month" },
      icon: <Heart size={20} />,
      variant: "success" as const
    },
    {
      title: "Completed Sessions",
      value: "28",
      change: { value: 8, isPositive: true, period: "all time" },
      icon: <ChefHat size={20} />,
      variant: "default" as const
    },
    {
      title: "Average Rating",
      value: "4.9",
      change: { value: 0.2, isPositive: true, period: "last 6 months" },
      icon: <Star size={20} />,
      variant: "warning" as const
    }
  ];

  // Sample activity data
  const recentActivity = [
    {
      id: "1",
      user: "You",
      action: "booked Chef Maria for",
      target: "Italian dinner party",
      timestamp: "2 hours ago",
      type: "booking" as const
    },
    {
      id: "2",
      user: "Chef David",
      action: "confirmed your booking for",
      target: "French cooking class",
      timestamp: "1 day ago",
      type: "chef" as const
    },
    {
      id: "3",
      user: "You",
      action: "left a 5-star review for",
      target: "Chef Ahmed's Mediterranean experience",
      timestamp: "3 days ago",
      type: "review" as const
    },
    {
      id: "4",
      user: "System",
      action: "sent you meal plan recommendations",
      timestamp: "1 week ago",
      type: "system" as const
    }
  ];

  // Quick stats for action items
  const quickStats = [
    { label: "New Messages", value: "5", icon: <Search size={20} />, color: "primary" as const },
    { label: "Pending Reviews", value: "2", icon: <Star size={20} />, color: "warning" as const },
    { label: "Meal Plans", value: "8", icon: <BookOpen size={20} />, color: "success" as const },
    { label: "Profile Progress", value: "85%", icon: <Settings size={20} />, color: "primary" as const }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Professional Dashboard Header */}
      <DashboardHeader
        title={`Welcome back, ${userProfile.displayName}!`}
        description="Discover your next delicious meal experience with world-class chefs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Dashboard" }
        ]}
        actions={
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Find Chefs
            </Button>
            <Button variant="gradient" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Book Now
            </Button>
          </div>
        }
      />

      {/* Key Metrics */}
      <DashboardGrid columns={4} gap="md">
        {userMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </DashboardGrid>

      {/* Main Dashboard Content */}
      <DashboardGrid columns={2} gap="lg">
        {/* Recent Activity */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
          <ActivityFeed 
            items={recentActivity}
            className="lg:col-span-1"
          />
        </div>

        {/* Quick Actions & Stats */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">At a Glance</h3>
            <QuickStats 
              stats={quickStats}
            />
          </div>

          {/* Action Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg border border-primary-200 dark:border-primary-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                    <ChefHat className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Find Chefs</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Browse talented local chefs and book your next culinary experience
                </p>
                <Button variant="primary" size="sm" className="w-full">
                  Browse Chefs
                </Button>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">AI Meal Plans</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Get personalized meal recommendations powered by AI
                </p>
                <Button variant="success" size="sm" className="w-full">
                  Generate Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DashboardGrid>
    </div>
  );
} 