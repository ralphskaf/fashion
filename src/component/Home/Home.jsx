import React from "react";
import img1 from "../../assets/img-1.jpeg";
import img2 from "../../assets/img-2.jpeg";
import img3 from "../../assets/img-3.jpeg";
import img4 from "../../assets/img-4.jpeg";
import img5 from "../../assets/img-5.jpeg";
import img6 from "../../assets/img-6.jpeg";
import img7 from "../../assets/img-7.jpeg";
import img9 from "../../assets/img-8.jpeg";
import { Link } from "react-router-dom";
import img10 from "../../assets/img-19.jpeg";

import "../../App.css";
import Navbar from "../Navbar/Navbar";
import Contact from "../Contact/Contact";
import Lifestyle from "../Lifestyle/Lifestyle";
import Slider from "../Slider/Slider";
export default function Home() {
  const recentWork = [
    {
      link: "/Lifestyle",
      img: img2,
      title: "Lifestyle",
      animation: "fade-right",
    },
    {
      link: "/Fashion",
      img: img6,
      title: "Fashion",
      animation: "flip-left",
    },
    {
      link: "/Bridal",
      img: img7,
      title: "Bridal",
      animation: "flip-left",
    },
    {
      link: "/Advertising",
      img: img9,
      title: "Advertising",
      animation: "fade-up",
    },
  ];

  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-white">
              <div className="text-center w-100" data-aos="fade-right">
                <img
                  src={img10}
                  alt=""
                  className="img-fluid"
                  style={{
                    borderRadius: "2rem",
                    maxHeight: "600px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 text-white text pt-5">
              <div className="">
                <h1 className="fw-bold mt-5">
                  I’m Kristina <span className="span">Mazanik</span>
                </h1>
                <h2 className="mt-3">
                  A Fashion <span className="span">Stylist</span> based in
                  Milan, Italy.
                </h2>
                <p className="mt-3">
                  My journey into the world of fashion began at an early age,
                  inspired by the vibrant and ever-evolving fashion scene in
                  Milan. After completing my studies in fashion design and
                  styling, I immersed myself in the industry, working with
                  renowned designers, magazines, and fashion houses. Over the
                  years, I’ve honed my skills and developed a distinct aesthetic
                  that blends classic elegance with contemporary trends.
                </p>
                <Link to="/contact">
                  <button>Contact Me</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section className="py-5">
        <div className="container">
          <h1 className="text-center pb-md-3 span">Recent Work</h1>
          <div className="row py-3">
            {recentWork.map((item, index) => (
              <div
                key={index}
                className="col-lg-6 text-white py-3"
                data-aos={item.animation}
              >
                <div>
                  <div className="bg-image position-relative d-flex justify-content-center align-items-center pb-3">
                    <Link to={item.link}>
                      <img
                        src={item.img}
                        className="img-fluid"
                        style={{
                          borderRadius: "2rem",
                          maxHeight: "600px",
                          objectFit: "contain",
                        }}
                        alt="Sample"
                      />
                      <div
                        className="mask position-absolute d-flex justify-content-center align-items-center"
                        style={{ top: 0, left: 0, right: 0, bottom: 0 }}
                      >
                        <h1 className="text-white mb-0 fw-bold text">
                          {item.title}
                        </h1>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="text-center text-white">
            <div>
              <h1 className="span">
                Available for Exclusive Fashion Projects Worldwide
              </h1>
              <Link to="/contact">
                <button className="my-5">Get in touch</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Slider />
    </div>
  );
}
