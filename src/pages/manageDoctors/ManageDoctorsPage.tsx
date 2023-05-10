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
import { ManageDoctorsDialog } from "./ManageDoctorsDialog.tsx"
import {useAppDispatch, useAppSelector} from "../../hooks";
import { doctorSlice } from "../../store/slices";
import {IDoctor} from "../../models";

export const ManageDoctorsPage: FC = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    const cancelRef = useRef<HTMLButtonElement>(null)
    const doctors = useAppSelector(state => state.doctorReducer.doctors)
    const dispatch = useAppDispatch();
    const deleteDoctorHander = (id: string): void => {
        dispatch(doctorSlice.actions.deleteDoctor(id))
    }
    const editDoctorHandler = (_id: string) => {
        setCurrentDoctor(
            doctors.find(({ id }) => _id == id)
        )
    }
    const [currentDoctor, setCurrentDoctor] = useState<IDoctor | undefined>(undefined);
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
                        {
                            doctors.map(({ id, name, middleName, surname, specialization}, index) =>
                                <Tr key={id}>
                                    <Td>
                                        {index + 1}
                                    </Td>
                                    <Td>
                                        {surname}
                                    </Td>
                                    <Td>
                                        {name}
                                    </Td>
                                    <Td>
                                        {middleName}
                                    </Td>
                                    <Td>
                                        {specialization}
                                    </Td>
                                    <Td>
                                        <IconButton
                                            aria-label={"edit"}
                                            icon={<EditIcon/>}
                                            marginRight="10px"
                                            onClick={() => {editDoctorHandler(id); onOpen()}}
                                        />
                                        <IconButton
                                            aria-label={"delete"}
                                            icon={<DeleteIcon/>}
                                            onClick={() => deleteDoctorHander(id)}
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
                                Специализация
                            </Th>
                            <Th>
                                Действия
                            </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <ManageDoctorsDialog isOpen={isOpen} onClose={onClose} ref={cancelRef} doctor={currentDoctor || {
                specialization: "",
                name: "",
                surname: "",
                middleName: "",
                id: ""
            }}/>
        </Box>
    )
}