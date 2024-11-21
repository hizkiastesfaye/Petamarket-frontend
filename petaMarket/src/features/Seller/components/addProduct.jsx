import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import {useState } from "react"
import { useSelector } from "react-redux"

export default function AddProduct({token}){
    const [isButtonDisabled,setIsButtonDisabled] = useState(false)
    const firstname = useSelector((state)=>state.firstname)
    const role = useSelector((state)=>state.role)
    // const token = useSelector((state)=>state.token)
    const [productInput,setProductInput] = useState({
        name:'',
        catagory:'',
        sku:'',
        stockLevel:'',
        description:''
    })
    const [invInput,setInvInput] = useState({
        productSku:'',
        invSku:'',
        invStockLevel:'',
        price:'',
        location:''
    })
    const [formError,setFormError] = useState({})
    const handleProductChange=(e)=>{
        const {name,value} = e.target
        e.preventDefault()
        console.log("handleproduct vlaue: ", name,value)
        setProductInput({...productInput,[name]:value})
        if (name==='sku'){
            console.log('========== ',name,value)
            setInvInput({...invInput,productSku:value})
        }
    }
    const handleInvChange=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        console.log('handle inventory value: ',name,value)
        setInvInput({...invInput,[name]:value})
    }

    const validatePostForm =()=>{
        let formErrors = {}
        if (!productInput.name.trim()) formErrors.name='product name is required';
        if (!productInput.catagory) formErrors.catagory='select the product catagory';
        if (!productInput.sku) formErrors.sku='product sku required';
        if(!productInput.stockLevel) formErrors.stockLevel='stockLevel is required';
        if (!productInput.description) formErrors.description='description is required';

        if (!invInput.invSku) formErrors.invSku='inventory SKU is required';
        if (!invInput.invStockLevel) formErrors.invStockLevel='inv stockLevel is required';
        if (!invInput.price) formErrors.price = 'price is required';
        if(!invInput.location) formErrors.location='location is required';
        console.log('The error is: ', formErrors)
        setFormError(formErrors)
        return {isvalid:Object.keys(formError).length === 0, formErrors}
    }
    const postProductMut = useMutation({
        mutationFn:(newProduct)=> axios.post('http://localhost:3004/product/add',newProduct,{
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }),
        onError:(error)=> console.log('The post product Error: ',error),
        onSuccess:(data)=> console.log('succeffuly posted: ',data.data)
    })
    const postInventoryMut = useMutation({
        mutationFn:(newInv)=> axios.post('http://localhost:3004/inventory/add',newInv,{
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
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
            console.log('First name is: ',firstname,role,token)
            postProductMut.mutate(productInput)
            postInventoryMut.mutate(invInput)
            setIsButtonDisabled(true)
        }
    }
    return <>
        <form>
            <h1 className="text-2xl mx-auto w-fit my-10 font-bold">Add product</h1>
            <div>
                <div className="md:flex md:justify-between md:gap-1 sm:block">
                    <div className="flex justify-between mt-4 items-center px-10 mb-4 md:block md:px-2">
                        <label htmlFor="name">Product name:</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            value={productInput.name}
                            onChange={handleProductChange}
                            placeholder="product name"
                            className="w-[calc(70%)] md:w-[calc(80%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                        />
                        <div className="mx-auto w-fit text-sm text-red-500">
                            {formError.name && <p>** {formError.name}</p>}
                        </div>
                    </div>

                    <div className="flex justify-between mt-4 items-center px-10 mb-4 md:block md:px-2">
                        <label htmlFor="catagory">Catagory:</label>
                        <select id="catagory" name='catagory' value={productInput.catagory} onChange={handleProductChange} className="w-[calc(70%)] md:w-[calc(80%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1">
                            <option className="text-gray-400" value="">select</option>
                            <option value="smartphone">smartphone</option>
                            <option value="laptop">laptop</option>
                            <option value="keyboard">keyboard</option>
                        </select>
                        <div className="mx-auto w-fit text-sm text-red-500">
                            {formError.catagory && <p>** {formError.catagory}</p>}
                        </div>
                    </div>

                    <div className="flex justify-between mt-4 items-center px-10 mb-4 md:block md:px-2">
                        <label htmlFor='productSku'>Product Sku:</label>
                        <select id='productSku' name='sku' value={productInput.sku} onChange={handleProductChange} className="w-[calc(70%)] md:w-[calc(80%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1">
                            <option className="text-gray-400" value="">select</option>
                            <option value='sm-s9-8'>sm-s9-8</option>
                            <option value='pc-dell-16'>pc-dell-16</option>
                            <option value='pc-hp-32'>pc-hp-32</option>
                        </select>
                        <div className="mx-auto w-fit text-sm text-red-500">
                            {formError.sku && <p>** {formError.sku}</p>}
                        </div>
                    </div>
                    <div className="flex justify-between px-10 mt-4 items-center md:block md:px-2 lg:w-[calc(20%)]">
                        <label htmlFor="stockLevel">Stock Level:</label>
                        <input 
                            type="number" 
                            id="stockLevel"
                            name="stockLevel"
                            value={productInput.stockLevel}
                            onChange={handleProductChange}
                            min='0'
                            placeholder="0"
                            className="w-[calc(70%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                        />                  
                        <div className="mx-auto w-fit text-sm text-red-500">
                            {formError.stockLevel && <p>** {formError.stockLevel}</p>}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between px-10 md:pl-2 md:pr-40 mt-4 items-center">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        type="text" 
                        id="description"
                        name="description"
                        value={productInput.description}
                        onChange={handleProductChange}
                        rows={3}
                        cols={10}
                        placeholder="description"
                        className="lg:w-[calc(90%)] md:w-[calc(90%)] sm:w-[calc(70%)] scroll border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                    />
                </div>
                <div className="mx-auto w-fit text-sm text-red-500">
                    {formError.description && <p>** {formError.description}</p>}
                </div>
            </div>
            <hr className="w-[calc(90%)] mx-auto my-10" />
            <div>
                <h1 className="text-2xl w-fit mx-auto font-bold my-5">Add Inventory 1</h1>
                <div className="md:flex md:justify-between md:gap-1 sm:block">
                    <div className="flex justify-between mt-4 items-center px-10 mb-4 md:block md:px-2">
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
                        <label htmlFor="invStockLevel">Inventory Stock Level:</label>
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
                    <div className="flex justify-between px-10 mt-4 items-center md:block md:px-2 lg:w-[calc(15%)]">
                        <label htmlFor="price">Price:</label>
                        <input 
                            type="number"
                            min='0'
                            step='0.01' 
                            id="price"
                            name="price"
                            value={invInput.price}
                            onChange={handleInvChange}
                            placeholder='0.00'
                            className="w-[calc(70%)] md:w-[calc(80%)]  border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                        />
                    
                        <div className="mx-auto w-fit text-sm text-red-500">
                                {formError.price && <p>** {formError.price}</p>}
                        </div>
                    </div>

                    <div className="flex justify-between px-10 mt-4 items-center md:block md:px-2 lg:w-[calc(20%)]">
                            <label htmlFor="location">location:</label>
                            <input 
                                type="text" 
                                id="location"
                                name="location"
                                value={invInput.location}
                                onChange={handleInvChange}
                                placeholder="location"
                                className="w-[calc(70%)] lg:w-[calc(80%)]  border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                            />
                        
                        <div className="mx-auto w-fit text-sm text-red-500">
                            {formError.location && <p>** {formError.location}</p>}
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex justify-end mr-10">
                        <button type="button" disabled={isButtonDisabled} onClick={handleSubmit} className={`w-1/4 flex justify-center py-2 text-white rounded ${isButtonDisabled ? 'bg-gray-500' : 'bg-blue-400 hover:bg-blue-600'}`}>Save</button>
                </div>
            </div>
            <hr className="w-[calc(90%)] mx-auto my-10 border-t-4" />
        </form>
    </>
}