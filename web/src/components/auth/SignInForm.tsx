'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { signIn, signInWithGoogle } from '@/lib/firebase/auth';
import { useAuthStore } from '@/stores/authStore';

interface SignInFormProps {
  defaultRole?: 'user' | 'cook';
}

export function SignInForm({ defaultRole = 'user' }: SignInFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'user' | 'cook'>(defaultRole);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { setUser, setUserProfile } = useAuthStore();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const user = await signIn(email, password);
      setUser(user);
      router.push(role === 'cook' ? '/cook/dashboard' : '/user/dashboard');
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');

    try {
      const userProfile = await signInWithGoogle(role);
      setUserProfile(userProfile);
      router.push(role === 'cook' ? '/cook/dashboard' : '/user/dashboard');
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto p-6">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-dark">Sign In</h1>
          <p className="text-brand-sage mt-2">Welcome back to Cheflyte</p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              I am a:
            </label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={role === 'user' ? 'default' : 'outline'}
                onClick={() => setRole('user')}
                className="flex-1"
              >
                User
              </Button>
              <Button
                type="button"
                variant={role === 'cook' ? 'default' : 'outline'}
                onClick={() => setRole('cook')}
                className="flex-1"
              >
                Cook
              </Button>
            </div>
          </div>

          <form onSubmit={handleEmailSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-brand-dark mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-brand-sage" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-brand-cream px-2 text-brand-sage">Or continue with</span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Signing in...' : 'Continue with Google'}
          </Button>
        </div>

        <div className="text-center text-sm">
          <span className="text-brand-sage">Don&apos;t have an account? </span>
          <a href="/auth/signup" className="text-brand-mustard hover:underline font-medium">
            Sign up
          </a>
        </div>
      </div>
    </Card>
  );
} 