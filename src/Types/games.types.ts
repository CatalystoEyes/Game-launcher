export interface IGame {
    id: number
    name: string
    image: string
    description: string
    price: string
}

export interface IGameData extends Omit<IGame, 'id'> { }