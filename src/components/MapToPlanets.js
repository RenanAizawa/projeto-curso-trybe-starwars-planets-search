import React, { useContext, useState, useEffect } from 'react';
import planetContext from '../context/planetContext';

function MapToPlanets() {
  const { result } = useContext(planetContext);
  const [planetsFilter, setPlanetsFilter] = useState([]);
  useEffect(() => {}, []);
  const [name, setName] = useState('');

  const planetToMap = () => (
    result.map((planet) => (
      <tr key={ planet.name }>
        <td>
          {planet.name}
        </td>
        <td>
          {planet.rotation_period}
        </td>
        <td>
          {planet.orbital_period}
        </td>
        <td>
          {planet.diameter}
        </td>
        <td>
          {planet.climate}
        </td>
        <td>
          {planet.gravity}
        </td>
        <td>
          {planet.terrain}
        </td>
        <td>
          {planet.surface_water}
        </td>
        <td>
          {planet.population}
        </td>
        <td>
          {planet.films}
        </td>
        <td>
          {planet.created}
        </td>
        <td>
          {planet.edited}
        </td>
        <td>
          {planet.url}
        </td>
      </tr>
    ))
  );
  return (
    <div>
      <header>
        <div>
          <div>
            <input
              type="text"
              name="name-filter"
              data-testid="name-filter"
              onChange={ (e) => setName(e.target.value) }
              value={ name }
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
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {result.length > 0 && planetToMap()}
        </tbody>
      </table>
    </div>
  );
}

export default MapToPlanets;
