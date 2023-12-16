import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducer as favouriteReducer } from './favourites/favourite.slice'
import { userSlice } from './user/user.slice'
import { api } from './api/api'

const reducers = combineReducers({
    favourites: favouriteReducer,
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})


export type RootState = ReturnType<typeof store.getState>


