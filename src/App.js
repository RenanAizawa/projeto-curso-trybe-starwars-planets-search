import React from 'react';
import MapToPlanets from './components/MapToPlanets';
import ProviderPlanets from './context/ProviderPlanets';

function App() {
  return (
    <ProviderPlanets>
      <MapToPlanets />
    </ProviderPlanets>
  );
}

export default App;
