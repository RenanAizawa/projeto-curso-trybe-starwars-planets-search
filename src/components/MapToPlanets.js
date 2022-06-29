import React, { useContext } from 'react';
import planetContext from '../context/planetContext';

function MapToPlanets() {
  const {
    setNameSearch,
    planetsFilter,
    numericFilter,
    nameSearch,
    handleDeleteFilter,
    handleResetFilters,
    segundBigFilter,
    filterEspec,
    equal,
    setColumn,
    setComparison,
    value,
    setValue,
    handleButton,
  } = useContext(planetContext);

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

  const buttonFilter = () => (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ handleButton }
    >
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
            <h3>Filtro Numerico</h3>
            <form>
              {columnFilter()}
              {comparisonFilter()}
              {valueFilter()}
              {buttonFilter()}
            </form>
          </div>
          { segundBigFilter() }
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
                <td data-testid="planet-name">{planet.name}</td>
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
