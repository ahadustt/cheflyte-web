'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/authStore';
import { logOut } from '@/lib/firebase/auth';
import { useRouter } from 'next/navigation';

export function AuthNav() {
  const { user, userProfile, loading } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-16 h-8 bg-brand-sage/20 rounded animate-pulse"></div>
        <div className="w-16 h-8 bg-brand-sage/20 rounded animate-pulse"></div>
      </div>
    );
  }

  if (user && userProfile) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-brand-sage">
          Welcome, {userProfile.displayName}
        </span>
        <Link
          href={userProfile.role === 'cook' ? '/cook/dashboard' : '/user/dashboard'}
          className="text-sm font-medium text-brand-mustard hover:underline"
        >
          Dashboard
        </Link>
        <Button
          variant="outline"
          size="sm"
          onClick={handleLogout}
          className="text-sm"
        >
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link href="/auth/signin">
        <Button variant="outline" size="sm">
          Sign In
        </Button>
      </Link>
      <Link href="/auth/signup">
        <Button size="sm">
          Sign Up
        </Button>
      </Link>
    </div>
  );
} 