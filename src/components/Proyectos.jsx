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
        <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">Algunos de mis
      <span className="d-block ff-serif text-white proyectos">Proyectos</span></h1>
      
      {/* Proyectoooos */}
      <div className='w-full flex justify-center'>
      <SliderProyecto />
      </div>
        
       {/* Proyectoooos */}
        </motion.div>

        <motion.img {...apearLeft} src={image} alt='moon' className='planet z-0 ml-[-8rem] h-[50%] mt-8'/>
    </div>
    
    </div>
  )
}
