import { useEffect } from "react";
import { Map as LeafletMap } from "leaflet";
import { MapContainer, TileLayer } from 'react-leaflet';
import EditControl from './EditControl';
import { useDataStore } from '../store/useDataStore';
import { handleGoToBounds } from '../helpers/leafletHelpers';

export function Map() {
  const setMap = useDataStore((state) => state.setMap);
  const map = useDataStore((state) => state.map);
  const id = useDataStore((state) => state.id);

  const handleSetMap = (map: LeafletMap | null | undefined) => {
    if (!map) {
      return;
    }
    setMap(map);
  };

  useEffect(() => {
    handleGoToBounds();
  }, [id, map]);

  return (
    <div className="rounded-lg overflow-y-auto">
      <MapContainer
        ref={handleSetMap}
        center={[40.776787, -73.968467]}
        zoom={14}
        className="w-full aspect-square rounded-lg"
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <EditControl />
      </MapContainer>
    </div>
  );
}
