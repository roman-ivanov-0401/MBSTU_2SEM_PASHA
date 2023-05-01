import { FC } from "react"
import {Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text} from "@chakra-ui/react";
import {useForm, SubmitHandler} from "react-hook-form";

interface Fields{
    email: string
    password: string,
    repPassword: string
}

const onSubmit: SubmitHandler<Fields> = () => { }
export const RegisterPage: FC = () => {
    const {register,
        handleSubmit,
        formState: {errors} } = useForm <Fields>({mode: "onChange"})

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
                    <FormControl isInvalid={Boolean(errors.repPassword)}>
                        <FormLabel>Повторите пароль</FormLabel>
                        <Input
                            type='password'
                            {...register("repPassword", {
                                required: "Обязательное поле",
                                minLength: {
                                    value: 5,
                                    message: "Минимальное число символов - 5"
                                }
                            })}
                        />
                        <FormErrorMessage>
                            {errors.repPassword && errors.repPassword.message}
                        </FormErrorMessage>
                    </FormControl>
                    <Button type="submit">
                        Войти
                    </Button>
                </form>
            </Box>
        </Box>
    )
}