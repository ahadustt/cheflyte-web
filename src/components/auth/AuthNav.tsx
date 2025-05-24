'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/authStore';
import { logOut } from '@/lib/firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function AuthNav() {
  const { user, userProfile, loading } = useAuthStore();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/');
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-3">
          <div className="w-20 h-10 bg-gray-100 rounded-lg animate-pulse"></div>
          <div className="w-20 h-10 bg-gray-100 rounded-lg animate-pulse"></div>
        </div>
        <div className="md:hidden">
          <div className="w-10 h-10 bg-gray-100 rounded-lg animate-pulse"></div>
        </div>
      </div>
    );
  }

  if (user && userProfile) {
    return (
      <div className="flex items-center gap-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-sm font-semibold">
              {userProfile.displayName?.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">
                {userProfile.displayName}
              </span>
              <span className="text-xs text-gray-600 capitalize">
                {userProfile.role}
              </span>
            </div>
          </div>
          <Link
            href={userProfile.role === 'cook' ? '/cook/dashboard' : '/user/dashboard'}
          >
            <Button 
              variant="ghost" 
              size="sm" 
              className="font-medium"
              leftIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              }
            >
              Dashboard
            </Button>
          </Link>
          <Button
            variant="outline" 
            size="sm"
            onClick={handleLogout}
            className="font-medium"
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
            }
          >
            Sign Out
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
          >
            {userProfile.displayName?.charAt(0).toUpperCase()}
          </button>
          
          {isMenuOpen && (
            <>
              <div 
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={() => setIsMenuOpen(false)}
              />
              <div className="absolute right-0 top-12 w-64 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50 animate-scale-in">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-sm font-semibold">
                    {userProfile.displayName?.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      {userProfile.displayName}
                    </span>
                    <span className="text-xs text-gray-600 capitalize">
                      {userProfile.role}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Link
                    href={userProfile.role === 'cook' ? '/cook/dashboard' : '/user/dashboard'}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    <span className="font-medium text-gray-900">Dashboard</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors text-left"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                    <span className="font-medium">Sign Out</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <Link href="/auth/signin">
          <Button variant="ghost" size="sm" className="font-medium">
            Sign In
          </Button>
        </Link>
        <Link href="/auth/signup">
          <Button size="sm" className="font-medium shadow-lg hover:shadow-xl transition-all duration-200">
            Sign Up
          </Button>
        </Link>
      </div>

      {/* Mobile Auth Menu */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-all duration-200 active:scale-95"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {isMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="absolute right-0 top-12 w-48 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 z-50 animate-scale-in">
              <div className="space-y-2">
                <Link
                  href="/auth/signin"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                  </svg>
                  <span className="font-medium text-gray-900">Sign In</span>
                </Link>
                <Link
                  href="/auth/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 w-full p-3 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-colors text-left"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                  </svg>
                  <span className="font-medium">Sign Up</span>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 