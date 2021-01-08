import React from 'react';
import PokedexStat from "./PokedexStat";
import { PokeApiSearchPokemonResultType } from '../types/PokeApi';

interface PokedexCardProps {
    pokemon: PokeApiSearchPokemonResultType | null,
    loading: boolean,
    error: boolean
}

const PokedexCard = ({ pokemon, loading, error }: PokedexCardProps) => {

    if (error) {
        return (
            <div>
                <p className="text-help">Error</p>
            </div>
        )
    }

    return (
        <div>
            {pokemon === null || loading ?
                <p className="text-help">loading...</p>
                :
                <div className="pokedex-card">
                    <div className="pokedex-card-header">
                        <h2>{pokemon?.name.toUpperCase()}</h2>
                    </div>
                    <div className="pokedex-card-info">
                        <img alt="pokemon"
                             src={pokemon?.sprites.front_default}
                        />
                        <ul className="pokemon-stats">
                            {pokemon?.stats.map(item => (
                                <PokedexStat key={item.stat.name} item={item}/>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </div>

    )
}

export default PokedexCard;
