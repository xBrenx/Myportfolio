import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation  } from "swiper";
import image from "../assets/images/videogames.png"
import image2 from "../assets/images/bookturn.png"

import "swiper/css";
import "swiper/css/pagination";

import { FiLinkedin } from "react-icons/fi"
import { FiGithub } from "react-icons/fi"


export default function SliderProyecto() {

    const data = [
        {
            id: 1,
            title: "Api videogames",
            img_url: `${image}`,
            gitHub: "https://github.com/xBrenx/pi-videogames-main",
            linkedin: "https://www.linkedin.com/in/brenda-panes/"
          },
          {
            id: 2,
            title: "Bookturn (grupal)",
            img_url: `${image2}`,
            gitHub: "https://github.com/riveroide/PFBOOKTURNFRONTEND",
            linkedin: "https://www.linkedin.com/in/brenda-panes/"
          },
    ]
  
  return (
    <section className=" max-w-lg sm:max-w-[18rem] flex justify-center">
     
      <Swiper
       spaceBetween={30}
       centeredSlides={true}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
       navigation={true}
       modules={[Autoplay, Pagination, Navigation]}
      >
        {data.map(({ id, title, img_url, gitHub, linkedin }) => {
          return (
            <SwiperSlide className="text-cyan-50 my-4" key={id}>
              <h3 className="text-cyan-50 text-center">{title}</h3>
              <img src={img_url} alt="img"/>

              <div className="flex justify-center my-4">
               
                <a href={gitHub} ><FiGithub size={22}  color="#ffffff"/></a>
                <a href={linkedin} ><FiLinkedin size={22} className="mx-4"  color="#ffffff"/></a>

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
 
  </section>
  )
}