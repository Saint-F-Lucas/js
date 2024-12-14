const pokeApi = {
  //variables to use in the URL and do our pagination (offset & limit)
  getPokemons(offset = 0, limit = 10) {
    // URL to get data
    const url = 'https://pokeapi.co/api/v2/pokemon'
    return fetch(url)
      .then(response => response.json())
      .then(responseBody => responseBody.results)
      .catch(error => console.error(error))
  }
}
