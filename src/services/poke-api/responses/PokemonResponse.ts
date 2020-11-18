export interface PokemonResponse {
    id: number,
    name: string,
    sprites: {
        front_default: string,
        back_default: string
    },
    stats: [Stat],
    types: [type]
}

interface Stat {
    base_stat: number,
    effort: number,
    stat: {
        name: string
    }
}

interface type {
    slot: number,
    type: {
        name: string
    }
}
