import { Circle, FeatureGroup as FG, geoJSON, Marker, Polygon, Polyline } from 'leaflet';
import { useEffect, useRef } from 'react';
import { FeatureGroup } from 'react-leaflet';
import { EditControl as EC } from 'react-leaflet-draw';
import { useDataStore } from '../store/useDataStore';

export default function EditControl() {
  const geojson = useDataStore((state) => state.data);
  const id = useDataStore((state) => state.id);
  const previousId = useRef<string>();
  const ref = useRef<FG>(null);

  useEffect(() => {
    if (previousId.current !== id && geojson) {
      previousId.current = id;
      ref.current?.clearLayers();
      geoJSON(geojson).eachLayer((layer) => {
        if (
          layer instanceof Polyline ||
          layer instanceof Polygon ||
          layer instanceof Marker
        ) {
          console.log(layer.feature);
          if (layer?.feature?.properties.radius && ref.current) {
            new Circle(layer.feature.geometry.coordinates.slice().reverse(), {
              radius: layer.feature?.properties.radius
            }).addTo(ref.current);
          } else {
            ref.current?.addLayer(layer);
          }
        }
      });
    }
  }, [geojson, id]);

  const handleChange = () => {
    const geo = ref.current?.toGeoJSON();
    if (geo?.type === 'FeatureCollection') {
      useDataStore.setState({ data: geo });
    }
  };

  return (
    <FeatureGroup ref={ref}>
      <EC
        position="topright"
        onEdited={handleChange}
        onCreated={handleChange}
        onDeleted={handleChange}
        draw={{
          rectangle: true,
          circle: true,
          polyline: true,
          polygon: true,
          marker: true,
          circlemarker: false
        }}
      />
    </FeatureGroup>
  );
}
