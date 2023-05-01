import { FC } from "react"
import {Outlet} from "react-router-dom";
import {Navigation} from "../components";
import {notAuthorizedRoutes} from "../routers/routes.ts";

export const NotAuthorizedLayout: FC = () => {
    return(
        <>
            <Navigation points={notAuthorizedRoutes}/>
            <Outlet/>
        </>
    )
}