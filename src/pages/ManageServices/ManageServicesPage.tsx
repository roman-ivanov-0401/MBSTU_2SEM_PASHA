import {FC, useRef, useState} from "react"
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
import {useAppDispatch, useAppSelector} from "../../hooks";
import {amenitieSlice} from "../../store/slices";
import {IAmenitie} from "../../models";

export const ManageServicesPage: FC = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const dispatch = useAppDispatch()
    const cancelRef = useRef<HTMLButtonElement>(null)
    const amenities = useAppSelector(state => state.amenitieReducer.amenities)
    const [ currentAmenitie, setCurrentAmenitie ] = useState<IAmenitie | undefined>(undefined)
    const deleteAmenitieHandler = (_id: string): void => {
        dispatch(amenitieSlice.actions.deleteAmenitie(_id));
    }
    const editAmenitieHandler = (_id: string) => {
        setCurrentAmenitie(
            amenities.find(({ id }) => id == _id)
        )

    }
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
                        {
                            amenities.map(({ id, name, startOfReception, endOfReception, description}, index) =>
                                <Tr key={id}>
                                    <Td>
                                        { index + 1 }
                                    </Td>
                                    <Td>
                                        { name }
                                    </Td>
                                    <Td>
                                        { description }
                                    </Td>
                                    <Td>
                                        { startOfReception }
                                    </Td>
                                    <Td>
                                        { endOfReception }
                                    </Td>
                                    <Td>
                                        <IconButton
                                            aria-label={"edit"}
                                            icon={<EditIcon/>}
                                            marginRight="10px"
                                            onClick={() => {editAmenitieHandler(id); onOpen()}}
                                        />
                                        <IconButton
                                            onClick={() => deleteAmenitieHandler(id)}
                                            aria-label={"delete"}
                                            icon={<DeleteIcon/>}
                                        />
                                    </Td>
                                </Tr>
                            )
                        }

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
            <ManageServiceDialog isOpen={isOpen} onClose={onClose} ref={cancelRef} service={currentAmenitie || {
                description: "",
                endOfReception: "",
                name: "",
                id: "",
                startOfReception: ""
            }}/>
        </Box>
    )
}