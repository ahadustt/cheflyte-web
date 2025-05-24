'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SignUpForm } from '@/components/auth/SignUpForm';

function SignUpContent() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role') as 'user' | 'cook' | null;

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <SignUpForm defaultRole={role || 'user'} />
    </div>
  );
}

export default function SignUpPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-brand-sage/20 rounded"></div>
            <div className="h-4 bg-brand-sage/20 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-10 bg-brand-sage/20 rounded"></div>
              <div className="h-10 bg-brand-sage/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    }>
      <SignUpContent />
    </Suspense>
  );
} 