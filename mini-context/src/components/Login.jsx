import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import Profile from './Profile';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user,setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ Fix: add 'e' as parameter
    setUser({ username, password });
  };
  if(user)  return <Profile/>
  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          onSubmit={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;