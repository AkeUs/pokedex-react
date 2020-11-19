import React from 'react';
import { PokemonResponse } from '../services/poke-api/responses/PokemonResponse';
import PokedexStat from "./PokedexStat";

type PokedexCardProps = {
    pokemon: PokemonResponse | null,
    loading: boolean
    error: boolean
}

const PokedexCard = ({ pokemon, error }: PokedexCardProps) => {

    if (error) {
        return (
            <div>
                <h2>Error</h2>
            </div>
        )
    }

    return (
        <div>
            <h2>{pokemon?.name.toUpperCase()}</h2>
            <img
                src={pokemon?.sprites.front_default}
                alt={pokemon?.name}
            />
            <ul>
            {pokemon?.stats.map(item => (
                <PokedexStat key={item.stat.name} item={item}/>
            ))}
            </ul>
        </div>
    )
}

export default PokedexCard;
