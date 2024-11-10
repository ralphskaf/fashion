import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Slider/Slider.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import img1 from "../../assets/img-3.jpeg";
import img2 from "../../assets/img-11.jpeg";
import img3 from "../../assets/img-17.jpeg";
import img4 from "../../assets/img-8.jpeg";
import img7 from "../../assets/img-23.jpeg";
import img8 from "../../assets/img-19.jpeg";
import img9 from "../../assets/img-1.jpeg";
import img6 from "../../assets/img-16.jpeg";

import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function Slider() {
  return (
    <>
      <div className="container py-5">
        <h1 className="heading span">Gallery Photos</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={img1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline">
                <IoMdArrowBack />
              </ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline">
                <IoArrowForwardSharp />
              </ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}
