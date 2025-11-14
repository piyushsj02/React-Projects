import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Main Container:
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      
      {/* Card Wrapper */}
      <div className="bg-white p-10 rounded-xl shadow-2xl transform transition duration-500 hover:scale-105">
        
        {/* Counter Display*/}
        <div className="text-7xl font-extrabold text-blue-700 mb-6 text-center tabular-nums">
          {count}
        </div>
        
        {/* Button Group*/}
        <div className="flex space-x-4">
          
          <button 
            className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
            onClick={() => {
              setCount(count + 1)
            }}
          >
            Increment
          </button>
          
          
          <button 
            className="bg-red-600 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            onClick={() => {
              
              if (count > 0) {
                setCount(count - 1)
              }
            }}
            disabled={count === 0}
          >
            Decrement
          </button>

          <button 
            className="bg-gray-600 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:-translate-y-0.5"
            onClick={() => {
              setCount(0)
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
