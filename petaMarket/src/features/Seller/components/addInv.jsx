import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import {useState } from "react"
import { useSelector } from "react-redux"


export default function AddInventory({index}){
    const firstname = useSelector((state)=>state.firstname)
    const role = useSelector((state)=>state.role)
    const token = useSelector((state)=>state.token)

    const [invInput,setInvInput] = useState({
        productSku:'',
        invSku:'',
        invStockLevel:'',
        price:'',
        location:'',
        image:null,
    })
    const [formError,setFormError] = useState({})
    const [isButtonDisabled,setIsButtonDisabled] = useState(false)

    const handleInvChange=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        console.log('handle inventory value: ',name,value)
        setInvInput({...invInput,[name]:value})
    }

    const handleFileChange=(e)=>{
        const image1= e.target.files[0]
        setInvInput({...invInput,image: image1})
    }

    const validatePostForm =()=>{
        let formErrors = {}
        if (!invInput.invSku) formErrors.invSku='inventory SKU is required';
        if (!invInput.invStockLevel) formErrors.invStockLevel='inventory stock level is required';
        if (!invInput.price) formErrors.price = 'price is required';
        if(!invInput.location) formErrors.location='location is required';
        console.log('The error is: ', formErrors)
        setFormError(formErrors)
        return {isvalid:Object.keys(formError).length === 0, formErrors}
        
    }

    const postInventoryMut = useMutation({
        mutationFn:(newInv)=> axios.post('http://localhost:3004/inventory/add',newInv,{
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        }),
        onError:(error)=> console.log('The post product Error: ',error),
        onSuccess:(data)=> console.log('succeffuly posted: ',data.data)
    })
    const handleSubmit=()=>{
        const {isvalid,formErrors} = validatePostForm()
        if(!isvalid){
            console.log('The Error is: ',formErrors)
        }
        else{
            const formData = new FormData();
            for (const key in invInput){
                formData.append(key,invInput[key])
            }
            console.log('First name is: ',firstname,role,token)
            postInventoryMut.mutate(formData)
            setIsButtonDisabled(true)
        }
    }

    return <>
        <form className="mx-auto rounded-2xl my-20 border-2 w-[calc(96%)] bg-gray-50 p-5">
            <hr className="w-[calc(90%)] mx-auto my-10" />
            <div>
                <h1 className="text-2xl w-fit mx-auto font-bold my-5">Add Inventory {index}</h1>
                <div className="md:flex md:justify-between md:gap-1 sm:block">
                    <div className="flex justify-between mt-4 items-center px-10 mb-4 md:block md:px-2 md:w-[calc(50%)] lg:w-[calc(20%)]">
                        <label htmlFor='productSku'>Product Sku:</label>
                        <select id='productSku' name='productSku' value={invInput.productSku} onChange={handleInvChange} className="w-[calc(70%)] md:w-[calc(90%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1">
                            <option className="text-gray-400" value="">select</option>
                            <option value='sm-s9-8'>sm-s9-8</option>
                            <option value='pc-dell-16'>pc-dell-16</option>
                            <option value='pc-hp-32'>pc-hp-32</option>
                        </select>
                        <div className="mx-auto w-fit text-sm text-red-500">
                            {formError.sku && <p>** {formError.sku}</p>}
                        </div>
                    </div>

                    <div className="flex justify-between mt-4 items-center px-10 mb-4 md:block md:px-2 md:w-[calc(60%)] lg:w-[calc(30%)]">
                        <label htmlFor="invSku">Inventroy SKU:</label>
                        <select id='invSku' name='invSku' value={invInput.invSku} onChange={handleInvChange} className="w-[calc(70%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1">
                            <option className="text-gray-400" value="">select</option>
                            <option value='sm-s9-8-bl-32'>sm-s9-8-bl-32</option>
                            <option value='pc-dell-16-16-256'>pc-dell-16-16-256</option>
                            <option value='pc-hp-32-16-512'>pc-hp-32-16-512</option>
                        </select>
                    
                        <div className="mx-auto w-fit text-sm text-red-500">
                            {formError.invSku && <p>** {formError.invSku}</p>}
                        </div>
                    </div>
                    <div className="flex justify-between mt-4 items-center px-10 mb-4 md:block md:px-2">
                        <label htmlFor="invStockLevel">StockLevel:</label>
                        <input 
                            type="number" 
                            id="invStockLevel"
                            name="invStockLevel"
                            value={invInput.invStockLevel}
                            onChange={handleInvChange}
                            min='0'
                            placeholder="0"
                            className="w-[calc(70%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                        />
                   
                        <div className="mx-auto w-fit text-sm text-red-500">
                                {formError.invStockLevel && <p>** {formError.invStockLevel}</p>}
                        </div>
                    </div>
                    <div className="flex justify-between px-10 mt-4 items-center md:block md:px-2">
                        <label htmlFor="price" >Price:</label>
                        <input 
                            type="number"
                            min='0'
                            step='0.01' 
                            id="price"
                            name="price"
                            value={invInput.price}
                            onChange={handleInvChange}
                            placeholder='0.00'
                            className="w-[calc(70%)] lg:w-[calc(90%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                        />
                    
                        <div className="mx-auto w-fit text-sm text-red-500">
                                {formError.price && <p>** {formError.price}</p>}
                        </div>
                    </div>
                    <div className="flex justify-between px-10 mt-4 items-center md:block md:px-2 ">
                        <label htmlFor="location" className="w-[calc(40%)]">location:</label>
                        <input 
                            type="text" 
                            id="location"
                            name="location"
                            value={invInput.location}
                            onChange={handleInvChange}
                            placeholder="location"
                            className="w-[calc(70%)] lg:w-[calc(80%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                        />
                        
                        <div className="mx-auto w-fit text-sm text-red-500">
                            {formError.location && <p>** {formError.location}</p>}
                        </div>
                    </div>
                    <div>
                        <input type="file" onChange={handleFileChange} />
                    </div>
                </div>
                <div className="mt-10 flex justify-end mr-10">
                        <button type="button" disabled={isButtonDisabled} onClick={handleSubmit} className={`w-1/4 flex justify-center py-2 text-white rounded  ${isButtonDisabled ? 'bg-gray-500' : 'bg-blue-400 hover:bg-blue-600'}`}>Save</button>
                </div>
            </div>
        </form>
    </>
}