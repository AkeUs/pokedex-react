export type PokeApiSearchPokemonResultType = {
    id: number;
    name: string;
    sprites: PokemonSprite;
    stats: Array<PokemonStat>;
    types: Array<PokemonType>
}

export type PokemonStat = {
    base_stat: number;
    effort: number;
    stat: Stat;
}

export type PokemonType = {
    slot: number;
    type: Type;
}

type PokemonSprite = {
    front_default: string;
    back_default: string;
}

type Stat = {
    name: string;
}

type Type = {
    name: string;
}
