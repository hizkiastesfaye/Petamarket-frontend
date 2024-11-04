import { useState } from "react"

export default function Register(){
    const [error,setError] = useState({})
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        country:'',
        tel:'',
        email:'',
        password:'',
        confirmPassword:'',
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
        else if (!/^\d+$/.test(formData.phone)) {
            formError.phone = 'Phone number must contain only digits';
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
        if (!formData.confirmPassword){
            formError.confirmPassword='confirm password is required'
        }
        else if(formData.password !== formData.confirmPassword){
            formError.confirmPassword = 'confirm password is not match with password'
        }
        setError(formError)
        return Object.keys((formError).length ===0)
    }

    const handleChange=(e)=>{
        e.preventDefault();
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
        console.log(formData)
    }

    return<>
        <form className="max-w-2xl mx-auto my-20 rounded bg-white shadow-md">
            <div className= "flex justify-center pb-5">
                <h1 className="text-2xl font-extrabold text-gray-700 pt-10">SignUp</h1>
            </div>

            <div className="mb-4 px-4 pt-3 flex justify-between items-center">
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
            <div className="mb-4 px-4 flex justify-between items-center">
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
            <div className=" mb-4 px-4 flex justify-between items-center">
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
            <div className=" mb-4 px-4 flex justify-between items-center">
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
            <div className="mb-4 px-4 flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-500">Role: </label>
                <div className="w-3/4 px-4 py-1 flex justify-around items-start">
                    <div>
                        <input 
                                type="radio" 
                                id="buy"
                                name="roleradio"
                                value={formData.role}
                                />
                        <label htmlFor="buy" className="text-sm">Buyer</label>
                    </div>
                    <div>
                        <input 
                                type="radio" 
                                id="sell"
                                name="roleradio"
                                value={formData.role}
                                onChange={handleChange}
                                />
                        <label htmlFor="sell" className="text-sm">Seller</label>
                    </div>
                </div>
            </div>
            <div className="mb-4 px-4 flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-500">Password:</label>
                <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password with min 8 chars"
                    className="w-3/4 px-4 py-1 border rounded focus:outline-none focus:border-blue-500" /> 
            </div>
            <div className="mb-4 px-4 pb-10 flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-500">Confirm Password:</label>
                <input 
                    type="password"
                    name="password"
                    placeholder="confirm password"
                    className="w-3/4 px-4 py-1 border rounded focus:outline-none focus:border-blue-500" /> 
            </div>
            <button type="submit" className="w-1/2 mx-auto flex justify-center  py-2 text-white rounded bg-blue-400 hover:bg-blue-600">SignUp</button>
            <br />
        </form>
    </>
}