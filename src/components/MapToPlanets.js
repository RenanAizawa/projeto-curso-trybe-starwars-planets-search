import React, { useContext, useEffect, useState } from 'react';
import planetContext from '../context/planetContext';

function MapToPlanets() {
  const { planets, espec, equal } = useContext(planetContext);
  const [nameSearch, setNameSearch] = useState({ filterByName: { name: '' } });
  const [planetsFilter, setPlanetsFilter] = useState([]);
  const [filterEspec, setFilterEspec] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [numericFilter, setNumericFilter] = useState({
    filterByNumericValues: [],
  });

  useEffect(() => {
    if (planets.length) {
      const filterName = planets.filter((planet) => (
        planet.name.toLowerCase().includes(nameSearch.filterByName.name)
      ));
      const activFilter = numericFilter.filterByNumericValues
        .reduce((acumula, filtro) => (
          acumula.filter((planeta) => {
            switch (filtro.comparison) {
            case 'maior que':
              return Number(planeta[filtro.column]) > Number(filtro.value);
            case 'menor que':
              return Number(planeta[filtro.column]) < Number(filtro.value);
            case 'igual a':
              return Number(planeta[filtro.column]) === Number(filtro.value);
            default:
              return true;
            }
          })
        ), filterName);
      setPlanetsFilter(activFilter);
    }
    if (espec.length) {
      const req5 = numericFilter.filterByNumericValues.reduce((acc, itemEspec) => (
        acc.filter((item) => (
          item !== itemEspec.column
        ))
      ), espec);
      setFilterEspec(req5);
    }
  }, [planets, nameSearch, espec, numericFilter.filterByNumericValues]);

  const columnFilter = () => (
    <select
      data-testid="column-filter"
      onChange={ ({ target }) => setColumn(target.value) }
    >
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
    <select
      data-testid="comparison-filter"
      onChange={ ({ target }) => setComparison(target.value) }
    >
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
      name="value"
      onChange={ ({ target }) => setValue(target.value) }
      value={ value }
    />
  );

  const handleButton = () => {
    const obj = {
      column,
      comparison,
      value,
    };
    setNumericFilter(
      {
        filterByNumericValues: [
          ...numericFilter.filterByNumericValues,
          obj,
        ],
      },
    );
  };

  const buttonFilter = () => (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ handleButton }
    >
      Number Filter
    </button>
  );

  const handleDeleteFilter = (i) => {
    const deleteFilter = numericFilter.filterByNumericValues
      .filter((_filt, itemIndex) => (
        itemIndex !== i
      ));
    setNumericFilter({
      filterByNumericValues: [...deleteFilter],
    });
  };

  const handleResetFilters = () => {
    setNumericFilter({
      filterByNumericValues: [],
    });
  };

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
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ handleResetFilters }
      >
        Remover Filtros
      </button>
      <div>
        {numericFilter
        && numericFilter.filterByNumericValues.map((filt, i) => (
          <div key={ ` ${filt.comparison}-${i}` } data-testid="filter">
            <p>
              {`${filt.column}-${filt.comparison}-${filt.value}`}
            </p>
            <button
              type="button"
              onClick={ () => handleDeleteFilter(i) }
            >
              X

            </button>
          </div>
        ))}
      </div>
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
