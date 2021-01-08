import React from 'react';
import { PokemonStat } from '../types/PokeApi';

interface PokedexStatProps {
    item: PokemonStat
}

const PokedexStat = ({ item }: PokedexStatProps) => {

    return (
        <li>
            <span><b>{item.stat.name.toUpperCase()}: </b></span>
            <span>{item.base_stat}</span>
        </li>
    )
}

export default PokedexStat;
