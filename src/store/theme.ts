import { create } from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

const getInitialTheme = (): 'light' | 'dark' => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('cheflyte-theme');
    if (stored === 'dark' || stored === 'light') return stored;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  }
  return 'light';
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: typeof window === 'undefined' ? 'light' : getInitialTheme(),
  toggleTheme: () => {
    const next = get().theme === 'light' ? 'dark' : 'light';
    set({ theme: next });
    if (typeof window !== 'undefined') localStorage.setItem('cheflyte-theme', next);
  },
  setTheme: (theme) => {
    set({ theme });
    if (typeof window !== 'undefined') localStorage.setItem('cheflyte-theme', theme);
  },
})); 