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
  DollarSign, 
  Clock, 
  Users,
  TrendingUp,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Settings,
  Camera
} from 'lucide-react';

export default function CookDashboard() {
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

  if (!userProfile || userProfile.role !== 'cook') {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Access Denied</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">This area is for registered chefs only.</p>
        <Button onClick={() => window.location.href = '/auth/signup?role=cook'} variant="gradient">
          Sign Up as Chef
        </Button>
      </div>
    );
  }

  // Sample metrics data for the cook/chef
  const cookMetrics = [
    {
      title: "Active Bookings",
      value: "12",
      change: { value: 3, isPositive: true, period: "this month" },
      icon: <Calendar size={20} />,
      variant: "primary" as const
    },
    {
      title: "Monthly Earnings",
      value: "$4,280",
      change: { value: 18.5, isPositive: true, period: "vs last month" },
      icon: <DollarSign size={20} />,
      variant: "success" as const
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: { value: 0.1, isPositive: true, period: "last 30 days" },
      icon: <Star size={20} />,
      variant: "warning" as const
    },
    {
      title: "Completed Sessions",
      value: "147",
      change: { value: 15, isPositive: true, period: "all time" },
      icon: <ChefHat size={20} />,
      variant: "default" as const
    }
  ];

  // Sample activity data for cook
  const recentActivity = [
    {
      id: "1",
      user: "Sarah Chen",
      action: "booked you for",
      target: "Italian dinner party (4 guests)",
      timestamp: "1 hour ago",
      type: "booking" as const
    },
    {
      id: "2",
      user: "You",
      action: "completed cooking session for",
      target: "Michael's anniversary dinner",
      timestamp: "2 days ago",
      type: "chef" as const
    },
    {
      id: "3",
      user: "Jennifer Wu",
      action: "left you a 5-star review",
      target: "Asian fusion experience was amazing!",
      timestamp: "3 days ago",
      type: "review" as const
    },
    {
      id: "4",
      user: "System",
      action: "processed payment for",
      target: "French cooking class - $280",
      timestamp: "1 week ago",
      type: "payment" as const
    },
    {
      id: "5",
      user: "David Martinez",
      action: "sent you a message about",
      target: "Special dietary requirements",
      timestamp: "1 week ago",
      type: "system" as const
    }
  ];

  // Quick stats for cook dashboard
  const quickStats = [
    { label: "New Requests", value: "7", icon: <MessageSquare size={20} />, color: "primary" as const },
    { label: "This Week", value: "5", icon: <Calendar size={20} />, color: "success" as const },
    { label: "Pending Reviews", value: "3", icon: <Star size={20} />, color: "warning" as const },
    { label: "Profile Views", value: "124", icon: <Users size={20} />, color: "primary" as const }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Professional Dashboard Header */}
      <DashboardHeader
        title={`Chef Dashboard - ${userProfile.displayName}`}
        description="Manage your culinary services and connect with food enthusiasts"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Chef Dashboard" }
        ]}
        actions={
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="gradient" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              View Calendar
            </Button>
          </div>
        }
      />

      {/* Key Metrics */}
      <DashboardGrid columns={4} gap="md">
        {cookMetrics.map((metric, index) => (
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

        {/* Quick Stats & Actions */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Quick Overview</h3>
            <QuickStats stats={quickStats} />
          </div>

          {/* Action Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
            <div className="space-y-4">
              {/* Job Requests */}
              <div className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg border border-primary-200 dark:border-primary-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Job Requests</h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400">7 new requests</p>
                    </div>
                  </div>
                  <AlertCircle className="h-5 w-5 text-primary-600" />
                </div>
                <Button variant="primary" size="sm" className="w-full">
                  View All Requests
                </Button>
              </div>

              {/* Schedule Management */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Schedule</h4>
                      <p className="text-sm text-green-600 dark:text-green-400">5 sessions this week</p>
                    </div>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <Button variant="success" size="sm" className="w-full">
                  Manage Availability
                </Button>
              </div>

              {/* Earnings */}
              <div className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg border border-amber-200 dark:border-amber-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Earnings</h4>
                      <p className="text-sm text-amber-600 dark:text-amber-400">$4,280 this month</p>
                    </div>
                  </div>
                  <TrendingUp className="h-5 w-5 text-amber-600" />
                </div>
                <Button variant="outline" size="sm" className="w-full border-amber-300 text-amber-700 hover:bg-amber-50 dark:border-amber-600 dark:text-amber-400 dark:hover:bg-amber-900/20">
                  View Earnings Report
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Progress */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Profile Completion
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Basic information
                </span>
                <span className="text-green-600 font-medium">Complete</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Specialties & cuisine
                </span>
                <span className="text-green-600 font-medium">Complete</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Clock className="h-4 w-4 text-amber-500" />
                  Portfolio photos
                </span>
                <span className="text-amber-600 font-medium">In Progress</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Camera className="h-4 w-4 text-gray-400" />
                  Service areas & rates
                </span>
                <span className="text-gray-500 font-medium">Pending</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-300">Overall Progress</span>
                <span className="text-gray-900 dark:text-white font-medium">75%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </DashboardGrid>
    </div>
  );
} 