import {IPatient} from "../../models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PatientState{
    patients: IPatient[]
}

const initialState: PatientState = {
    patients: [
        {
            id: "1",
            name: "Имя 1",
            surname: "Фамилия 1",
            middleName: "Отчество 1",
            phoneNumber: "(910) 123-23-23",
            SNILS: "1231231231231231"
        },
        {
            id: "2",
            name: "Имя 2",
            surname: "Фамилия 2",
            middleName: "Отчество 2",
            phoneNumber: "(910) 123-23-23",
            SNILS: "1231231231231231"
        },
        {
            id: "3",
            name: "Имя 3",
            surname: "Фамилия 3",
            middleName: "Отчество 3",
            phoneNumber: "(910) 123-23-23",
            SNILS: "1231231231231231"
        },
    ]
}

export const patientSlice = createSlice({
    name: "patients",
    initialState,
    reducers: {
        addPatient(state, action: PayloadAction<IPatient>){
            state.patients.push(action.payload)
        },
        editPatient(state, action: PayloadAction<IPatient>) {
            const index = state.patients.findIndex(({ id }) => id == action.payload.id)
            if (index != -1) {
                state.patients[index] = action.payload
            }
        },
        deletePatient(state, action: PayloadAction<string>){
            state.patients = state.patients.filter(({ id }) => id != action.payload)
        }
    }
})

export default patientSlice.reducer