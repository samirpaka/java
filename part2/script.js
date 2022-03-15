let pokemonCount;
{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const object = await response.json();

    pokemonCount = object.count;
}
let pokemons = [];
{
    const url = new URL("https://pokeapi.co/api/v2/pokemon");
    url.searchParams.set("limit", pokemonCount);
    
    const response = await fetch(url);
    const object = await response.json();

    pokemons = object.results;

}
function printPokemons(pokemons){
    const matchList = document.getElementById("match-list");
    matchList.innerHTML = "";
    for(let pokemon of pokemons)
    {
        const html = `<li>${pokemon.name}</li>`;
        matchList.insertAdjacentHTML("beforeend", html);
    }
}
const searchBar = document.getElementById("search-bar");
searchBar.oninput = function (event){
    const text = searchBar.value;
    const filterFunc = (p) => p.name.includes(text);

    const pokemonsMatchingText = pokemons.filter(filterFunc);
    printPokemons(pokemonsMatchingText);
}
printPokemons([]);