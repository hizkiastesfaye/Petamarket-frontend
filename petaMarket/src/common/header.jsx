import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
export default function Header(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})
        navigate('/user/login')
    }
    return<>
        <h1> This Header file </h1>
        <button onClick={handleLogout}>Logout</button>
        <br />
        <br />
    </>
}