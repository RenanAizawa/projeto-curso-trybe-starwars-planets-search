import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import planetContext from './planetContext';

function ProviderPlanets({ children }) {
  const [planets, setPlanets] = useState({});
  const [espec, setEspec] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [equal, setEqual] = useState(['maior que', 'menor que', 'igual a']);

  useEffect(() => {
    const data = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planet = await response.json();
      const result = planet.results;
      setPlanets(result);
    };
    data();
  }, []);

  const context = {
    planets,
    espec,
    setEspec,
    equal,
    setEqual,
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
