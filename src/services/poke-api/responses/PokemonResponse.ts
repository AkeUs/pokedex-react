export interface PokemonResponse {
    id: number,
    name: string,
    sprites: {
        front_default: string,
        back_default: string
    },
    stats: [IPokemonStat],
    types: [IPokemontype]
}

export interface IPokemonStat {
    base_stat: number,
    effort: number,
    stat: {
        name: string
    }
}

export interface IPokemontype {
    slot: number,
    type: {
        name: string
    }
}
