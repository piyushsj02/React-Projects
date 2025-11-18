import React from 'react'
import UserContextProvider from "./context/UserContextProvider"
import Login from './components/Login'
import Profile from './components/Profile'


function App() {

  return (
    <UserContextProvider>
      <h1 className='font-bold text-3xl hover:underline'>React Context API</h1>

      <Login/>

      {/* profile component is used in login  */}
      {/* <Profile/> */}      

    </UserContextProvider>
  )
}

export default App

