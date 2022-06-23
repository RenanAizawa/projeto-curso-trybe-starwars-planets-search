import React, { useContext, useEffect, useState } from 'react';
import planetContext from '../context/planetContext';

function MapToPlanets() {
  const { planets } = useContext(planetContext);
  const [nameSearch, setNameSearch] = useState({ filterByName: { name: '' } });
  const [planetsFilter, setPlanetsFilter] = useState([]);
  useEffect(() => {
    if (planets.length) {
      const filterName = planets.filter((planet) => (
        planet.name.toLowerCase().includes(nameSearch.filterByName.name)
      ));
      setPlanetsFilter(filterName);
    }
  }, [planets, nameSearch]);

  return (
    <div>
      <header>
        <div>
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
            <div>primeiro forms</div>
            <div>segundo forms</div>
          </div>
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
