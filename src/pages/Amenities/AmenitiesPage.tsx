import { FC } from "react"
import {
    Box, Button,
    Select,
    Text
} from "@chakra-ui/react";
import { amenitieApi } from "../../service/amenitie.service.ts"

export const AmenitiesPage: FC = () => {

    const { data } = amenitieApi.useGetAllAmenitiesQuery()
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
                    data && data.map(item =>
                        <option key={item.id}>
                            {item.name}
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

            </Select>
            <Box display="flex" justifyContent="end" marginTop="10px">
                <Button variant="solid" colorScheme="teal" isDisabled={false}>
                    Записаться
                </Button>
            </Box>
        </Box>
    )
}