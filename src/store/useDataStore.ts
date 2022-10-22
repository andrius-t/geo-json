import { Map } from 'leaflet';
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  data: any,
  map?: Map
  setMap: (map: Map) => void
}

export const useDataStore = create<AuthState>()(
  persist(
    (set) => ({
      data: null,
      setMap: (map: Map) => set({ map })
    }),
    {
      name: 'data-storage',
      partialize: (state) => ({ data: state.data })
    }
  )
);

