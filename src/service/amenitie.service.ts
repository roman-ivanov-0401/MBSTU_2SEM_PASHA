import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PROXY} from "../consts.ts";
import {RootState} from "../store/store.ts";
import {IAmenitie} from "../models";

export const amenitieApi = createApi({
    reducerPath: "amenitieApi",
    baseQuery: fetchBaseQuery({
        baseUrl: PROXY + "/Amenitie",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).authReducer.token
            if(token){
                headers.set("authorization", `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (build) => ({
        getAllAmenities: build.query<IAmenitie[], void>({
            query: () => ({
              url: "/GetAllAmenities"
            })
        }),
        getAmenitieByName: build.query<IAmenitie, string>({
            query: (name) => ({
                url: "/GetAmenitieByName/" + name
            })
        }),
        getAmenitieById: build.query<IAmenitie, string>({
            query: (id) => ({
                url: "/GetAmenitieById/" + id
            })
        }),
        deleteAmenitie: build.mutation<void, string>({
            query: (id) => ({
                url: "/DeleteAmenitie/" + id,
                method: "DELETE"
            })
        }),
        createAmenitie: build.mutation<void, Omit<IAmenitie, "id">>({
            query: (body) => ({
                url: "/CreateAmenitie",
                method: "POST",
                body
            })
        })
    })
})