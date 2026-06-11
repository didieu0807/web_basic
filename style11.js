function fetchPromise(URL) {
    return fetch(URL)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log("error");
        });
}

async function main(){
    let pokemons = [];
    const data = await fetchPromise("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898");
    pokemons = data.results;

    const pokemonPromise = pokemons.map(pokemon => fetchPromise(pokemon.url));
    const pokemonElements = await Promise.all(pokemonPromise);
    const pokemonList = document.querySelector(".pokemon_list");
  
    let size = 20;
    function renderPokemonList(data, size){
        let img = "";
        pokemonList.innerHTML = "";
        for(let i = 0; i < size; i++){
            img += `<div class="pokemon_item">
                        <div class="id">#${i+1}</div>
                        <div class="image">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png" alt="${data[i].name}">
                        </div>
                        <div class="name">
                            <p>${data[i].name}</p>
                        </div>
                        <div class="type_list">`
                   
            for (let j = 0; j < data[i].types.length; j++){
                let typeName = data[i].types[j].type.name;
                img += `<div class="type ${typeName}">${typeName}</div>`
            }
            img += `</div>
                    </div>`
        }
        pokemonList.innerHTML = img;
    }
    renderPokemonList(pokemonElements, size);
}   
main();