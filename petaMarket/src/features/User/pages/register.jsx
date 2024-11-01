import { useState } from 'react';

function Register(

) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    
    if (!formData.firstname.trim()) {
      formErrors.firstname = 'First name is required';
    }
    if (!formData.lastname.trim()) {
      formErrors.lastname = 'Last name is required';
    }
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }
    if (!formData.country.trim()) {
      formErrors.country = 'Country is required';
    }
    if (!formData.phone.trim()) {
      formErrors.phone = 'Phone number is required';
    } else if (!/^\d+$/.test(formData.phone)) {
      formErrors.phone = 'Phone number must contain only digits';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        country: '',
        phone: '',
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">First Name:</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
        {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
        {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
      </div>

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

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
        {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Phone Number:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
        Register
      </button>
    </form>
  );
}

export default Register;

