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
import { ManageServiceDialog } from "./ManageServiceDialog.tsx"

export const ManageServicesPage: FC = () => {
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
                Управление услугами
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
                                Название
                            </Th>
                            <Th>
                                Описание
                            </Th>
                            <Th>
                                Начало приёма
                            </Th>
                            <Th>
                                Окончание приёма
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
                                Название1
                            </Td>
                            <Td>
                                Описание1
                            </Td>
                            <Td>
                                {
                                    new Date().toDateString()
                                }
                            </Td>
                            <Td>
                                {
                                    new Date().toDateString()
                                }
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
                                Название
                            </Th>
                            <Th>
                                Описание
                            </Th>
                            <Th>
                                Начало приёма
                            </Th>
                            <Th>
                                Окончание приёма
                            </Th>
                            <Th>
                                Действия
                            </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <ManageServiceDialog isOpen={isOpen} onClose={onClose} ref={cancelRef} service={{
                description: "",
                endOfReception: new Date(),
                name: "",
                id: "",
                startOfReception: new Date()
            }}/>
        </Box>
    )
}