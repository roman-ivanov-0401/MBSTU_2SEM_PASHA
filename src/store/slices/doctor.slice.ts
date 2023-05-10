import { IDoctor} from "../../models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface DoctorState{
    doctors: IDoctor[]
}

const initialState: DoctorState = {
    doctors: [
        {
            id: "1",
            name: "Имя 1",
            middleName: "Отчёство 1",
            surname: "Фамилия 1",
            specialization: "Специализация 1"
        },
        {
            id: "2",
            name: "Имя 2",
            middleName: "Отчёство 2",
            surname: "Фамилия 2",
            specialization: "Специализация 2"
        },
        {
            id: "3",
            name: "Имя 3",
            middleName: "Отчёство 3",
            surname: "Фамилия 3",
            specialization: "Специализация 3"
        }
    ]
}

export const doctorSlice = createSlice({
    name: "doctors",
    initialState,
    reducers: {
        addDoctor(state, action: PayloadAction<IDoctor>){
            state.doctors.push(action.payload)
        },
        editDoctor(state, action: PayloadAction<IDoctor>) {
            const index = state.doctors.findIndex(({id}) => id == action.payload.id)
            if (index != -1) {
                state.doctors[index] = action.payload
            }
        },
        deleteDoctor(state, action: PayloadAction<string>){
            state.doctors = state.doctors.filter(({ id }) => id != action.payload)
        }
    }
})

export default doctorSlice.reducer