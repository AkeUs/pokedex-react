import { PokeApiSearchPokemonResultType } from '../types/PokeApi';

const pokeApiUrl: string = 'https://pokeapi.co/api/v2';

export async function getPokemonById(pokemonId: number|string) : Promise<PokeApiSearchPokemonResultType> {
    let url: string = `${pokeApiUrl}/pokemon/${pokemonId}`;
    let response = await fetch(url);
    return await response.json();
}

