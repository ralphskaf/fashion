import { useEffect } from 'react'

import './App.css'
import Navbar from './component/Navbar/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Aos from 'aos';
import 'aos/dist/aos.css'
import Home from './component/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './component/Contact/Contact'
import Lifestyle from './component/Lifestyle/Lifestyle'
import Fashion from './component/Fashion/Fashion'
import Bridal from './component/Bridal/Bridal'
import Footer from './component/Footer/Footer'
import Advertising from './component/Advertising/Advertising'

function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();
  }, [])
  return (
    <div style={{backgroundColor:"#181D31"}}>
       
    <Router>
       <Navbar/>
       <Routes>
            <Route path="/" element={<Home/>} />
           
            <Route path="/contact" element={ <Contact/>} />
            <Route path="/Lifestyle" element={ <Lifestyle/>} />
            <Route path="/Fashion" element={ <Fashion/>} />
            <Route path="/Bridal" element={ <Bridal/>} />
            <Route path="/Advertising" element={ <Advertising/>} />


          </Routes>
         <Footer/>
       </Router>
  
    
    </div>
  )
}

export default App
