import { FC, RefObject } from "react"
import {IDoctor} from "../../models";
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input, Box,
} from "@chakra-ui/react";

import { useForm, SubmitHandler } from "react-hook-form";

export interface FormFields{
    name: string
    surname: string
    middleName: string
    specialization: string
}
export interface ManageDoctorsDialogProps{
    isOpen: boolean
    onClose: () => void
    doctor: IDoctor,
    ref:RefObject<HTMLButtonElement>
}
export const ManageDoctorsDialog: FC<ManageDoctorsDialogProps> = (
    { isOpen, onClose, ref, doctor }
) => {

    const { register,
        formState: {errors},
        handleSubmit
    } = useForm<FormFields>({mode: "onChange"})

    const onSubmit: SubmitHandler<FormFields> = () => {
        console.log("lalls")
    }

    return(
        <AlertDialog leastDestructiveRef={ref} isOpen={isOpen} onClose={onClose}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        Редактирование данных врача
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl isInvalid={Boolean(errors.surname)}>
                                <FormLabel htmlFor="name">Фамилия</FormLabel>
                                <Input
                                    placeholder="Фамилия"
                                    id="surname"
                                    defaultValue={doctor.surname}
                                    {...register("surname", {
                                        required: "Поле не может быть пустым"
                                    })}
                                />
                                <FormErrorMessage>
                                    {
                                        errors.surname && errors.surname.message
                                    }
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={Boolean(errors.name)}>
                                <FormLabel htmlFor="name">Имя</FormLabel>
                                <Input
                                    placeholder="Имя"
                                    id="name"
                                    defaultValue={doctor.name}
                                    {...register("name", {
                                        required: "Поле не может быть пустым"
                                    })}
                                />
                                <FormErrorMessage>
                                    {
                                        errors.name && errors.name.message
                                    }
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={Boolean(errors.middleName)}>
                                <FormLabel htmlFor="name">Отчество</FormLabel>
                                <Input
                                    placeholder="Отчество"
                                    id="middleName"
                                    defaultValue={doctor.middleName}
                                    {...register("middleName", {
                                        required: "Поле не может быть пустым"
                                    })}
                                />
                                <FormErrorMessage>
                                    {
                                        errors.middleName && errors.middleName.message
                                    }
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={Boolean(errors.specialization)}>
                                <FormLabel htmlFor="specialization">Специализация</FormLabel>
                                <Input
                                    placeholder="Специализация"
                                    id="specialization"
                                    defaultValue={doctor.specialization}
                                    {...register("specialization", {
                                        required: "Поле не может быть пустым"
                                    })}
                                />
                                <FormErrorMessage>
                                    {
                                        errors.specialization && errors.specialization.message
                                    }
                                </FormErrorMessage>
                            </FormControl>
                            <Box
                                display="flex"
                                justifyContent="end"
                                marginTop="20px"
                            >
                                <Button variant="solid" colorScheme="red" marginRight="10px" onClick={onClose}>
                                    Отмена
                                </Button>
                                <Button variant="solid" colorScheme="teal" type="submit">
                                    Изменить
                                </Button>
                            </Box>

                        </form>

                    </AlertDialogBody>
                    <AlertDialogFooter>

                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}