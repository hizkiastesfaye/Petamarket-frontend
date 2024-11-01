import { Routes,Route} from "react-router-dom";
import Register from "./pages/register";
import User from "./pages/User"
const userRoute=(
    <>
        <Routes path="user" element={<User />}>
            <Route path='register' element={<Register />} />
        </Routes>
    </>
)

export default userRoute