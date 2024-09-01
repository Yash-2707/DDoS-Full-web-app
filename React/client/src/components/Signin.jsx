import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css';

const Signin = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (data.success) {
        console.log("Signup successful:", data.accessToken);
        // Redirect user to login page or homepage
        navigate('/login');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-[#c9d6ff]">
      <div className="container max-w-md p-6 bg-white rounded-3xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSignup} className="flex flex-col items-center">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-medium mb-2">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-medium mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-blue-500 transition-all duration-300"
          >
            Sign Up
          </button>
          <a href="#" className="mt-3 text-sm text-gray-500 hover:text-gray-800">
            Already have an account? Login here.
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signin;
