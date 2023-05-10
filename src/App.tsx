import {useAppSelector} from "./hooks";
import {AdminRouter, NotAuthorizedRouter, UserRouter} from "./routers";
import {Roles} from "./models/IUser.ts";

function App() {
  const { roles } = useAppSelector(state => state.authReducer.user)
  if(roles.includes(Roles.ADMIN)) return <AdminRouter/>
  if(roles.includes(Roles.PATIENT)) return  <UserRouter/>
  return <NotAuthorizedRouter/>
}

export default App
