export interface IUser {
    id: number
    name: string
    image: string
}

export interface IInitialUserState {
    user: IUser
    isLoading: boolean
    error: null
}