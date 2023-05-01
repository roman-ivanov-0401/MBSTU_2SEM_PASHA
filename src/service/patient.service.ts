import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {PROXY} from "../consts.ts";
import {IPatient} from "../models";

export const patientApi = createApi({
    reducerPath: "patientApi",
    baseQuery: fetchBaseQuery({
        baseUrl: PROXY + "/Patient"
    }),
    endpoints: (build) => ({
        getAllPatients: build.query<IPatient[], void>({
            query: () => ({
                url: "/GetAllPatients"
            })
        }),
        getByPhoneNumber: build.query<IPatient, string>({
            query: (phoneNumber) => ({
                url: "/GetPatientByPhoneNumber/" + phoneNumber
            })
        }),
        getBySNILS: build.query<IPatient, string>({
            query: (snils) => ({
                url: "/GetPatientBySNILS/" + snils
            })
        }),
        getById: build.query<IPatient, string>({
            query: (id) => ({
                url: "/GetPatientBySNILS/" + id
            })
        }),
        deletePatient: build.mutation<void, string>({
            query: (id) => ({
                url: "/DeletePatient/" + id,
                method: "DELETE"
            })
        }),
        createPatient: build.mutation<void, Omit<IPatient, "id">>({
            query: (body) => ({
                url: "/CreatePatient",
                method: "POST",
                body
            })
        })
    })
})