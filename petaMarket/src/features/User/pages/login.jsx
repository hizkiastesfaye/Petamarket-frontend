import { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

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
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login successful:', formData);
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
    </form>
  );
}

export default Login;
