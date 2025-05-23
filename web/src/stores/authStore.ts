import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from 'firebase/auth';
import { UserProfile } from '@/lib/firebase/auth';

interface AuthState {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setUserProfile: (profile: UserProfile | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      userProfile: null,
      loading: true,
      setUser: (user) => set({ user }),
      setUserProfile: (userProfile) => set({ userProfile }),
      setLoading: (loading) => set({ loading }),
      logout: () => set({ user: null, userProfile: null, loading: false }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        userProfile: state.userProfile 
      }),
    }
  )
); 