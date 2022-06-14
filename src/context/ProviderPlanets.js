import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import planetContext from './planetContext';

function ProviderPlanets({ children }) {
  const [planets, setPlanets] = useState({});
  useEffect(() => {
    const data = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planet = await response.json();
      const result = await planet.results;
      setPlanets(result);
    };
    data();
  }, []);

  const context = {
    result: planets,
    setPlanets,
  };

  return (
    <planetContext.Provider value={ context }>
      {children}
    </planetContext.Provider>
  );
}

ProviderPlanets.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default ProviderPlanets;
