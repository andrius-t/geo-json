import { FeatureList } from './fragments/FeatureList';
import { Map } from './fragments/Map';
import { Navbar } from './fragments/Navbar';
import { useDataStore } from './store/useDataStore';

function App() {
  const data = useDataStore((state) => state.data);
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-5 p-5 grid-rows-2 md:grid-rows-1">
        <div className="col-span-1 lg:col-span-2 w-full h-full bg-white rounded-lg overflow-y-auto shadow">
          <Map />
        </div>
        <div className="w-full h-full bg-white overflow-y-auto border border-gray-100 shadow rounded-lg p-2">
          <FeatureList data={data} path={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
