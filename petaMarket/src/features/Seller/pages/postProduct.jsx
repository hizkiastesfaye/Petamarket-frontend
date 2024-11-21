import {useState } from "react"
import AddInventory from "../components/addInv"
import AddProduct from "../components/addProduct"
import {useSelector} from 'react-redux'

export default function PostProduct(){
    const token = useSelector((state)=>state.token)
    const firstname = useSelector((state)=>state.firstname)
    const role = useSelector((state)=>state.role)
    const [forms,setForms] = useState([])
    const [isDelete,setIsDelete] = useState(false)

    const addForm =()=>{
        setForms(prevForm=>
            [...prevForm,{id:prevForm.length+2}]
        )
        setIsDelete(true)

    }
        const deleteForm=()=>{
            setForms(prevForm=>{
            if (prevForm.length >= 1){
                if(prevForm.length == 1){
                    setIsDelete(false);
                    console.log('**********: ',prevForm.length)
                }
                return prevForm.slice(0,-1);
            }
            return prevForm
        })}
    return <>
            <div className="mx-auto rounded-2xl my-20 border-2 w-[calc(96%)] bg-gray-50 p-5">
                <div>
                    <AddProduct token={token} />
                </div>
                {forms.map((form)=>(
                <AddInventory key={form.id} index={form.id}  r/>
                ))}
                <div className="mt-10 flex justify-end gap-2 mr-10">
                    <button type="button" onClick={addForm} className="w-1/6 flex justify-center py-2 text-white rounded bg-blue-400 hover:bg-blue-600">Add Inventory</button>
                    {isDelete && <button type="button" onClick={deleteForm} className="w-1/6 flex justify-center py-2 text-white rounded bg-blue-400 hover:bg-blue-600">Delete Inventory</button>}
                </div>
            </div>
    </>
}