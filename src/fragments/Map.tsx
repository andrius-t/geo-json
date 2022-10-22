import { LatLngTuple, Map as LeafletMap } from "leaflet";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useDataStore } from "../store/useDataStore";
import { useEffect } from "react";
import { handleGoToBounds } from "../helpers/leafletHelpers";

const center: LatLngTuple = [51.505, -0.09];

export function Map() {
  const data = useDataStore((state) => state.data);
  const setMap = useDataStore((state) => state.setMap);
  const map = useDataStore((state) => state.map);
  const id = useDataStore((state) => state.id);

  useEffect(() => {
    handleGoToBounds();
  }, [data, map]);

  const handleSetMap = (map: LeafletMap | null | undefined) => {
    if (!map) {
      return;
    }
    setMap(map);
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        ref={handleSetMap}
        className="w-full aspect-square rounded-lg"
        zoom={13}
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { data && <GeoJSON key={id} data={data} /> }x
      </MapContainer>
    </div>
  );
}