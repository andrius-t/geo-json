import { geoJSON } from "leaflet";
import { useDataStore } from "../store/useDataStore";

export function handleGoToBounds() {
  const { map, data } = useDataStore.getState();
  if (! map || !data) {
    return;
  }
  map.fitBounds(geoJSON(data).getBounds());
};

export function handleGoToBoundsWithData(data: any) {
  const { map } = useDataStore.getState();
  if (! map || !data) {
    return;
  }
  map.fitBounds(geoJSON(data).getBounds());
};
