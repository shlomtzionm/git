import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Details } from "./components/detailsPage/DetailsPage";
// import { HomePage } from "./components/homePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Details/>} />
          <Route path="/details" element={<Details/>}  />
          <Route path="/details/:id" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
