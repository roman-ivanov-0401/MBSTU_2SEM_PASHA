import { FC } from "react"
import {Outlet} from "react-router-dom";
import {Navigation} from "../components";
import {userRoutes} from "../routers/routes.ts";

export const UserLayout: FC = () => {
    return(
        <>
            <Navigation points={userRoutes}/>
            <Outlet/>
        </>
    )
}