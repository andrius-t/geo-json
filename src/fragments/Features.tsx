import { useDataStore } from "../store/useDataStore";
import { FeatureList } from "./FeatureList";

export function Features() {
  const data = useDataStore((state) => state.data);
  if (!data) {
    return null;
  }
  return (
    <div className="aspect-square overflow-y-auto border border-gray-100 shadow rounded-lg p-2">
      <FeatureList data={data} path={[]} />
    </div>
  );
}
