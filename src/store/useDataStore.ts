import create from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  data: any,
}

export const useDataStore = create<AuthState>()(
  persist(
    (set) => ({
      data: null
    }),
    {
      name: 'data-storage'
    }
  )
);

