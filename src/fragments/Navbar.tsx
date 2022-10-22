import { Button } from "../components/Button";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  return (
    <>
      <div className="mx-auto w-full py-2 flex items-center justify-center shadow">
        <Button>
          <PlusCircleIcon className="w-6 h-6 mr-1" />
          Add GEOJSON file
        </Button>
      </div>
    </>
  );
}
