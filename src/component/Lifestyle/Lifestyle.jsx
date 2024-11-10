import React from "react";
import img1 from "../../assets/img-1.jpeg";
import img2 from "../../assets/img-2.jpeg";
import backgroundVideo from "../../assets/video-1.mp4";
import img3 from "../../assets/img-10.jpeg";
import img4 from "../../assets/img-13.jpeg";
import img5 from "../../assets/img-5.jpeg";
import img6 from "../../assets/img-16.jpeg";
import img7 from "../../assets/img-4.jpeg";

const image = [
  {
    id: 1,
    image: img2,
  },
  {
    id: 2,

    image: img3,
  },
  {
    id: 3,

    image: img4,
  },
  {
    id: 4,

    image: img5,
  },
  {
    id: 5,

    image: img6,
  },
  {
    id: 6,

    image: img7,
  },
];
export default function Lifestyle() {
  return (
    <>
      {/* <section className="pb-5">
        <div className="video">
          <video autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      </section> */}
      <section>
        <div className="container">
          <h1 className="heading span" data-aos="fade-up">
            Lifestyle
          </h1>

          <div className="row g-2 py-5">
            {image.map((project, id) => (
              <div className="col-lg-4 " key={id} data-aos="zoom-in">
                <div className="position-relative ">
                  <img src={project.image} alt="" className="w-100 h-100" />
                  <div className="bg-absolute"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
