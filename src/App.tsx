import {useAppSelector} from "./hooks";
import {AdminRouter, NotAuthorizedRouter, UserRouter} from "./routers";

function App() {
  const { role } = useAppSelector(state => state.authReducer)
  if(role == "ADMIN") return <AdminRouter/>
  if(role == "USER") return  <UserRouter/>
  return <NotAuthorizedRouter/>
}

export default App
