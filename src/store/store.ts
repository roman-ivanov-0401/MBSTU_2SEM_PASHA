import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {authApi, patientApi} from "../service";
import authReducer, {authSlice} from "./slices/auth.slice.ts"
import {doctorApi} from "../service/doctor.service.ts";
import {amenitieApi} from "../service/amenitie.service.ts";

const rootReducer = combineReducers({
    authReducer,

    [patientApi.reducerPath]: patientApi.reducer,
    [authApi.reducerPath]: patientApi.reducer,
    [doctorApi.reducerPath]: doctorApi.reducer,
    [amenitieApi.reducerPath]: amenitieApi.reducer
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware()
                .concat(authApi.middleware)
                .concat(patientApi.middleware)
                .concat(doctorApi.middleware)
                .concat(amenitieApi.middleware)
    })
}

export type RootState = ReturnType<typeof  rootReducer>
export type AddStore = ReturnType<typeof setupStore>
export type AppDispatch = AddStore["dispatch"]