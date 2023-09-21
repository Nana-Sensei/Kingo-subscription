import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./LAYOUT/Home";
import { Login } from "./LAYOUT/Login";
import { Register } from "./LAYOUT/Register";
import Pricing from "./LAYOUT/Pricing";
import Cancel from "./LAYOUT/Cancel";
import Success from "./LAYOUT/Success";
import Contact from "./LAYOUT/Contact";




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/register" element={<Register />}> </Route>
          <Route path="/pricing" element={<Pricing />}> </Route>
          <Route path="/contact" element={<Contact/>}> </Route>
          <Route path="/success" element={<Success />}> </Route>
          <Route path="/cancel" element={<Cancel />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
