import { createAsyncThunk } from "@reduxjs/toolkit"
import { IUser } from "../../Types/user.types"

const fetchUserByID = (userId: number): Promise<IUser> => new Promise((resolve) => setTimeout(() => resolve({ id: 1, name: "Nickname" }), 1000))


export const getUserById = createAsyncThunk<IUser, number>("user/by-id", async (userId, thunkApi) => {
    try {
        const response = await fetchUserByID(userId)
        return response

    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }

})