import { createAsyncThunk } from "@reduxjs/toolkit"
import { IUser } from "../../Types/user.types"

const fetchUserByID = (userId: number): Promise<IUser> => new Promise((resolve) => setTimeout(() => resolve({ id: 1, name: "Nickname", image: 'https://i.pinimg.com/564x/c2/3d/25/c23d2502d10dac4dd45017ab13ed0a77.jpg' }), 1000))


export const getUserById = createAsyncThunk<IUser, number>("user/by-id", async (userId, thunkApi) => {
    try {
        const response = await fetchUserByID(userId)
        return response

    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }

})