import { FC, RefObject } from "react"
import {IAmenitie} from "../../models";
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
    description: string
    startOfReception: Date,
    endOfReception: Date
}
export interface ManageServiceDialogProps{
    isOpen: boolean
    onClose: () => void
    service: IAmenitie,
    ref:RefObject<HTMLButtonElement>
}
export const ManageServiceDialog: FC<ManageServiceDialogProps> = (
    { isOpen, onClose, ref, service }
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
                        Редактирование услуги
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl isInvalid={Boolean(errors.name)}>
                                <FormLabel htmlFor="name">Название</FormLabel>
                                <Input
                                    placeholder="Название"
                                    id="name"
                                    defaultValue={service.name}
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
                            <FormControl isInvalid={Boolean(errors.description)}>
                                <FormLabel htmlFor={"description"}>Описание</FormLabel>
                                <Input
                                    placeholder="Описание"
                                    id="description"
                                    defaultValue={service.description}
                                    {...register("description", {
                                        required: "Поле не может быть пустым"
                                    })}
                                />
                                <FormErrorMessage>
                                    {
                                        errors.description && errors.description.message
                                    }
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="startTime">Начало приёма</FormLabel>
                                <Input type="datetime-local"
                                       id="startTime"
                                       defaultValue={service.startOfReception.toDateString()}
                                       {
                                    ...register("startOfReception",{
                                        required: "Поле не может быть пустым"
                                    })
                                    }
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="endDate">Окончание приёма</FormLabel>
                                <Input type="datetime-local"
                                       id="endDate"
                                       defaultValue={service.endOfReception.toDateString()}
                                       {
                                    ...register("endOfReception",{
                                        required: "Поле не может быть пустым"
                                    })
                                       }
                                />
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