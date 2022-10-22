import { GeoJsonObject } from 'geojson';
import { Map } from 'leaflet';
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  id?: string;
  fileName?: string;
  data?: GeoJsonObject,
  map?: Map
  setMap: (map: Map) => void
}

export const useDataStore = create<AuthState>()(
  persist(
    (set) => ({
      setMap: (map: Map) => set({ map })
    }),
    {
      name: 'data-storage',
      partialize: (state) => ({ data: state.data, id: state.id, fileName: state.fileName })
    }
  )
);

