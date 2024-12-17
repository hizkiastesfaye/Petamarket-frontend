import { useNavigate } from "react-router-dom"


export default function Notification(){
    // const navigate = useNavigate()
    const lists = ['notfication1','notfification2','notfication3','notfication4','notfication5','notfication6']
    const element = []
    for (let i =0;i<lists.length;i++){
        element.push(
            <li key={i} className="bg-gray-200 mb-1 px-2 hover:font-bold hover:cursor-pointer">
                {lists[i]}
            </li>
        )
    }
    return <nav className="absolute -left-32 top-7 rounded-2xl w-80 border-2 border-[#292358] bg-white">
        <div className="border-b-2 my-2 rounded-t-xl ">
            <p className="ml-[calc(40%)]">Notification</p>
        </div>
        <div className="bg-slate-50 rounded-b-xl pb-1 max-h-52 overflow-y-scroll">
            {/* <button onClick={()=>{navigate('/home')}} className=" " role="menu">Notification</button> */}
            <ul>{element}</ul>
        </div>
    </nav>
}
