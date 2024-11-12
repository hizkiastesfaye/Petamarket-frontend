import { useState } from "react"
import { Link } from "react-router-dom"
import {useMutation, useQueryClient} from "@tanstack/react-query"
import axios from 'axios'
export default function Register(){

    // const queryClient = useQueryClient()
    const [newFormError,setNewFormError] = useState({})
    const [isValidate,setIsValidate] = useState(false)
    const [checkError,setCheckError] = useState([])
    const [confirmPassword,setConfirmPassword]= useState('')
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        country:'',
        tel:'',
        email:'',   
        password:'',
        role:'',
    })
    const ValidateError = ()=>{
        let formError = {}
        if (!formData.firstname.trim()){
            formError.firstname = "firstname is needed"
        }
        if(!formData.lastname.trim()){
            formError.lastname = 'lastname is required'
        }
        if(!formData.country.trim()){
            formError.country = 'country is required'
        }
        if(!formData.tel.trim()){
            formError.tel='tel is required'
        }
        if(!formData.email.trim()){
            formError.email='email is required'
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formError.email = 'Email is invalid';
        }
        if (!formData.role){
            formError.role='role is required'
        }
        if (!formData.password){
            formError.password='password is required'
        }
        else if(formData.password.length <8){
            formError.password='password should be at least 8 characters'
        }
        if (!confirmPassword){
            formError.confirmPassword='confirm password is required'
        }
        else if(formData.password !== confirmPassword){
            formError.confirmPassword = 'confirm password is not match with password'
            formData.password = '';
            setConfirmPassword('')
        }
        setNewFormError(formError)
        const isvalid = Object.keys(formError).length ===0
        setIsValidate(isvalid)
        return {isValid:isvalid, formError}
    }

    const handleChange=(e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        console.log(name,value)
        if(name=='confirmPassword'){
            setConfirmPassword(value)
            console.log(name,value)
        }
        else{
        setFormData({...formData,[name]:value})
        console.log(formData)
        }
    }
    const handleRadio=(e)=>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }
    const postMutuation = useMutation({
        mutationFn:(newUser)=> axios.post('http://localhost:3001/user/register',newUser),
        onSuccess:()=>{
            console.log('successfully submitted')
            setFormData({firstname:'',
                lastname:'',
                country:'',
                tel:'',
                email:'',   
                password:'',
                role:'',})
                setConfirmPassword('')
        },
        onError:(error)=>{
            console.log('Error', error.response.data.error)
            setCheckError(error.response.data.error)
        }
    })
    const handleSubmit= async(event)=>{
        event.preventDefault()
        const {isValid,formError} = ValidateError()

        if(!isValid){
            console.log("Erroris: ",formError)
        }
        else {
            console.log("This handleSubmit: ",formData)
            postMutuation.mutate(formData)


        }
    }

    return<>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto my-20 rounded bg-white shadow-md">
            <div className= "flex justify-center pb-5">
                <h1 className="text-2xl font-extrabold text-gray-700 pt-10">SignUp</h1>
            </div>
            <div className="mb-1 px-4 pt-3 flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-500">Full Name: </label>
                <div className="flex justify-around w-3/4 gap-2">
                    <input 
                        type="text" 
                        name="firstname" 
                        placeholder="Your first name"
                        value={formData.firstname}
                        onChange={handleChange}
                        className=" w-2/3 px-4 py-1 border rounded focus:outline-none focus:border-blue-500 mr"
                    />
                    <input
                        type="text" 
                        name="lastname"  
                        placeholder="Your last name"
                        value={formData.lastname}
                        onChange={handleChange}
                        className="w-2/3 px-4 py-1 border rounded focus:outline-none focus:border-blue-500"
                    /> 
                </div>
            </div>
            <div className="ml-[calc(30%)] text-red-500">
                {newFormError.firstname && <p>** {newFormError.firstname}</p>}
                {newFormError.lastname && <p>** {newFormError.lastname}</p>}
            </div>
            <div className="mb-1 mt-4 px-4 flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-500">Country</label>
                <input 
                    type="text" 
                    name="country"
                    placeholder="Enter your country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-3/4 px-4 py-1 border rounded focus:outline-none focus:border-blue-500"
                
                />
            </div>
            {newFormError.country && <p className="ml-[calc(30%)] text-red-500">** {newFormError.country}</p>}
            <div className=" mb-1 mt-4 px-4 flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-500">tel</label>
                <input 
                    type="text" 
                    name='tel' 
                    placeholder="Enter your phone number"
                    value={formData.tel}
                    onChange={handleChange}
                    className="w-3/4 px-4 py-1 border rounded focus:outline-none focus:border-blue-500"
                />
            </div>
            {newFormError.tel && <p className="ml-[calc(30%)] text-red-500">** {newFormError.tel}</p>}
            <div className=" mb-1 mt-4 px-4 flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-500">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-3/4 px-4 py-1 border rounded focus:outline-none focus:border-blue-500"
                    /> 
            </div>
            {newFormError.email && <p className="ml-[calc(30%)] text-red-500">** {newFormError.email}</p>}
            <div className="mb-1 mt-4 px-4 flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-500">Role: </label>
                <div className="w-3/4 px-4 py-1 flex justify-around items-start">
                    <div>
                        <input 
                                type="radio" 
                                id="buy"
                                name="role"
                                value= "Buyer"
                                onChange={handleRadio}
                                />
                        <label htmlFor="buy" className="text-sm">Buyer</label>
                    </div>
                    <div>
                        <input 
                                type="radio" 
                                id="sell"
                                name="role"
                                value="Seller"
                                onChange={handleRadio}
                                />
                        <label htmlFor="sell" className="text-sm">Seller</label>
                    </div>
                </div>
            </div>
            {newFormError.role && <p className="ml-[calc(30%)] text-red-500">** {newFormError.role}</p>}
            <div className="mb-1 mt-4 px-4 flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-500">Password:</label>
                <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password with min 8 chars"
                    className="w-3/4 px-4 py-1 border rounded focus:outline-none focus:border-blue-500" /> 
            </div>
            {newFormError.password && <p className="ml-[calc(30%)] text-red-500">{newFormError.password}</p>}
            <div className="mb-3 mt-4 px-4 flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-500">Confirm Password:</label>
                <input 
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    placeholder="confirm password"
                    className="w-3/4 px-4 py-1 border rounded focus:outline-none focus:border-blue-500" /> 
            </div>
            <div className="pb-10 ">
                {newFormError.confirmPassword && <p className="ml-[calc(30%)]  text-red-500">{newFormError.confirmPassword}</p>}
            </div>
            {checkError && isValidate && <p className="text-red-500 ml-[calc(30%)]">** {checkError}</p>}
            <button type="submit" className="w-1/2 mx-auto flex justify-center  py-2 text-white rounded bg-blue-400 hover:bg-blue-600">SignUp</button>
            <br />
            
            <p className="ml-[calc(50%)]">Already have an account? <Link to="/user/login" className="text-blue-600 underline">  Sign in</Link> </p>
        </form>
    </>
}