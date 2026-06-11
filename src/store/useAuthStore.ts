import { create } from 'zustand';
import { storage, KEYS } from '@/utils/storage';
import { authService } from '@/services/authService';
import type { User } from '@/types';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isOnboarded: boolean;
  isLoading: boolean;
  error: string | null;
  hydrate: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setOnboarded: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  user: null,
  isAuthenticated: false,
  isOnboarded: false,
  isLoading: false,
  error: null,

  hydrate: async () => {
    const [user, token, onboarded] = await Promise.all([
      storage.get<User>(KEYS.USER),
      storage.get<string>(KEYS.ACCESS_TOKEN),
      storage.get<boolean>(KEYS.ONBOARDED),
    ]);
    set({ user, isAuthenticated: !!token, isOnboarded: !!onboarded });
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const { tokens, user } = await authService.login({ email, password });
      await Promise.all([
        storage.set(KEYS.ACCESS_TOKEN, tokens.accessToken),
        storage.set(KEYS.REFRESH_TOKEN, tokens.refreshToken),
        storage.set(KEYS.USER, user),
      ]);
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (e: any) {
      set({ error: e?.response?.data?.message ?? 'Connexion échouée', isLoading: false });
    }
  },

  register: async (name, email, password) => {
    set({ isLoading: true, error: null });
    try {
      const { tokens, user } = await authService.register({ name, email, password });
      await Promise.all([
        storage.set(KEYS.ACCESS_TOKEN, tokens.accessToken),
        storage.set(KEYS.REFRESH_TOKEN, tokens.refreshToken),
        storage.set(KEYS.USER, user),
      ]);
      set({ user, isAuthenticated: true, isLoading: false });
    } catch (e: any) {
      set({ error: e?.response?.data?.message ?? 'Inscription échouée', isLoading: false });
    }
  },

  logout: async () => {
    await authService.logout().catch(() => {});
    await storage.clear();
    set({ user: null, isAuthenticated: false });
  },

  setOnboarded: async () => {
    await storage.set(KEYS.ONBOARDED, true);
    set({ isOnboarded: true });
  },

  clearError: () => set({ error: null }),
}));
