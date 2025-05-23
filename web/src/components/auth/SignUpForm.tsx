'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { signUp, signInWithGoogle } from '@/lib/firebase/auth';
import { useAuthStore } from '@/stores/authStore';

interface SignUpFormProps {
  defaultRole?: 'user' | 'cook';
}

export function SignUpForm({ defaultRole = 'user' }: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [role, setRole] = useState<'user' | 'cook'>(defaultRole);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { setUserProfile } = useAuthStore();

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      const userProfile = await signUp(email, password, displayName, role);
      setUserProfile(userProfile);
      router.push(role === 'cook' ? '/cook/dashboard' : '/user/dashboard');
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError('');

    try {
      const userProfile = await signInWithGoogle(role);
      setUserProfile(userProfile);
      router.push(role === 'cook' ? '/cook/dashboard' : '/user/dashboard');
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Failed to sign up with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto p-6">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-dark">Create Account</h1>
          <p className="text-brand-sage mt-2">Join the Cheflyte community</p>
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

          <form onSubmit={handleEmailSignUp} className="space-y-4">
            <div>
              <label htmlFor="displayName" className="block text-sm font-medium text-brand-dark mb-2">
                Full Name
              </label>
              <Input
                id="displayName"
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
                disabled={loading}
              />
            </div>

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
                minLength={6}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-brand-dark mb-2">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
                minLength={6}
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Creating account...' : 'Create Account'}
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
            onClick={handleGoogleSignUp}
            disabled={loading}
            className="w-full"
          >
            {loading ? 'Creating account...' : 'Continue with Google'}
          </Button>
        </div>

        <div className="text-center text-sm">
          <span className="text-brand-sage">Already have an account? </span>
          <a href="/auth/signin" className="text-brand-mustard hover:underline font-medium">
            Sign in
          </a>
        </div>
      </div>
    </Card>
  );
} 