import { FC } from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import {UserLayout} from "../layouts";
import {ProfilePage, AmenitiesPage} from "../pages";

const UserRouter: FC = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<UserLayout/>}>
                <Route index element={
                    <Navigate to={"services"}/>
                }/>
                <Route path="services" element={<AmenitiesPage/>}/>
                <Route path="register" element={<ProfilePage/>}/>
                <Route path="*" element={
                    <Navigate to={"services"}/>
                }/>
            </Route>
        </Routes>
    )
}

export { UserRouter }