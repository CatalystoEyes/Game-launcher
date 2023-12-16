import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { IGame } from "../../Types/games.types"

const URL = "http://localhost:4200/game"
export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Games'],
    baseQuery: fetchBaseQuery({
        baseUrl: URL,
    }),
    endpoints: builder => ({
        getGames: builder.query<IGame[], string>({
            query: searchTerm => `/?_sort=id&_order=desc&q=${searchTerm}`,
            providesTags: (result, error, searchTerm) => [{
                type: "Games",
                id: searchTerm
            }]
        }),
    })
})

export const { useGetGamesQuery } = api

