import './App.css'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { useState } from 'react';
import NavBar from './component/NavBar.jsx';
import Home from './component/pages/Home.jsx';
import Footer from './component/Footer.jsx';
import SignUpRole from './component/pages/SignUpRole.jsx';
import SignUpForm from './component/pages/SignUpForm.jsx'
import Programming from './component/pages/Programming.jsx';
import Graphics from './component/pages/Graphics.jsx'
import DigitalMarketting from './component/pages/DigitalMarketting.jsx';
import Login from './component/pages/Login.jsx';


function App() {
  const [role,setRole]=useState('')
  return (
    <Router>
       <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up-role" element={<SignUpRole setRole={setRole} role={role}/>} />
        <Route path="/sign-up-form" element={<SignUpForm role={role}/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/graphics" element={<Graphics />} />
        <Route path="/digital-marketting" element={<DigitalMarketting />} />
      </Routes>
       <Footer/>
    </Router>
  )
}

export default App
