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

  return (
    <div className='mr-12'>
    <div className='flex h-full pt-64 max-w-lg ml-44 letra'>
        <motion.div {...apearRight} className='rounded p-2 z-10 break-words sm:max-w-xs backdrop-blur-sm border-[0.5px] border-gray-900'>
        <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">Bienvenido a mi 
      <span className="d-block ff-serif text-white portfolio">portafolio</span></h1>

      <div className='flex items-center'>
      <GiStarSwirl size={25}  color="#ffffff"/> 
      <div>
      <span className="d-block ff-serif text-white full">Brenda Panes </span>
      <span className="d-block ff-serif text-white full">Fullstack Developer </span>
      </div>
      </div>
      
        </motion.div>

        <motion.img {...apearLeft} src={image} alt='moon' className='planet z-0 ml-[-8rem]  h-[50%] mt-8'/>
    </div>
    </div>
  )
}
