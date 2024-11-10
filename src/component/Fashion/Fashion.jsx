import React from 'react'
import img6 from '../../assets/img-6.jpeg'
import backgroundVideo from '../../assets/video-1.mp4'
import img1 from '../../assets/img-3.jpeg'
import img2 from '../../assets/img-11.jpeg'
import img3 from '../../assets/img-17.jpeg'
import img4 from '../../assets/img-8.jpeg'
import img7 from '../../assets/img-23.jpeg'

const image = [
    {
      id: 1,
      image: img6,
    },
    {
      id: 2,
    
     
      image: img1,
    },
    {
      id: 3,
     
     
      image: img2,
    },
    {
      id: 4,
     
     
      image: img3,
    },
    {
      id: 5,
     
     
      image: img4,
    },
    {
        id: 6,
       
       
        image: img7,
      },
  ];
export default function Fashion() {
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
        <h1 className="heading" data-aos="fade-up">Fashion</h1>

<div className='row g-2 py-5'>
{image.map((project,id) => (
  <div className='col-lg-4 col-md-12 mb-4 mb-lg-0 ' key={id} data-aos="zoom-in">
  <div className='position-relative '>
      <img src={project.image} alt="" className='w-100 h-100  ' />

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
