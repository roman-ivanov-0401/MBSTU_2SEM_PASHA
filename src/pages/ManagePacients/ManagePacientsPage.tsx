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
import { ManagePatientsDialog } from "./ManagePatientsDialog.tsx"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {patientSlice} from "../../store/slices";
import {IPatient} from "../../models";

export const ManagePacientsPage: FC = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const cancelRef = useRef<HTMLButtonElement>(null)
    const dispatch = useAppDispatch();
    const patients = useAppSelector(state => state.patientReducer.patients)
    const deleteHandler = (id: string): void => {
        dispatch(patientSlice.actions.deletePatient(id))
    }
    const [currentPatient, setCurrentPatient] = useState<IPatient | undefined>(undefined)
    const changePatientHandler = (_id: string) => {
        setCurrentPatient(patients.find(({ id }) => _id == id))
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
                Управление пациентами
            </Text>
            <TableContainer>
                <Table>
                    <TableCaption>
                        Пациенты
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
                        {
                            patients.map(({ id, name, middleName, SNILS, surname, phoneNumber }, index) =>
                                <Tr key={id}>
                                    <Td>
                                        { index + 1 }
                                    </Td>
                                    <Td>
                                        { surname }
                                    </Td>
                                    <Td>
                                        { name }
                                    </Td>
                                    <Td>
                                        { middleName }
                                    </Td>
                                    <Td>
                                        +7 { phoneNumber }
                                    </Td>
                                    <Td>
                                        { SNILS }
                                    </Td>
                                    <Td>
                                        <IconButton
                                            aria-label={"edit"}
                                            icon={<EditIcon/>}
                                            marginRight="10px"
                                            onClick={() => {changePatientHandler(id); onOpen()}}
                                        />
                                        <IconButton
                                            aria-label={"delete"}
                                            icon={<DeleteIcon/>}
                                            onClick={() => deleteHandler(id)}
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
            <ManagePatientsDialog isOpen={isOpen} onClose={onClose} ref={cancelRef} patient={currentPatient || {
                surname: "",
                name: "",
                middleName: "",
                SNILS: "",
                phoneNumber: "",
                id: ""

            }}/>
        </Box>
    )
}