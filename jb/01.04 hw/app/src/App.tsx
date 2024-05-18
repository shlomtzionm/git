

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/layout/Layout'

import { ConnectUs } from './pages/ConnectUs'
import { HomePage } from './pages/HomePage'
import About from './pages/About'

function App() {
  return (
    <><BrowserRouter>
    <Layout />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/connectUs" element={<ConnectUs />}></Route>

      </Routes>
      
    </BrowserRouter><>
      </></>
  )
}

export default App
