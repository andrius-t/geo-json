import React from 'react';
import { Map } from './fragments/Map';
import { Features } from './fragments/Features';
import { Navbar } from './fragments/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-5 p-5">
        <Map />
        <Features />
      </div>
    </>
  );
}

export default App;
