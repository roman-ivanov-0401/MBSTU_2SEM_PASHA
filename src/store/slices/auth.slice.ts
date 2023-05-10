import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser, Roles} from "../../models/IUser.ts";

interface AuthState{
    token: string
    user: IUser
    users: IUser[]
}

const initialState: AuthState = {
    token: "",
    user: {
        _id: "",
        email: "",
        patientId: "",
        password: "",
        roles: []
    },
    users: [
        {
        _id: "",
        password: "admin",
        email: "admin@admin.com",
        patientId: "",
        roles: [Roles.PATIENT, Roles.ADMIN]
        }
    ]
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<IUser>) {
            state.users.push(action.payload)
        },
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
        },
        logout(state){
            state.user = initialState.user
        }
    }
})

export default authSlice.reducer