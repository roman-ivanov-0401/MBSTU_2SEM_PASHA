import { FC } from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import {AdminLayout} from "../layouts";
import {
    ManageDoctorsPage,
    ManagePacientsPage,
    ManageServicesPage,
    ProfilePage,
} from "../pages";

const AdminRouter: FC = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<AdminLayout/>}>
                <Route index element={
                    <Navigate to={"manageServices"}/>
                }/>
                <Route path="manageAmenities" element={<ManageServicesPage/>}/>
                <Route path="manageDoctors" element={<ManageDoctorsPage/>}/>
                <Route path="managePatients" element={<ManagePacientsPage/>}/>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="*" element={
                    <Navigate to={"manageServices"}/>
                }/>
            </Route>
        </Routes>
    )
}



export { AdminRouter }