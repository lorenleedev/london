import { create } from 'zustand'

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => set((state) => ({ user: {...state.user, ...user} })),
  resetUser: () => set({user: null})
}));

export default useUserStore;

export interface User {
  uid: string;
  email: string;
  user_name: string;
  profile_picture: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  resetUser: () => void;
}