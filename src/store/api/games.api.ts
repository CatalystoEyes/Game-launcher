import { IGameData } from "../../Types/games.types";
import { api } from "./api";

export const gamesApi = api.injectEndpoints({
    endpoints: builder => ({
        getGames: builder.query({
            query: () => '/'
        }),
        createGame: builder.mutation<null, IGameData>({
            query: games => ({
                body: games,
                url: '/',
                method: "POST"
            }),
            invalidatesTags: () => [{
                type: "Games"
            }]
        })
    })
})

export const {useCreateGameMutation} = gamesApi