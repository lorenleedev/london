import { create } from 'zustand'

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => set((state) => ({ user:
    state.user ? {...state.user, ...user} : user
  })),
  resetUser: () => set({user: null})
}));

export default useUserStore;

export interface User {
  uid: string;
  email: string | null;
  user_name: string | null;
  profile_picture: string | null;
  updated_at?: string;
  logged_out_at?: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  resetUser: () => void;
}