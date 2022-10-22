import React from 'react';
import { Map } from './components/Map';

function App() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden gap-5 p-5">
        <Map />
    </div>
  );
}

export default App;
