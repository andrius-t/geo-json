import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { nanoid } from "nanoid";
import { RoundButton } from "../components/RoundButton";
import { handleGoToBoundsWithData } from "../helpers/leafletHelpers";

export function FeatureList({ data, path }: { data: any, path: (string|number)[] }) {
  if (Array.isArray(data)) {
    return (
      <div className="ml-2">{data.map((item, index) => {
        return (
          <div key={nanoid()}>
            <FeatureList data={item} path={[...path, index]} />
          </div>
        );
      })}
      </div>
    );
  }
  if (typeof data === "object" && (data.type === "FeatureCollection" || data.type === "Feature")) {
    return (
      <div className="ml-2">
        <div className="bg-slate-200 py-1 px-2 rounded flex justify-between items-center mt-2">
          <b>{data.type}</b>
          <span className="text-xs">./{path.join("/")}</span>
          <div>
            <RoundButton
              onClick={() => handleGoToBoundsWithData(data)}
              className="m-2"
              buttonColor="blue"
            >
              <ArrowLeftIcon className="h-4 w-4" />
            </RoundButton>
          </div>
        </div>
        {Object.entries(data).map(([key, value]) => (<FeatureList key={nanoid()} data={value} path={[...path, key]}  />))}
      </div>
    );
  }
  if (typeof data === "object") {
    return (
      <>
        {Object.keys(data).map((key) => <FeatureList key={nanoid()} data={data[key]} path={[...path, key]} />)}
      </>
    );
  }
  return null;
}
