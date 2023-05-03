import { FC } from "react"
import {
    Box,
    Table,
    Text,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Divider,
} from "@chakra-ui/react";

export const ProfilePage: FC = () => {
    return(
        <Box
            marginTop={20}
            padding="0px 20px"
        >
            <Text
                fontSize="40px"
                fontWeight={700}
                marginBottom="10px"
            >
                Профиль
            </Text>
            <Box
                display="flex"
                flexDirection="row"
                gap="10px"
                padding="0px 10px"
                justifyContent="space-between"
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    flexGrow={1}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="10px"
                        width="600px"
                        padding="10px"
                    >
                        <Text fontSize="24px">
                        <span
                            style={{fontWeight: "700"}}
                        >
                            Фамилия:&nbsp;
                        </span>
                            Петров
                        </Text>
                        <Text fontSize="24px">
                        <span
                            style={{fontWeight: "700"}}
                        >Имя:&nbsp;
                        </span>
                            Иван
                        </Text>
                        <Text fontSize="24px">
                        <span
                            style={{fontWeight: "700"}}
                        >
                            Отчество:&nbsp;
                        </span>
                            Сергеевич
                        </Text>
                        <Text fontSize="24px">
                        <span
                            style={{fontWeight: "700"}}
                        >
                            Контактный номер:&nbsp;
                        </span>
                            +7 (910) 456-45-67
                        </Text>
                        <Text fontSize="24px">
                        <span
                            style={{fontWeight: "700"}}
                        >
                            ОМС:&nbsp;
                        </span>
                            123455623
                        </Text>
                    </Box>
                </Box>
                <Divider orientation="vertical" height={"inherit"}/>
                <Box
                    flexBasis="49%"
                >

                    <TableContainer>
                        <Table variant="striped" colorScheme="teal">
                            <TableCaption>
                                Спикок записей
                            </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>
                                        Номер
                                    </Th>
                                    <Th>
                                        Название
                                    </Th>
                                    <Th>
                                        Врач
                                    </Th>
                                    <Th>
                                        Дата
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        1
                                    </Td>
                                    <Td>
                                        Запись 1
                                    </Td>
                                    <Td>
                                        Услуга 1
                                    </Td>
                                    <Td>
                                        01.01.2001
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        1
                                    </Td>
                                    <Td>
                                        Услуга 2
                                    </Td>
                                    <Td>
                                        Врач 2
                                    </Td>
                                    <Td>
                                        01.01.2001
                                    </Td>
                                </Tr>
                                <Tr>
                                <Td>
                                    1
                                </Td>
                                <Td>
                                    Услуга 3
                                </Td>
                                <Td>
                                    Врач 3
                                </Td>
                                <Td>
                                    01.01.2001
                                </Td>
                            </Tr>
                            </Tbody>
                            <Tfoot>
                                <Tr>
                                    <Th>
                                        Номер
                                    </Th>
                                    <Th>
                                        Название
                                    </Th>
                                    <Th>
                                        Врач
                                    </Th>
                                    <Th>
                                        Дата
                                    </Th>
                                </Tr>
                            </Tfoot>
                        </Table>
                    </TableContainer>
                </Box>

            </Box>

        </Box>
    )
}