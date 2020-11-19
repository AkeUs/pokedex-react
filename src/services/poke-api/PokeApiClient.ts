import { PokemonResponse } from './responses/PokemonResponse';

const pokeApiUrl: string = "https://pokeapi.co/api/v2";

export async function getPokemonById(pokemonId: number|string) : Promise<PokemonResponse> {
    let url: string = `${pokeApiUrl}/pokemon/${pokemonId}`;
    let response = await fetch(url);
    return await response.json();
}

