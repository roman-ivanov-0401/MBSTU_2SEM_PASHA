import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PROXY} from "../consts.ts";
import {authSlice} from "../store/slices/auth.slice.ts";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: PROXY + "/Identity"
    }),
    endpoints: (build) => ({

        register: build.mutation<
            {token: string},
            {email: string, password: string}
        >({
            query: (body) => ({
                url: "/Register",
                method: "POST",
                body
            }),
            async onQueryStarted(args, {queryFulfilled, dispatch}){
                try{
                    const { data } = await queryFulfilled;
                    dispatch(authSlice.actions.setToken(data.token))
                    const user = JSON.parse(window.atob(data.token.split(".")[1]))
                    if(user.role == "Admin") dispatch(authSlice.actions.setRole(user.role))
                    if(user.role == "User") dispatch(authSlice.actions.setRole(user.role))
                } catch (e) {}
            }
        }),
        login: build.mutation<
            {token: string},
            {email: string, password: string}
        >({
            query: (body) => ({
                url: "/Login",
                method: "POST",
                body
            }),
            async onQueryStarted(args, {queryFulfilled, dispatch}){
                try{
                    const { data } = await queryFulfilled;
                    dispatch(authSlice.actions.setToken(data.token))
                    const user = JSON.parse(window.atob(data.token.split(".")[1]))
                    if(user.role == "Admin") dispatch(authSlice.actions.setRole(user.role))
                    if(user.role == "User") dispatch(authSlice.actions.setRole(user.role))
                } catch (e) {}
            }
        })
    })
})