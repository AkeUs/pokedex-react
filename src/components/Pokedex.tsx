import React, { useEffect, useState } from 'react';
import { getPokemonById } from '../services/poke-api/PokeApiClient';
import PokedexSearch from './PokedexSearch';
import PokedexCard from './PokedexCard';
import { PokemonResponse } from '../services/poke-api/responses/PokemonResponse';

const Pokedex = () => {
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [pokemon, setPokemon] = useState<PokemonResponse|null>(null);
    const RandomId = Math.floor(Math.random() * 152);
    const [pokemonId, setPokemonId] = useState<number|string>(RandomId);

    useEffect(() => {
        getPokemonById(pokemonId).then(data => {
            setPokemon(data);
            setLoading(false);
            setError(false);
        }).catch(err => {
            console.error(err);
            setLoading(false);
            setError(true);
        });
    }, [pokemonId]);

    return (
        <div className="container">
            <h1 className="pokedex-title">Poked&eacute;x</h1>
            <PokedexSearch
                setPokemonId={setPokemonId}
                setLoading={setLoading}
                setError={setError}
            />
            <PokedexCard
                pokemon={pokemon}
                loading={loading}
                error={error}
            />
        </div>
    )
}

export default Pokedex;
