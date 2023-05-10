import { FC } from "react"
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    Text
} from "@chakra-ui/react";
import {useForm, SubmitHandler} from "react-hook-form";
import {Fields} from "./registerPage.types.ts"
import {useAppDispatch} from "../../hooks";
import {authSlice} from "../../store/slices";
import {IPatient} from "../../models";
import {IUser, Roles} from "../../models/IUser.ts";
import {patientSlice} from "../../store/slices";


export const RegisterPage: FC = () => {
    const {register,
        handleSubmit,
        formState: {errors, isValid} } = useForm <Fields>({mode: "onChange"})
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<Fields> = (
        {email, password, name, middleName, SNILS, surname, phoneNumber}
    ) => {
        const newPatient: IPatient = {
            id: String(Math.random()),
            middleName,
            SNILS,
            phoneNumber,
            name,
            surname
        }

        dispatch(patientSlice.actions.addPatient(newPatient))

        const newUser: IUser = {
            _id: String(Math.random()),
            roles: [Roles.PATIENT],
            patientId: newPatient.id,
            email,
            password
        }

        dispatch(authSlice.actions.addUser(newUser))

        dispatch(authSlice.actions.setUser(newUser))
    }

    return(
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100vw"}
            height={"100vh"}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
            >
                <Text fontSize="5xl">
                    Регистрация
                </Text>
                <form
                    style={{
                        width: 500,
                        display: "flex",
                        flexDirection: "column",
                        gap: 15
                    }}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Box display="flex" gap={5}>
                        <Box display="flex" flexDirection="column">
                            <FormControl isInvalid={Boolean(errors.email)}>
                                <FormLabel>Почта</FormLabel>
                                <Input
                                    type='email'
                                    {...register("email", {
                                        required: "Обязательное поле",
                                        pattern: {
                                            value: /(.+)@(.+){2,}\.(.+){2,}/,
                                            message: "Введено некорректное значение"
                                        },
                                        minLength: {
                                            value: 5,
                                            message: "Минимальное число символов - 5"
                                        }
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.email && errors.email.message}
                                </FormErrorMessage>

                            </FormControl>
                            <FormControl isInvalid={Boolean(errors.password)}>
                                <FormLabel>Пароль</FormLabel>
                                <Input
                                    type='password'
                                    {...register("password", {
                                        required: "Обязательное поле",
                                        minLength: {
                                            value: 5,
                                            message: "Минимальное число символов - 5"
                                        }
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.password && errors.password.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={Boolean(errors.surname)}>
                                <FormLabel>Фамилия</FormLabel>
                                <Input
                                    {...register("surname", {
                                        required: "Обязательное поле",
                                        pattern: {
                                            value: /^[А-Я]([А-Я]|[а-я])*/,
                                            message: "Некорректное значение"
                                        }
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.surname && errors.surname.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={Boolean(errors.name)}>
                                <FormLabel>Имя</FormLabel>
                                <Input
                                    {...register("name", {
                                        required: "Обязательное поле",
                                        pattern: {
                                            value: /^[А-Я]([А-Я]|[а-я])*/,
                                            message: "Некорректное значение"
                                        }
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.name && errors.name.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Box>
                        <Box display="flex" flexDirection="column">
                            <FormControl isInvalid={Boolean(errors.middleName)}>
                                <FormLabel>Отчество</FormLabel>
                                <Input
                                    {...register("middleName", {
                                        required: "Обязательное поле",
                                        pattern: {
                                            value: /^[А-Я]([А-Я]|[а-я])*/,
                                            message: "Некорректное значение"
                                        }
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.middleName && errors.middleName.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={Boolean(errors.phoneNumber)}>
                                <FormLabel>Номер телефона</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon children='+7' />
                                    <Input
                                        placeholder={"(123)-456-78-90"}
                                        {...register("phoneNumber", {
                                            required: "Обязательное поле",
                                            pattern: {
                                                value: /^\(\d\d\d\)-\d\d\d-\d\d-\d\d$/,
                                                message: "Некорректный формат"
                                            }
                                        })}
                                    />
                                </InputGroup>
                                <FormErrorMessage>
                                    {errors.middleName && errors.middleName.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={Boolean(errors.SNILS)}>
                                <FormLabel>ОМС</FormLabel>
                                <Input
                                    {...register("SNILS", {
                                        required: "Обязательное поле",
                                        pattern: {
                                            value: /^\d{16}$/,
                                            message: "Некорректное значение"
                                        }
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.SNILS && errors.SNILS.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Box>
                    </Box>
                    <Button type="submit" disabled={!isValid}>
                        Зарегистрироваться
                    </Button>
                </form>
            </Box>
        </Box>
    )
}