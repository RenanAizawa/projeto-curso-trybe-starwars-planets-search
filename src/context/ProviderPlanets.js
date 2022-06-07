import PropTypes from 'prop-types';
import React from 'react';
import data from '../dataApi';
import planetContext from './planetContext';

function ProviderPlanets({ children }) {
  const context = data();

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
