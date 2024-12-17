import { useNavigate } from "react-router-dom"

export default function UserHeader(){

    const navigate= useNavigate()
    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})
        navigate('/user/login')
    }
    return <div className="absolute right-2  rounded-2xl w-44 border-2 border-[#292358] bg-white">
        <div className="border-b-2 rounded-t-lg h-10 pt-2">
            <p className="ml-[calc(10%)]">Firstname,</p>
        </div>
        <ul className="rounded-b-lg ml-3 my-3 ">
            <li className="hover:underline mb-1">My Profile</li>
            <li className="hover:underline my-1">My Account</li>
            <li className="hover:underline my-1">My address</li>
            <li className="hover:underline my-1">Orders</li>
            <li className="hover:underline my-1">Message</li>
            <li className="hover:underline my-1">need help?</li>
            <li className="hover:underline my-1">Report issue</li>
        </ul>
        <div className="border-t-2"></div>
        <div className=" ml-[calc(30%)] my-3 hover:font-bold hover:text-blue-500">
            <button onClick={handleLogout}>Sign out</button>
        </div>
    </div>
}