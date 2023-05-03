import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState{
    token: string,
    email: string,
    role: string
}

const initialState: AuthState = {
    token: "",
    email: "",
    role: "ADMIN"
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>){
            state.token = action.payload
        },
        setRole(state, action: PayloadAction<string>){
          state.role = action.payload.toUpperCase()
        }
    }
})

export default authSlice.reducer