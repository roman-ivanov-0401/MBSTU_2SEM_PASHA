import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState{
    token: string,
    email: string,
    role: string
}

const initialState: AuthState = {
    token: "",
    email: "",
    role: ""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>){
            state.token = action.payload
        }
    }
})

export default authSlice.reducer