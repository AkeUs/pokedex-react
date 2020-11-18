import {PokemonResponse} from "./responses/PokemonResponse";

export default class PokeApiClient {
    private readonly pokeApiUrl: string = "https://pokeapi.co/api/v2";

    public async GetPokemonById(pokemonId: number) : Promise<PokemonResponse> {
        let url: string = `${this.pokeApiUrl}/pokemon/${pokemonId}`;
        let response = await fetch(url);
        let result = await response.json();
        console.log(result);
        return result;
    }
}
