import {IAppointment} from "../../models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppointmentState{
    appointments: IAppointment[]
}

const initialState: AppointmentState = {
    appointments: []
}

export const appointmentSlice = createSlice({
    name: "appointments",
    initialState,
    reducers: {
        addAppointment(state, action: PayloadAction<IAppointment>){
            state.appointments.push(action.payload)
        },
        editAppointment(state, action: PayloadAction<IAppointment>) {
            const index = state.appointments.findIndex(({id}) => id == action.payload.id)
            if (index != -1) {
                state.appointments[index] = action.payload
            }
        },
        deleteAppointment(state, action: PayloadAction<string>){
            state.appointments = state.appointments.filter(({ id }) => id == action.payload)
        }
    }
})

export default appointmentSlice.reducer