

import { createContext, useState } from 'react'
import './App.css'
import { HomePage } from './components/HomePage'

export const UserContext = createContext("")

function App() {
const[user]=useState("hi")



  return (
    <>
    <UserContext.Provider value={user}>
    <HomePage/>
    </UserContext.Provider>

    </>
  )
}

export default App
