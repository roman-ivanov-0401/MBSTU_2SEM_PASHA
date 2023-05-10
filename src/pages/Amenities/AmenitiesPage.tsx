import {FC, useState} from "react"
import {
    Box, Button,
    Select,
    Text
} from "@chakra-ui/react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {IAmenitie, IDoctor} from "../../models";
import {appointmentSlice} from "../../store/slices/appointment.slice.ts";

export const AmenitiesPage: FC = () => {
    const dispatch = useAppDispatch();
    const amenities = useAppSelector(state => state.amenitieReducer.amenities);
    const doctors = useAppSelector(state => state.doctorReducer.doctors);
    const authUser = useAppSelector(state => state.authReducer.user);
    const authPatient = useAppSelector(state => state.patientReducer.patients.find(({ id }) => id == authUser.patientId))


    const [currentDoctor, setCurrentDoctor] = useState<IDoctor | undefined>(doctors[0] || undefined);
    const [currentAmenitie, setCurrentAmenitie] = useState<IAmenitie | undefined>(amenities[0] || undefined)

    const chooseAmenitieHandler = (_id: string): void => {
        setCurrentAmenitie(
            amenities.find(({ id }) => id == _id)
        )
    }

    const chooseDoctorHandler = (_id: string): void => {
        setCurrentDoctor(
            doctors.find(({ id }) => _id == id)
        )
    }

    const onSubmit = () => {
        dispatch(appointmentSlice.actions.addAppointment({
            id: Math.random().toString(),
            amenitieName: currentAmenitie?.name || "",
            doctorName: currentDoctor?.name || "",
            patientId: authPatient?.id || "",
            date: new Date().toDateString()
        }))
    }
    return(
        <Box
            marginTop={20}
            padding="0px 20px"
        >
            <Text
                fontSize="40px"
                fontWeight={700}
            >
                Создание записи
            </Text>
            <Text
                fontSize="24px"
                fontWeight={500}
                marginBottom={3}
            >
                Выберите услугу
            </Text>
            <Select marginBottom="20px">
                {
                    amenities.map(({ id, name }) =>
                        <option key={id} onClick={() => chooseAmenitieHandler(id)}>
                            {name}
                        </option>
                    )


                }
            </Select>

            <Text
                fontSize="24px"
                fontWeight={500}
                marginBottom={3}
            >
                Выберите врача
            </Text>
            <Select>
                {
                    doctors.map(({ id, name }) =>
                        <option key={id} onClick={() => chooseDoctorHandler(id)}>
                            {name}
                        </option>
                    )
                }
            </Select>
            <Box display="flex" justifyContent="end" marginTop="10px">
                <Button variant="solid" colorScheme="teal" isDisabled={false} onClick={onSubmit}>
                    Записаться
                </Button>
            </Box>
        </Box>
    )
}