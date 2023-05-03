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
import { ManagePatientsDialog } from "./ManagePatientsDialog.tsx"

export const ManagePacientsPage: FC = () => {
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
                Управление пациентами
            </Text>
            <TableContainer>
                <Table>
                    <TableCaption>
                        Услуги
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
                                Контактный номер
                            </Th>
                            <Th>
                                ОМС
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
                                +7 (910) 123 12 34
                            </Td>
                            <Td>
                                123456
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
                                Контактный номер
                            </Th>
                            <Th>
                                ОМС
                            </Th>
                            <Th>
                                Действия
                            </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <ManagePatientsDialog isOpen={isOpen} onClose={onClose} ref={cancelRef} patient={{
                surname: "Петров",
                name: "",
                middleName: "",
                SNILS: "",
                phoneNumber: "",
                id: ""

            }}/>
        </Box>
    )
}