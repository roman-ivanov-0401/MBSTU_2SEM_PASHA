import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {PROXY} from "../consts.ts";
import {IDoctor} from "../models";
import {RootState} from "../store/store.ts";

export const doctorApi = createApi({
    reducerPath: "doctorApi",
    baseQuery: fetchBaseQuery({
        baseUrl: PROXY + "/Doctor",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).authReducer.token
            if(token){
                headers.set("authorization", `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (build) => ({
        getAllDoctors: build.query<IDoctor[], void>({
            query: () => ({
                url: "/GetAllDoctors"
            })
        }),
        getDoctorByName: build.query<IDoctor, string>({
            query: (name) => ({
                url: "/GetDoctorByName/" + name
            })
        }),
        getDoctorById: build.query<IDoctor, string>({
            query: (id) => ({
                url: "/GetDoctorById/" + id,
            })
        }),
        deleteDoctors: build.mutation<void, string>({
            query: (id) => ({
                url: "/DeleteDoctors/" + id,
                method: "POST"
            })
        }),
        createDoctor: build.mutation<void, Omit<IDoctor, "id">>({
            query: (body) => ({
                url: "/CreateDoctors",
                method: "POST",
                body
            })
        })
    })
})