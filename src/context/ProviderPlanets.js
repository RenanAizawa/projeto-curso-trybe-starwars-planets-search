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

  const [nameSearch, setNameSearch] = useState({ filterByName: { name: '' } });
  const [planetsFilter, setPlanetsFilter] = useState([]);
  const [filterEspec, setFilterEspec] = useState([]);
  const [columns, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [numericFilter, setNumericFilter] = useState({
    filterByNumericValues: [],
  });

  const [orderColumn, setOrderColumn] = useState('population');
  const [orderComparison, setOrderComparison] = useState('ASC');
  const [ordem, setOrdem] = useState({
    order: {
      column: 'population',
      sort: 'ASC',
    },
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
      const ordenamento = () => {
        const { order: { column, sort } } = ordem;
        if (sort === 'ASC') {
          console.log('ASC', column);
          return activFilter.sort((a, b) => a[column] - b[column]);
        }
        return activFilter.sort((a, b) => b[column] - a[column]);
      };
      setPlanetsFilter(ordenamento());
    }
    if (espec.length) {
      const req5 = numericFilter.filterByNumericValues.reduce((acc, itemEspec) => (
        acc.filter((item) => (
          item !== itemEspec.column
        ))
      ), espec);
      setFilterEspec(req5);
    }
  }, [planets, nameSearch, espec, numericFilter.filterByNumericValues, ordem]);

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

  const handleOrder = () => {
    setOrdem(
      {
        order: {
          column: orderColumn,
          sort: orderComparison,
        },
      },
    );
  };

  const handleButton = () => {
    const obj = {
      column: columns,
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

  const segundBigFilter = () => (
    <div>
      <h3>Ordenamento</h3>
      <select
        data-testid="column-sort"
        onChange={ ({ target }) => setOrderColumn(target.value) }
      >
        {espec.map((item) => (
          <option
            key={ item }
            value={ item }
          >
            {item}
          </option>
        ))}
      </select>
      <label htmlFor="asc">
        ASC
        <input
          type="radio"
          id="asc"
          value="ASC"
          name="ordenamento"
          data-testid="column-sort-input-asc"
          onChange={ ({ target }) => setOrderComparison(target.value) }
        />
      </label>
      <label htmlFor="desc">
        DESC
        <input
          type="radio"
          id="desc"
          value="DESC"
          name="ordenamento"
          data-testid="column-sort-input-desc"
          onChange={ ({ target }) => setOrderComparison(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleOrder }
      >
        Ordenar

      </button>
    </div>
  );

  const context = {
    setNameSearch,
    planetsFilter,
    numericFilter,
    nameSearch,
    handleDeleteFilter,
    handleResetFilters,
    segundBigFilter,
    filterEspec,
    setEspec,
    equal,
    setEqual,
    columns,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    handleButton,
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
