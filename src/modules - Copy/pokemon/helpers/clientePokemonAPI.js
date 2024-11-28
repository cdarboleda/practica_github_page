const obtenerPokemons = async () => {
    return await getPokemonsAPI(getIdRandomArray());
}

const consumirAPI = async (id) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
}

const getRandom = (min, max) => {
    max++;
    return Math.floor(Math.random() * (max - min) + min);
}

const getIdRandomArray = () => {
    const arreglo = [];
    for (let i = 0; i < 3; i++) {
        arreglo.push(getRandom(5, 9))
    }
    return arreglo;
}

const getPokemonsAPI = async (arregloIds) => {
    const arreglo = [];
    for (let i = 0; i < arregloIds.length; i++) {
        const pokemon = await consumirAPI(arregloIds[i]);
        arreglo.push(
            {
                name: pokemon.name,
                id: pokemon.id,
                img: pokemon.sprites.other.dream_world.front_default
            }
        )
    }

    return arreglo;
}

const getPokemonFacade = () => {
    return obtenerPokemons();
}

export default getPokemonFacade;