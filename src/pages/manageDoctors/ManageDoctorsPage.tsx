import { FC, useRef } from "react"
import {
    Box,
    Text,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Table,
    IconButton,
    useDisclosure
} from "@chakra-ui/react";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import { ManageDoctorsDialog } from "./ManageDoctorsDialog.tsx"

export const ManageDoctorsPage: FC = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const cancelRef = useRef<HTMLButtonElement>(null)
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
                Управление врачами
            </Text>
            <TableContainer>
                <Table>
                    <TableCaption>
                        Врачи
                    </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>
                                Номер
                            </Th>
                            <Th>
                                Фамилия
                            </Th>
                            <Th>
                                Имя
                            </Th>
                            <Th>
                                Отчество
                            </Th>
                            <Th>
                                Специализация
                            </Th>
                            <Th>
                                Действия
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>
                                1
                            </Td>
                            <Td>
                                Петров
                            </Td>
                            <Td>
                                Иван
                            </Td>
                            <Td>
                                Сергеевич
                            </Td>
                            <Td>
                                Хирург
                            </Td>
                            <Td>
                                <IconButton
                                    aria-label={"edit"}
                                    icon={<EditIcon/>}
                                    marginRight="10px"
                                    onClick={onOpen}
                                />
                                <IconButton
                                    aria-label={"delete"}
                                    icon={<DeleteIcon/>}
                                />
                            </Td>
                        </Tr>
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>
                                Номер
                            </Th>
                            <Th>
                                Фамилия
                            </Th>
                            <Th>
                                Имя
                            </Th>
                            <Th>
                                Отчество
                            </Th>
                            <Th>
                                Специализация
                            </Th>
                            <Th>
                                Действия
                            </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <ManageDoctorsDialog isOpen={isOpen} onClose={onClose} ref={cancelRef} doctor={{
                specialization: "",
                name: "",
                surname: "",
                middleName: "",
                id: ""
            }}/>
        </Box>
    )
}