import React from 'react';
import Map from './components/Map';
import MarkersProvider from './contexts/markers/Provider';

function App() {
  return (
    <MarkersProvider>
      <Map />
    </MarkersProvider>
  );
}

export default App;
