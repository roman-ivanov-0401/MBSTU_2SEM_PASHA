import {FC, useState} from "react"
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react";
import {useForm, SubmitHandler} from "react-hook-form";
import { Fields } from "./loginPage.types.ts"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authSlice} from "../../store/slices";



export const LoginPage: FC = () => {
    const users = useAppSelector(state => state.authReducer.users)

    const [requestError, setRequestError] = useState<boolean>(false)

    const dispatch = useAppDispatch()
    const {register,
        handleSubmit,
        formState: {errors} } = useForm <Fields>({mode: "onChange"})
    const onSubmit: SubmitHandler<Fields> = ({email, password}) => {
        const index = users.findIndex((u) => u.email == email && u.password == password)
        if(index != -1){
            dispatch(authSlice.actions.setUser(users[index]))
        }
        else setRequestError(true)
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
                  Вход в систему
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
                  <Button type="submit">
                      Войти
                  </Button>
              </form>
              {
                  requestError &&
                  <Text color="#ff0000">
                      Ошибка авторизации. Неверный адресс электронной почты или пароль.
                  </Text>
              }
          </Box>
      </Box>
    )
}