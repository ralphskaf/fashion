import React from 'react'
import img6 from '../../assets/img-6.jpeg'
import backgroundVideo from '../../assets/video-1.mp4'
import img1 from '../../assets/img-3.jpeg'
import img2 from '../../assets/img-11.jpeg'
import img3 from '../../assets/img-17.jpeg'
import img4 from '../../assets/img-8.jpeg'
import img7 from '../../assets/img-7.jpeg'
import img8 from '../../assets/img-19.jpeg'
import img9 from '../../assets/img-22.jpeg'
import img10 from '../../assets/img-24.jpeg'
import img11 from '../../assets/img-12.jpeg'
import img12 from '../../assets/img-26.jpeg'

const image = [
  {
    id: 1,
    image: img7,
  },
  {
    id: 2,
    image: img8,

  },
  {
    id: 3,
    image: img9,
  },
  {
    id: 4,
    image: img10,
  },
  {
    id: 5,
    image: img11,
  },
  {
    id: 6,
    image: img12,
    
  }
];
export default function Bridal() {
  return (
    <>
          <section className='pb-5'>
    <div className='video'>
    <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          
        </video>
    </div>
   </section>
   <section>
        <div className='container'>
        <h1 className="heading" data-aos="fade-up">Bridal</h1>

<div className='row g-2 py-5'>
{image.map((project,id) => (
           <div className='col-lg-4 ' key={id} data-aos="zoom-in">
           <div className='position-relative '>
               <img src={project.image} alt="" className='w-100 h-100' />
               <div className='bg-absolute' >
               </div> 
           </div> 
           </div>
          ))}
</div>
        </div>
    </section>
  
    </>
  )
}
