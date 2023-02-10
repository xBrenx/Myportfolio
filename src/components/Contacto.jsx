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

  return (
    <div className='mr-12'>
    <div className='flex h-full pt-64 max-w-lg ml-44 letra'>
    
        <motion.div {...apearRight} className='rounded p-2 z-10 break-words sm:max-w-xs backdrop-blur-sm border-[0.5px] border-gray-900'>
        <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">Medios de
      <span className="d-block ff-serif text-white contacto">contacto</span></h1>
      
      <p className='max-w-lg'>Si querés saber más sobre mi, te invito a contactarme.</p>

      {/* FORMULARIO*/}
      {/* <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b  p-4 text-white"
    > */}
      <div className="grid flex-col p-4 mx-auto h-full">

      
          <form
            action="https://getform.io/f/f73252c9-5487-4bbb-9982-f4b954002d09"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
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
        {/* </div> */}

    </div>

      {/* FORMULARIO */}
        </motion.div>
        <Iconos />

        <motion.img {...apearLeft} src={image} alt='moon' className='planet z-0 ml-[-8rem] h-[50%] mt-8'/>
    </div>

   
    </div>
  )
}
