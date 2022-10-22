import { geoJSON } from "leaflet";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import data from "@/data/sample.json";

// @ts-ignore
const bounds = geoJSON(data).getBounds();
export function Map() {
  return (
    <div className="rounded-lg overflow-hidden">
      <MapContainer bounds={bounds} className="w-full aspect-square rounded-lg" zoom={13} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* @ts-ignore */}
        <GeoJSON data={data} />
      </MapContainer>
    </div>
  );
}