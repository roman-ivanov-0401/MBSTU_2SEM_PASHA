import { FC, RefObject } from "react"
import { IPatient } from "../../models";
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
    surname: string
    name: string
    middleName: string
    phoneNumber: string
    SNILS: string
}
export interface ManageServiceDialogProps{
    isOpen: boolean
    onClose: () => void
    patient: IPatient,
    ref:RefObject<HTMLButtonElement>
}
export const ManagePatientsDialog: FC<ManageServiceDialogProps> = (
    { isOpen, onClose, ref, patient }
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
                        Редактирование данных пациента
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl isInvalid={Boolean(errors.surname)}>
                                <FormLabel htmlFor="name">Фамилия</FormLabel>
                                <Input
                                    placeholder="Фамилия"
                                    id="surname"
                                    defaultValue={patient.surname}
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
                                    defaultValue={patient.name}
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
                                    defaultValue={patient.middleName}
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
                            <FormControl isInvalid={Boolean(errors.phoneNumber)}>
                                <FormLabel htmlFor="phoneNumber">Контактный номер</FormLabel>
                                <Input
                                    placeholder="Номер телефона"
                                    id="phoneNumber"
                                    defaultValue={patient.phoneNumber}
                                    {...register("phoneNumber", {
                                        required: "Поле не может быть пустым",
                                        pattern: {
                                            value: new RegExp("^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$"),
                                            message: "Некорректный формат"
                                        }
                                    })}
                                />
                                <FormErrorMessage>
                                    {
                                        errors.phoneNumber && errors.phoneNumber.message
                                    }
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={Boolean(errors.SNILS)}>
                                <FormLabel htmlFor="OMS">ОМС</FormLabel>
                                <Input
                                    placeholder="ОМС"
                                    id="OMS"
                                    defaultValue={patient.SNILS}
                                    {...register("SNILS", {
                                        required: "Поле не может быть пустым"
                                    })}
                                />
                                <FormErrorMessage>
                                    {
                                        errors.SNILS && errors.SNILS.message
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