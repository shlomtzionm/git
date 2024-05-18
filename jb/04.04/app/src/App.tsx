
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './components/homePage/HomePage'
import { Layout } from './components/layout/layout'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
         
        </Route>
      </Routes>
    </BrowserRouter>
 <Layout/>
    </>
  )
}

export default App
