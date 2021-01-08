import React, { SyntheticEvent, useState } from 'react';

interface PokedexSearchProps {
    setPokemonId: any,
    setLoading: any,
    setError: any
}

const PokedexSearch = ({ setPokemonId, setLoading, setError }: PokedexSearchProps) => {
    const [pokemon, setPokemon] = useState<number|string>('');

    const searchPokemon = (event: SyntheticEvent) => {
        event.preventDefault();
        if (pokemon !== '') {
            setLoading(true);
            let pokemonId: number|string;

            if (typeof pokemon === "string") {
                pokemonId = pokemon.toLowerCase();
            } else {
                pokemonId = pokemon
            }

            setPokemonId(pokemonId);
            setPokemon('');
            return
        }
        setError(true);
    }

    return (
        <form onSubmit={searchPokemon} className="search-form">
            <input
                type="text"
                name="pokemon"
                value={pokemon}
                placeholder="Pokemon ID or name"
                onChange={event => setPokemon(event.target.value)}
                autoComplete="off"
            />
            <input
                type="submit"
                value="search"
            />
        </form>
    )
}

export default PokedexSearch;
