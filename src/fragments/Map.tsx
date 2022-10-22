import { geoJSON, LatLngTuple, Map as LeafletMap } from "leaflet";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useDataStore } from "../store/useDataStore";
import { useEffect } from "react";
import { Button } from "../components/Button";

const center: LatLngTuple = [51.505, -0.09];

export function Map() {
  const data = useDataStore((state) => state.data);
  const setMap = useDataStore((state) => state.setMap);
  const map = useDataStore((state) => state.map);

  useEffect(() => {
    if (!data) {
      return;
    }
    setTimeout(() => {
      handleGoToBounds(data);
    }, 1000);
  }, [data, map]);

  const handleGoToBounds = (data: any) => {
    if (!map || !data) {
      return;
    }
    const newBounds = geoJSON(data).getBounds();
    map.fitBounds(newBounds);
  };

  const handleSetMap = (map: LeafletMap | null | undefined) => {
    if (!map) {
      return;
    }
    setMap(map);
  };
  return (
    <div>
      <Button
        onClick={() => handleGoToBounds(data)}
        className="mb-2"
      >
        Go to bounds
      </Button>
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
          { data && <GeoJSON data={data} /> }x
        </MapContainer>
      </div>
    </div>
  );
}