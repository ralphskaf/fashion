import React from 'react'
import img1 from '../../assets/img-1.jpeg'
import img2 from '../../assets/img-2.jpeg'
import img3 from '../../assets/img-3.jpeg'
import img4 from '../../assets/img-4.jpeg'
import img5 from '../../assets/img-5.jpeg'
import img6 from '../../assets/img-6.jpeg'
import img7 from '../../assets/img-7.jpeg'
import img9 from '../../assets/img-8.jpeg'
import { Link } from "react-router-dom";
import img10 from '../../assets/img-19.jpeg'

import "../../App.css"
import Navbar from '../Navbar/Navbar'
import Contact from '../Contact/Contact'
import Lifestyle from '../Lifestyle/Lifestyle'
import Slider from '../Slider/Slider'
export default function Home() {
  return (
    <div>
<section className='py-5'>
    <div className='container'>
<div className='row'>
<div className='col-lg-6 text-white'>
<div className='' data-aos="fade-right">
    <img src={img10} alt="" className='w-100 h-100' />
</div>

</div>
<div className='col-lg-6 text-white text pt-5'>
<div className=''>
<h1 className='fw-bold mt-5'>I’m Kristina <span className='span'>mazanik</span></h1>
<h2 className='mt-3'>A Fashion <span className='span'>Stylist</span> based in Milan, Italy.</h2>
<p className='mt-3'>My journey into the world of fashion began at an early age, inspired by the vibrant and ever-evolving fashion scene in Milan. After completing my studies in fashion design and styling, I immersed myself in the industry, working with renowned designers, magazines, and fashion houses. Over the years, I’ve honed my skills and developed a distinct aesthetic that blends classic elegance with contemporary trends.</p>
<Link to="/contact">
<button> 
Contact Me
</button>
</Link>
</div>
</div>

</div>
    </div>
</section>
{/*  */}
 <section className='py-5'>
    <div className='container' >
        <h1 className='text-white text-center'>Recent Work</h1>
<div  className='row py-3'>
<div className='col-lg-6 text-white pb-2' data-aos="fade-right">
<Link to="/Lifestyle">
<div className="bg-image position-relative">
  <img
    src={img2}
    className="img-fluid w-100 h-100 p-lg-5"
    alt="Sample"
  />
  <div className="mask " >
    <div className="d-flex justify-content-center align-items-center h-100">
      <h1 className="text-white mb-0 fw-bold text">Lifestyle</h1>
    </div>
  </div>
</div>
</Link>


</div>

<div className='col-lg-6 text-white' data-aos="flip-left">
   <Link to="/Fashion">
   <div>
    <div className="bg-image position-relative">
  <img
    src={img6}
    className="img-fluid w-100 h-100 p-lg-5"
    alt="Sample"
  />
  <div className="mask " >
    <div className="d-flex justify-content-center align-items-center h-100">
      <h1 className="text-white text mb-0 fw-bold"> Fashion</h1>
    </div>
  </div>
</div>

    </div>
   </Link>

</div>
<div className='col-lg-6 text-white py-3' data-aos="flip-left">
   <Link to="/Bridal">
   <div>
    <div className="bg-image position-relative">
  <img
    src={img7}
    className="img-fluid w-100 h-100 p-lg-5"
    alt="Sample"
  />
  <div className="mask " >
    <div className="d-flex justify-content-center align-items-center h-100">
      <h1 className="text-white mb-0 fw-bold text"> Bridal</h1>
    </div>
  </div>
</div>

    </div>
   </Link>

</div>
<div className='col-lg-6 text-white py-3' data-aos="fade-up">
  <Link to="/Advertising"> 
  <div>
    <div className="bg-image  position-relative">
  <div className=' bg '>
  <img
    src={img9}
    className="img-fluid w-100 h-100  p-lg-5"
    alt="Sample"
  />
  </div>
  <div className="mask " >
    <div className="d-flex justify-content-center align-items-center h-100  scale ">
      <h1 className="text-white mb-0 fw-bold text"> Advertising</h1>
    </div>
  </div>
</div>

    </div>

  
  </Link>
</div>



</div>
    </div>
 </section>

<section>
    <div className='container'>
<div className='text-center text-white'>
<div >
<h1>Open for new assignments worldwide</h1>
<Link to="/contact">
<button className='my-5'>Get in touch</button>

</Link>
</div>

</div>
    </div>
</section>
<Slider/>
    </div>
  )
}
