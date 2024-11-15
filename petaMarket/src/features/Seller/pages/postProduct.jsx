import {useState } from "react"

export default function PostProduct(){
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
    const handleProductSubmit=(e)=>{
        const {name,value} = e.target
        if(name != '')
        e.preventDefault()
        console.log("handleproduct vlaue: ", name,value)
        setProductInput({...productInput,[name]:value})
    }
    const handleInvSubmit=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        console.log('handle inventory value: ',name,value)
        setInvInput({...invInput,[name]:value})
    }
    return <>
        <form className="mx-auto rounded-2xl my-20 border-2 w-[calc(70%)] bg-gray-50 p-5">
            <h1 className="text-2xl mx-auto w-fit my-10 font-bold">Add product</h1>
            <div>
                <div className="flex justify-between px-10 mb-4 items-center mb-4">
                    <label htmlFor="name">Product name:</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={productInput.name}
                        onChange={handleProductSubmit}
                        placeholder="product name"
                        className="w-[calc(70%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                    />
                </div>
                <div className="flex justify-between px-10 mb-4">
                    <label htmlFor="catagory">Catagory:</label>
                    <select id="catagory" name='catagory' value={productInput.catagory} onChange={handleProductSubmit} className="w-[calc(70%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1">
                        <option className="text-gray-400" value="">select</option>
                        <option value="option 1">Option 1</option>
                        <option value="option 2">Option 2</option>
                        <option value="option 3">Option 3</option>
                    </select>
                </div>
                <div className="flex justify-between px-10 mb-4">
                    <label htmlFor='productSku'>Product Sku:</label>
                    <select id='productSku' name='productSku' value={productInput.sku} onChange={handleProductSubmit} className="w-[calc(70%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1">
                        <option className="text-gray-400" value="">select</option>
                        <option value='sm-s9-8'>sm-s9-8</option>
                        <option vlaue='pc-dell-16'>pc-dell-16</option>
                        <option vlaue='pc-hp-32'>pc-hp-32</option>
                    </select>
                </div>
                <div className="flex justify-between px-10 mb-4 items-center">
                    <label htmlFor="stockLevel">Stock Level:</label>
                    <input 
                        type="number" 
                        id="stockLevel"
                        name="stockLevel"
                        value={productInput.stockLevel}
                        onChange={handleProductSubmit}
                        min='0'
                        placeholder="0"
                        className="w-[calc(70%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                    />
                </div>
                <div className="flex justify-between px-10 mb-4 items-center">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        type="text" 
                        id="description"
                        name="description"
                        value={productInput.description}
                        onChange={handleProductSubmit}
                        rows={3}
                        cols={10}
                        placeholder="description"
                        className="w-[calc(70%)] scroll border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                    />
                </div>
            </div>
            <hr className="w-[calc(90%)] mx-auto my-10" />
            <div>
                <h1 className="text-2xl w-fit mx-auto font-bold my-5">Inventory Info</h1>
                <div className="flex justify-between px-10 mb-4 items-center">
                    <label htmlFor="invSku">Inventroy SKU:</label>
                    <input 
                        type="text" 
                        id="invSku"
                        name="invSku"
                        value={invInput.invSku}
                        onChange={handleInvSubmit}
                        placeholder="Inventory SKU"
                        className="w-[calc(70%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                    />
                </div>
            </div>
            <div className="flex justify-between px-10 mb-4 items-center">
                <label htmlFor="invStockLevel">Inventory Stock Level:</label>
                <input 
                    type="number" 
                    id="invStockLevel"
                    name="invStockLevel"
                    value={invInput.invStockLevel}
                    onChange={handleInvSubmit}
                    min='0'
                    placeholder="0"
                    className="w-[calc(70%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                />
            </div>
            <div className="flex justify-between px-10 mb-4 items-center">
                <label htmlFor="price">Price:</label>
                <input 
                    type="number"
                    min='0'
                    step='0.01' 
                    id="price"
                    name="price"
                    value={invInput.price}
                    onChange={handleInvSubmit}
                    placeholder='0.00'
                    className="w-[calc(70%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                />
            </div>
            
            <div className="flex justify-between px-10 mb-4 items-center">
                    <label htmlFor="location">location:</label>
                    <input 
                        type="text" 
                        id="location"
                        name="location"
                        value={invInput.location}
                        onChange={handleInvSubmit}
                        placeholder="location"
                        className="w-[calc(70%)] border-2 rounded focus:outline-none focus:border-blue-500 pl-5 py-1"
                    />
                </div>
                <button type="button" className="w-1/2 mx-auto flex justify-center  py-2 text-white rounded bg-blue-400 hover:bg-blue-600">Submit</button>
        </form>
    </>
}