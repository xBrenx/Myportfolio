import React from 'react'
import image from "../assets/images/image-mars.png"
import { motion } from 'framer-motion'
import "../style/Contacto.css"
import Iconos from '../components/Iconos.jsx'

export default function Contacto() {
  const apearLeft = {
    initial: "hidden",
    whileInView: "visible",
    viewport: {once: true, amount:0.5},
    transition: {duration: 0.8},
    variants: {
      hidden: {opacity: 0, x: 80 },
      visible: { opacity: 1, x: 0}
    }     
  } 

  const apearRight = {
    initial: "hidden",
    whileInView: "visible",
    viewport: {once: true, amount:0.5},
    transition: {duration: 0.8},
    variants: {
      hidden: {opacity: 0, x: -80 },
      visible: { opacity: 1, x: 0}
    }     
  } 

  const apearTop = {
    initial: "hidden",
    whileInView: "visible",
    viewport: {once: true, amount:0.5},
    transition: {duration: 0.5},
    variants: {
      hidden: {opacity: 0, y: -15 },
      visible: { opacity: 1, y: 0}
    }
  }

  let options = {
    root: null, // relative to document viewport 
    rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed 
    threshold: '0'// visible amount of item shown in relation to root 
  };
  let observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry => {
      console.log(entry)
    })
  }, options);
  const section = document.getElementById("root")

  observer.observe(section)

  // console.log(window.outerWidth > 1024)
  return (
    
    <div id='section1' className='flex m-2 sm:m-8 letra'>
    
        <motion.div {...apearRight} className='p-1 lg:p-4 2xl:p-2 rounded z-10 break-words backdrop-blur-[2px] border-[0.5px] border-gray-900'>
        <h1 className="text-accent text-2xl sm:text-4xl lg:text-4xl xl:text-5xl ff-sans-cond uppercase letter-spacing-1">Medios de
      <span className="block text-5xl sm:text-7xl md:text-[5rem] lg:text-8xl xl:text-9xl 2xl:text-[9.5rem] py-4 ff-serif text-white">contacto</span></h1>
      
      <p className='max-w-lg'>Si querés saber más sobre mi, te invito a contactarme.</p>

      <div className="grid flex-col p-4 mx-auto h-full">

          <form
            action="https://getform.io/f/f73252c9-5487-4bbb-9982-f4b954002d09"
            method="POST"
            className=" flex flex-col w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              className="ff-sans-cond uppercase text-white letter-spacing-2 p-2 bg-transparent border-[0.5px] rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Tu email"
              className="ff-sans-cond uppercase text-white letter-spacing-2 my-4 p-2 bg-transparent border-[0.5px] rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Escribe tu mensaje"
              rows="10"
              className="ff-sans-cond uppercase text-white letter-spacing-2 p-2 bg-transparent border-[0.5px] rounded-md focus:outline-none"
            ></textarea>

            <button className="ff-sans-cond uppercase text-white letter-spacing-2 bg-gradient-to-b px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Hablemos
            </button>
          </form>

    </div>
        </motion.div>

        <Iconos />

        <motion.div {... window.outerWidth > 1114? apearLeft : apearTop} className='satelite invisible sm:visible z-0 max-h-fit mt-8 min-w-[5rem] 2xl:min-w-fit xl:h-[100%] 2xl ml-[-22rem] sm:ml-[-15rem] lg:ml-[-6rem] 2xl:ml-[-2rem]'>
        <motion.img {... window.outerWidth > 1114? apearLeft : apearTop} src={image} alt='mars'/>
        </motion.div>
    </div>

  )
}
