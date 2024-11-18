import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import {useDispatch} from 'react-redux'
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [checkError,setCheckError] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      formErrors.password = 'Password is required';
    }

    setErrors(formErrors);
    const isvalid = Object.keys(formErrors).length === 0
    return {isValid: isvalid,formErrors}
  };

  const postMutuation = useMutation({
    mutationFn:(user)=> axios.post('http://localhost:3004/user/login',user),
    onError: (error)=> {
      console.log("Erorr is : ",error)
      setCheckError(error.response.data.error)
    },
    onSuccess:(data)=>{
      console.log("successfull: ",data.data)
      const payload = {
        token:data.data.token,
        firstname:data.data.firstname,
        role:data.data.role
      }
      dispatch({type:'SET_TOKEN',payload})
      navigate('/home')
    }
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const {isValid,formErrors} = validateForm()
    if (!isValid) {
      console.log("formerrors is : ",formErrors)
    }
    else{
      console.log('Login successful:', formData);
      postMutuation.mutate(formData)

      // Reset form
      setFormData({
        email: '',
        password: '',
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
        Login
      </button>
     {checkError && <p>{checkError}</p>}
    </form>
  );
}

export default Login;


