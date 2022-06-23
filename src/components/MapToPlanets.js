import React, { useContext, useEffect, useState } from 'react';
import planetContext from '../context/planetContext';

function MapToPlanets() {
  const [planets] = useContext(planetContext);
  console.log('componente', planets);
  const [planetsFilter, setPlanetsFilter] = useState([]);
  useEffect(() => {
    const espera = async () => {
      const resposta = await planets;
      return resposta;
    };
    setPlanetsFilter(espera());
    console.log(planetsFilter);
  }, [planets, planetsFilter]);
  return (
    <div>
      <header>
        <div>
          <div>
            <input
              type="text"
              name="name-filter"
              data-testid="name-filter"
              // onChange={ (e) => setNameSearch(e.target.value) }
              // value={ nameSearch }
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
            // planets
            // && planets.map((planet) => (
            //   <tr key={ planet.name }>
            //     <td>{planet.name}</td>
            //   </tr>
            // ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default MapToPlanets;
