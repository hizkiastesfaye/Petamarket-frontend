import { useNavigate } from "react-router-dom"


export default function Notification(){
    const navigate = useNavigate()
    return <nav className="bg-green-500 absolute w-[calc(20%)] mx-auto">
        <button onClick={()=>{navigate('/home')}} className="bg-blue-400 " role="menu">Notification</button>
        <br/>
        <p>Notification</p>
        <p>Notification</p>
        <p>Notification</p>
        <p>Notification</p>
    </nav>
}