//In this code we are using the fetch API library to get data from a pokemon API and use this data to fill our page with pokemons

//Some functions in this code are in other file, to do it we imported it in the HTML

/* this is the affective request for the data, this is a asynchronous processing, this means that the request is a promise 
for data. 
The them property allows you to use the the data from the URL, if it doesnt work it will show the error with the catch 
property and finally does something regardless of the succes of the request.
*/
/*
fetch(url)
  .then(function (response) {
    response.json().then(function (responseBody) {
      console.log(responseBody)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
  .finally(function () {
    console.log('Requisition concluted')
  })
*/
// to avoid calling the inside then you can call after and the other and this will make the code cleaner

const pokemonListhtlmElement = document.getElementById('pokemonList')

function convertPokemonTohtml(pokemon) {
  return `
          <li class="pokemon">
          <span class="number">#001</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
            <ol class="types">
              <li class="type">Grass</li>
              <li class="type">Poison</li>
            </ol>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt="${pokemon.name}"
            />
          </div>
        </li>
  `
}

pokeApi.getPokemons().then((pokemonList = []) => {
  // better study this, but its getting the array from the getPokemons as usable data,
  // Inside the map we gave a function that returns a list just like the for function bellow
  let newPokemonList = pokemonList.map(pokemon => {
    return convertPokemonTohtml(pokemon)
  })

  newPokemonList = newPokemonList.join('')
  pokemonListhtlmElement.innerHTML = newPokemonList

  /*
  const pokemonhtmlList = []
  for (let index = 0; index < pokemonList.length; index++) {
    const pokemon = pokemonList[index]
    pokemonhtmlList.push(convertPokemonTohtml(pokemon, index + 1))
  }
  */
})
