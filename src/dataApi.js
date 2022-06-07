const data = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const result = await response.json();
  return result.results;
};

export default data;
