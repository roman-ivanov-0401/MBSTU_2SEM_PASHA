import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {authApi, patientApi} from "../service";
import authReducer from "./slices/auth.slice.ts"
import patientReducer from "./slices/patient.slice.ts"
import doctorReducer from "./slices/doctor.slice.ts"
import amenitieReducer from "./slices/amenitie.slice.ts"
import appointmentReducer from "./slices/appointment.slice.ts"
import {doctorApi} from "../service";
import {amenitieApi} from "../service";

const rootReducer = combineReducers({
    authReducer,
    patientReducer,
    doctorReducer,
    amenitieReducer,
    appointmentReducer,
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