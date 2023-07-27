import { create } from 'zustand';

type AuthState = {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
};

export const useAuth = create<AuthState>((set) => ({
  isSignedIn: false,
  signIn: () => set({ isSignedIn: true }),
  signOut: () => set({ isSignedIn: false }),
}));
