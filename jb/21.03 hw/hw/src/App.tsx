import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Counter } from "./components/counter/counter";
import { HomePage } from "./pages/homePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/" element={<HomePage/>}/>
         
          
        
      </Routes>
    </BrowserRouter>
  );
}