import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  userRole: 'founder' | 'freelancer' | null;
  login: (role: 'founder' | 'freelancer') => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  isAuthenticated: false,
  userRole: null,
  login: (role) => set({ isAuthenticated: true, userRole: role }),
  logout: () => set({ isAuthenticated: false, userRole: null }),
}));
