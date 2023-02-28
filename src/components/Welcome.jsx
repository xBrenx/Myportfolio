import React from 'react'
import "../style/Welcome.css"
import image from "../assets/images/image-moon.png"
import { motion } from 'framer-motion'

import {GiStarSwirl} from "react-icons/gi"

export default function Welcome() {

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


  return (
  
    <div className='flex m-2 sm:m-8 letra relative'>
        <motion.div {...apearRight} className='absolute p-1 lg:p-4 2xl:p-2 rounded z-10 break-words backdrop-blur-[2px] border-[0.5px] border-gray-900'>
        <h1 className="text-accent text-2xl sm:text-4xl lg:text-4xl xl:text-5xl ff-sans-cond uppercase letter-spacing-1">Bienvenido a mi 
      <span className="block text-4xl sm:text-7xl md:text-[5rem] lg:text-8xl xl:text-9xl 2xl:text-[9.5rem] py-4 ff-serif text-white">portafolio</span></h1>

      <div className='flex items-center'>
      <GiStarSwirl size={25}  color="#ffffff"/> 
      <div>
      <span className="block pt-8 ff-serif text-white text-xl md:text-3xl lg:text-5xl xl:text-6xl">Me llamo Brenda Panes </span>
      <span className="block ff-serif text-white text-lg md:text-3xl lg:text-5xl xl:text-6xl">y soy Full Stack Web Developer </span>
      </div>
      </div>
      
        </motion.div>

        <motion.div {... window.outerWidth > 1114? apearLeft : apearTop} className='satelite invisible sm:visible z-0 max-h-fit mt-8 min-w-[5rem] 2xl:min-w-fit xl:h-[100%] 2xl ml-[0rem] sm:ml-[16rem] md:ml-[16rem] lg:ml-[32rem] xl:ml-[48rem] 2xl:ml-[55rem]'>
          <motion.img {... window.outerWidth > 1114? apearLeft : apearTop} src={image} alt='moon' />
          </motion.div>
    </div>
  
  )
}
