import React, { useState } from 'react';

const Signup= () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error.message || 'An error occurred during login');
    }
  };

  return (
    <div className='register'>
      <h2>Sign Up</h2>
      <form>
        <label className='labelInput'>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className='labelInput'>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <label className='labelInput'>
          Confirm Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" className='btnRegister' onClick={handleSignup}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;




