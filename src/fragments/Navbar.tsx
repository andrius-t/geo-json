import { Button } from "../components/Button";
import { ArrowDownIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useRef } from "react";
import { useDataStore } from "../store/useDataStore";
import { nanoid } from "nanoid";

export function Navbar() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const fileName = useDataStore((state) => state.fileName);
  const data = useDataStore((state) => state.data);

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
      useDataStore.setState({ data: obj, fileName: file.name, id: nanoid() });
    };
    reader.readAsText(file);
  };

  const handleAddFile = () => {
    inputFileRef.current?.click();
  };

  const handleDownloadFile = () => {
    var fileToSave = new Blob([JSON.stringify(data)], {
      type: 'application/geo+json'
    });
    var downloadLink = document.createElement("a");
    var url = URL.createObjectURL(fileToSave);
    downloadLink.href = url;
    downloadLink.download = fileName || "data.geojson";
    downloadLink.click();
  };

  return (
    <div className="mx-auto w-full py-2 flex items-center justify-between shadow px-5 gap-2 flex-col md:flex-row">
      <div className="flex items-center">
        <input ref={inputFileRef} accept=".geojson" className="hidden" type="file" name="file" onChange={handleFileChange} />
        <div>
          <Button
            onClick={handleAddFile}
          >
            <PlusCircleIcon className="w-4 h-4 mr-1" />
          Load geoJSON
          </Button>
        </div>
        <span className="m-3">
          Loaded file: <b>{fileName}</b>
        </span>
      </div>
      <div className="flex">
        {data && (
          <Button
            onClick={handleDownloadFile}
          >
            <ArrowDownIcon className="w-4 h-4 mr-1" />
          Download
          </Button>
        )}
      </div>
    </div>
  );
}
