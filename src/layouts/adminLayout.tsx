import { FC } from "react"
import {Outlet} from "react-router-dom";
import {Navigation} from "../components";
import {adminRoutes} from "../routers/routes.ts";

export const AdminLayout: FC = () => {
    return(
        <>
            <Navigation points={adminRoutes}/>
            <Outlet/>
        </>
    )
}