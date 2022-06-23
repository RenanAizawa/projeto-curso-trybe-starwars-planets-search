import React from 'react';
import MapToPlanets from './components/MapToPlanets';
import ProviderPlanets from './context/ProviderPlanets';

function App() {
  return (
    <ProviderPlanets>
      <h1>App ta funciondo</h1>
      <MapToPlanets />
    </ProviderPlanets>
  );
}

export default App;
