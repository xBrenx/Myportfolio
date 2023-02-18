import React from 'react'
import image from "../assets/images/image-titan.png"
import { motion } from 'framer-motion'
import "../style/Proyectos.css"
import SliderProyecto from './SliderProyecto'

export default function Proyectos() {
  const apearLeft = {
    initial: "hidden",
    whileInView: "visible",
    viewport: {once: true, amount:0.5},
    transition: {duration: 0.8},
    variants: {
      hidden: {opacity: 0, x: 90 },
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
    
    <div className='flex m-2 sm:m-8 letra'>
        <motion.div {...apearRight} className='p-1 lg:p-4 2xl:p-2 rounded z-10 break-words backdrop-blur-[2px] border-[0.5px] border-gray-900'>
        <h1 className="text-accent text-4xl lg:text-4xl xl:text-5xl ff-sans-cond uppercase letter-spacing-1">Algunos de mis
      <span className="d-block text-7xl md:text-[5rem] lg:text-8xl xl:text-9xl 2xl:text-[9.5rem] py-4 ff-serif text-white">Proyectos</span></h1>
      
      {/* Proyectoooos */}
      <div className='w-full flex justify-center'>
      <SliderProyecto />
      </div>
        
       {/* Proyectoooos */}
        </motion.div>

        <motion.div {...apearLeft} className='satelite z-0 max-h-fit mt-8 min-w-[5rem] 2xl:min-w-fit xl:h-[100%] 2xl ml-[-22rem] sm:ml-[-15rem] lg:ml-[-6rem] 2xl:ml-[-2rem]'>
          <img src={image} alt='titan' />
          </motion.div>
    </div>
    
  )
}
