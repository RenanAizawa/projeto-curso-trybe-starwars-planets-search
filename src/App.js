import React from 'react';
import Header from './components/Header';
import MapToPlanets from './components/MapToPlanets';
import ProviderPlanets from './context/ProviderPlanets';

function App() {
  return (
    <ProviderPlanets>
      <Header />
      <MapToPlanets />
    </ProviderPlanets>
  );
}

export default App;
