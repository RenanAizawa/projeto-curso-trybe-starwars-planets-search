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
      // console.log('provider', result);
      return (result);
    };
    setPlanets(data());
  }, []);

  const context = {
    planets,
  };
  console.log(context);
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
