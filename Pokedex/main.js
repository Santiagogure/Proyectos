const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
const pokemon = document.getElementById('pokemonName')
const buttonSearch = document.getElementById('searchPokemon')
const buttonDelete = document.getElementById('deletePokemon')
const appNode = document.getElementById('app')

buttonSearch.addEventListener('click', insertPokemon)
buttonSearch.addEventListener('touchstart', insertPokemon) // moviles

buttonDelete.addEventListener('click', deletePokemon)

buttonDelete.addEventListener('touchstart', deletePokemon) // moviles

function insertPokemon() {
  window.fetch(`${baseURL}${pokemon.value.toLowerCase()}`)
  .then(response =>{
      if (response.status == 404) {
        alert("This Pokemon is not available. Try whit another one!")
      } else{
          return response.json()
      }
  })
  .then(responseJSON =>{
    const allItems = []
    const result = []

    for(let pokemonInfo in responseJSON){
        result.push([pokemonInfo , responseJSON[pokemonInfo]])
    }

    console.table(result)

    //*Crear imagen
    const pokemonImage = document.createElement('img')
    pokemonImage.src = result[14][1].front_default

    // nombre e id
    const pokemonName = document.createElement('h2')
    pokemonName.innerText = `Name: ${result[10][1]} - ID: ${result[6][1]}`

    //type
    const pokemonType = document.createElement('h2')
    pokemonType.innerText = `Type: ${result[16][1][0].type.name}`

    // contenedor
    const container = document.createElement('div')
    container.append(pokemonImage, pokemonName, pokemonType)

    allItems.push(container)

    appNode.append(...allItems)
  })
}

function deletePokemon() {
    let allPokemon = appNode.childNodes // node list
    allPokemon = Array.from(allPokemon)

    allPokemon.forEach(pokemon =>{
        pokemon.remove(pokemon)
    })
}