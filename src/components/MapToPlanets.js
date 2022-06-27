import React, { useContext, useEffect, useState } from 'react';
import planetContext from '../context/planetContext';

function MapToPlanets() {
  const { planets, espec, equal } = useContext(planetContext);
  const [nameSearch, setNameSearch] = useState({ filterByName: { name: '' } });
  const [planetsFilter, setPlanetsFilter] = useState([]);
  const [filterEspec, setFilterEspec] = useState([]);
  const [numericFilter, setNumericFilter] = useState({
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    if (planets.length) {
      const filterName = planets.filter((planet) => (
        planet.name.toLowerCase().includes(nameSearch.filterByName.name)
      ));
      setPlanetsFilter(filterName);
    }
    if (espec.length) {
      setFilterEspec(espec);
    }
  }, [planets, nameSearch, espec]);
  const columnFilter = () => (
    <select data-testid="column-filter">
      {filterEspec.map((op) => (
        <option
          key={ op }
          value={ op }
          name="column"
        >
          {op}
        </option>
      ))}
    </select>
  );

  const comparisonFilter = () => (
    <select data-testid="comparison-filter">
      {
        equal
        && equal.map((op) => (
          <option
            key={ op }
            value={ op }
            name="comparison"
          >
            {op}
          </option>
        ))
      }
    </select>
  );

  const valueFilter = () => (
    <input
      type="number"
      data-testid="value-filter"
      placeholder="0"
      name="value"
    />
  );

  const buttonFilter = () => (
    <button type="button" data-testid="button-filter">
      Number Filter
    </button>
  );

  return (
    <div>
      <header>
        <div>
          <input
            type="text"
            name="name-filter"
            data-testid="name-filter"
            placeholder="planet search"
            onChange={ ({ target }) => setNameSearch({
              filterByName: { name: target.value } }) }
            value={ nameSearch.filterByName.name }
          />
        </div>
        <div>
          <div>
            <form>
              {columnFilter()}
              {comparisonFilter()}
              {valueFilter()}
              {buttonFilter()}
            </form>
          </div>
          <div>segundo forms</div>
        </div>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>
              Rotation
              {' '}
              Period
            </th>
            <th>
              Orbital
              {' '}
              Period
            </th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>
              Surface
              {' '}
              Water
            </th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            planetsFilter
            && planetsFilter.map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default MapToPlanets;
