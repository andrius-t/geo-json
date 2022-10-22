import { Button } from "@/components/Button";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useRef } from "react";
import { useDataStore } from "@/store/useDataStore";

export function Navbar() {
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev: ProgressEvent<FileReader>) => {
      const result = ev.target?.result;
      if (!result || typeof result !== "string") {
        return;
      };
      var obj = JSON.parse(result);
      useDataStore.setState({ data: obj });
    };
    reader.readAsText(file);
  };

  const handleButtonClick = () => {
    inputFileRef.current?.click();
  };

  return (
    <>
      <div className="mx-auto w-full py-2 flex items-center justify-center shadow">
        <input ref={inputFileRef} accept=".geojson" className="hidden" type="file" name="file" onChange={handleFileChange} />
        <Button
          onClick={handleButtonClick}
        >
          <PlusCircleIcon className="w-6 h-6 mr-1" />
          Load geoJSON file
        </Button>
      </div>
    </>
  );
}
