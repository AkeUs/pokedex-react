import React, { useEffect } from 'react';
import PokeApiClient from '../services/poke-api/PokeApiClient';

const Pokedex = () => {

    useEffect(() => {
        let client = new PokeApiClient();
        client.GetPokemonById(9).then(data => {
            console.log(data.stats);
        });
    }, [])

    return (
        <div>
            <h1>Pokedex</h1>
        </div>
    )
}

export default Pokedex;
