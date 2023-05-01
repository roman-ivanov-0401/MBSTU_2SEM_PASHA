import { FC } from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import {NotAuthorizedLayout} from "../layouts";
import {LoginPage, RegisterPage} from "../pages";

const NotAuthorizedRouter: FC = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<NotAuthorizedLayout/>}
            >
                <Route
                    index
                    element={<LoginPage/>}
                />
                <Route
                    path="login"
                    element={<LoginPage/>}
                />
                <Route
                    path="register"
                    element={<RegisterPage/>}
                />
                <Route
                    path="*"
                    element={
                        <Navigate to={"login"}
                        />
                }/>
            </Route>
        </Routes>
    )
}

export { NotAuthorizedRouter }