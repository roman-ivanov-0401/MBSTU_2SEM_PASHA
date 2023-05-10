import {FC} from "react"
import {
    Box,
    Divider,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import {useAppSelector} from "../../hooks";

export const ProfilePage: FC = () => {
    const authUser = useAppSelector(state => state.authReducer.user);
    const authPatient = useAppSelector(state => state.patientReducer.patients.find(({ id }) => id == authUser.patientId))
    const userAppointments = useAppSelector(state => state.appointmentReducer.appointments.filter(({ patientId }) => patientId == authPatient?.id))
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
                            {authPatient?.surname}
                        </Text>
                        <Text fontSize="24px">
                        <span
                            style={{fontWeight: "700"}}
                        >Имя:&nbsp;
                        </span>
                            {authPatient?.name}
                        </Text>
                        <Text fontSize="24px">
                        <span
                            style={{fontWeight: "700"}}
                        >
                            Отчество:&nbsp;
                        </span>
                            {authPatient?.middleName}
                        </Text>
                        <Text fontSize="24px">
                        <span
                            style={{fontWeight: "700"}}
                        >
                            Контактный номер:&nbsp;
                        </span>
                            +7 { authPatient?.phoneNumber }
                        </Text>
                        <Text fontSize="24px">
                        <span
                            style={{fontWeight: "700"}}
                        >
                            ОМС:&nbsp;
                        </span>
                            {authPatient?.SNILS}
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
                                {
                                    userAppointments.map(({ id, amenitieName, doctorName, date }, index) =>
                                        <Tr key={id}>
                                            <Td>
                                                { index + 1 }
                                            </Td>
                                            <Td>
                                                { doctorName }
                                            </Td>
                                            <Td>
                                                { amenitieName }
                                            </Td>
                                            <Td>
                                                { date }
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