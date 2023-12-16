import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { IGame } from '../../Types/games.types'

const initialState: IGame[] = []

export const favouriteSlice = createSlice({
    name: "favourites",
    initialState,
    reducers: {
        ToggleFavourites: (state, {payload: game}: PayloadAction<IGame>) => {
            const isExists = state.some(g => g.id === game.id)
            if(isExists){
                const index = state.findIndex(item => item.id === game.id)
                if(index !== -1){
                    state.splice(index, 1)
                }
            } else {
                state.push(game)
            }
        }
    }
})

export const {actions, reducer} = favouriteSlice