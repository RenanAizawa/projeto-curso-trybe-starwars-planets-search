const data = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planets = await response.json();
  const result = await planets.results;
  // console.log(result);
  return result;
};

export default data;
