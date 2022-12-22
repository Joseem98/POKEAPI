let results = [];
let divPokemones$$;
let divSearch$$;

const getPokemon = async () => {
    for (let i = 1; i <= 151; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const res = await response.json();

        results = [...results, res];
    }
};


const mapPokemon = (results) => {
    return results.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.other['official-artwork'].front_default,
        type: pokemon.types.map(type => type.type.name).join(', '),
    }));
};

    const drawResults = (results) => {
        divPokemones$$.innerHTML = "";
        console.log(results);
        for (const pokemon of results) {
            let pokemonDiv = document.createElement("div");
            pokemonDiv.className = "pokemon-card"

            let pokemonName = document.createElement("h4");
            pokemonName.className = pokemon.name;
            pokemonName.textContent = pokemon.name;

            let pokemonImage = document.createElement("img");
            pokemonImage.setAttribute("src", pokemon.img)
            pokemonImage.setAttribute("alt", pokemon.name)

            let pokemonType = document.createElement("p");
            pokemonType.textContent = pokemon.type;

            pokemonDiv.appendChild(pokemonName);
            pokemonDiv.appendChild(pokemonImage);
            pokemonDiv.appendChild(pokemonType);

            divPokemones$$.appendChild(pokemonDiv);
        }
    };


    
    const drawPokemon = () => {
        let input$$ = document.createElement("input");
        divSearch$$.appendChild(input$$);
        input$$.addEventListener("input", () => searchPokemon (input$$.value, results));
    };

    const searchPokemon = (filtro, results) => {
        let filteredPokemon = results.filter(
            (pokemon) =>
                pokemon.name.toLowerCase().includes(filtro.toLowerCase) ||
                pokemon.type.toLowerCase().includes(filtro.toLowerCase)
        );
        drawPokemon(filteredPokemon);
    }


    const init = async () => {
        await getPokemon();
        pokemon = mapPokemon(results);
        console.log(pokemon);

        drawResults(pokemon);
    };


    window.onload = () => {
    divPokemones$$ = document.querySelector(".pokemones");
     divSearch$$ = document.querySelector(".search"); 
        
        init();  
    };




//     fetch('https://pokeapi.co/api/v2/pokemon/')

//         .then(
//             function(response) {
//                 if(response.status != 200) {
//                     console.log('Oops.. creo que' + response.status)
//                     return
//                 }

//     response.json().then(function(data) {
//         let pokemonDiv = document.createElement("div");
//         pokemonDiv.className = "pokemonList"

//         const pokemons = data.results
//         pokemons.forEach(pokemon => {

//             let pokemonName = document.createElement("p");
//             pokemonName.textContent = pokemon.name;

//             pokemonDiv.appendChil(pokemonName);

//              })
//         })
//     }
// )

// .catch(function (err){
//     console.log(err);
// })

    // const mostrarData = (data) => {
    //     console.log(data);
    //     };




    // const mapResults = (results) => {
    //     return results.map((result) =>({
    //         id: result.id,
    //         name: result.name,
    //         img: result.sprites.front_default,
    //         type: result.type,
    //     }))
    // };


    // const drawResults = (results) => {
    //     divPokemones$$.innerHTML = "";
    //     for (const result of results) {
    //         let pokemonDiv = document.createElement("div");
    //         pokemonDiv.className = "pokemon-card"

    //         let pokemonName = document.createElement("h4");
    //         pokemonName.className = results.name;

    //         let pokemonImage = document.createElement("img");
    //         pokemonImage.setAttribute.apply("src", pokemon.img)
    //         pokemonImage.setAttribute.apply("alt", pokemon.name)

    //         let pokemonType = document.createElement("p");
    //         pokemonType.textContent = pokemon.type;

    //         pokemonDiv.appendChild(pokemonName);
    //         pokemonDiv.appendChild(pokemonImage);
    //         pokemonDiv.appendChild(pokemonType);

    //         divPokemones$$.appendChild(pokemonDiv);
    //     }
    // };


    // const drawPokemon = () => {
    //     let input$$ = document.createElement("input");
    //     divSearch$$.appendChild(input$$);
    //     input$$.addEventListener("input", () => searchPokemon (input$$.value, results));
    // };


    // const init = async () => {
    //     await getPokemon();
    //     pokemon = [mapResults(results)];
    //     drawPokemon(results);
    // };

    // init();