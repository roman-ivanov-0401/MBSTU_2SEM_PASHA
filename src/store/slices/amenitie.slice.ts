import {IAmenitie} from "../../models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AmenitieState{
    amenities: IAmenitie[]
}

const initialState: AmenitieState = {
    amenities: [
        {
            id: "1",
            name: "Рентген",
            description: "Рентген",
            endOfReception: new Date().toLocaleString("ru"),
            startOfReception: new Date().toLocaleString("ru")
        },
        {
            id: "2",
            name: "Анализ крови",
            description: "Анализ крови",
            endOfReception: new Date().toLocaleString("ru"),
            startOfReception: new Date().toLocaleString("ru")
        },
        {
            id: "3",
            name: "Проверка зрения",
            description: "Проверка зрения",
            endOfReception: new Date().toLocaleString("ru"),
            startOfReception: new Date().toLocaleString("ru")
        }
    ]
}

export const amenitieSlice = createSlice({
    name: "amenitie",
    initialState,
    reducers: {
        addAmenitie(state, action: PayloadAction<IAmenitie>){
            state.amenities.push(action.payload);
        },
        deleteAmenitie(state, action: PayloadAction<string>){
            state.amenities = state.amenities.filter(({ id }) => id != action.payload)
        },
        editAmenitie(state, action: PayloadAction<IAmenitie>){
            const index = state.amenities.findIndex(({ id }) => id == action.payload.id)
            if(index != -1) {
                state.amenities[index] = action.payload
            }
        }
    }
})

export default amenitieSlice.reducer