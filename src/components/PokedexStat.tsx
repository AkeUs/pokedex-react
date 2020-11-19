import React from 'react';
import { IPokemonStat } from '../services/poke-api/responses/PokemonResponse';

type PokedexStatProps = {
    item: IPokemonStat
}

const PokedexStat = ({ item }: PokedexStatProps) => {

    return (
        <li>
            <span>{item.stat.name}: </span>
            <span>{item.base_stat}</span>
        </li>
    )
}

export default PokedexStat;
