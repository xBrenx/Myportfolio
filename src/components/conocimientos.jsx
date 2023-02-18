import React from 'react'
import image from "../assets/images/image-europa.png"
import { motion } from 'framer-motion'
import "../style/conocimientos.css"
import ConocimientosIcons from './ConocimientosIcons'

export default function conocimientos() {


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
    
    <div className='flex m-2 sm:m-8 letra'>
        <motion.div {...apearRight} className='p-1 lg:p-4 2xl:p-2 rounded z-10 break-words backdrop-blur-[2px] border-[0.5px] border-gray-900'>
        <h1 className="text-accent text-2xl lg:text-4xl xl:text-5xl ff-sans-cond uppercase letter-spacing-1">Algunos de mis
      <span className="d-block text-4xl md:text-[4rem] lg:text-7xl xl:text-8xl py-4 ff-serif text-white">conocimientos</span></h1>

      <ConocimientosIcons />

        </motion.div>

        <motion.div {...apearLeft} className='satelite z-0 max-h-fit mt-8 min-w-[5rem] 2xl:min-w-fit xl:h-[100%] 2xl ml-[-22rem] sm:ml-[-15rem] lg:ml-[-6rem] 2xl:ml-[-2rem]'>
          <img src={image} alt='europa'/>
          </motion.div>
    </div>
    
  )
}
