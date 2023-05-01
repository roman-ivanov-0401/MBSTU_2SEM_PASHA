import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {PROXY} from "../consts.ts";

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
            })
        }),
        login: build.mutation<
            {token: string},
            {email: string, password: string}
        >({
            query: (body) => ({
                url: "/Login",
                method: "POST",
                body
            })
        })
    })
})