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
    <div className='mr-12'>
    <div className='flex h-full pt-64 max-w-lg ml-44 letra'>
        <motion.div {...apearRight} className='rounded p-2 z-10 break-words sm:max-w-xs backdrop-blur-sm border-[0.5px] border-gray-900'>
        <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">Algunos de mis
      <span className="d-block ff-serif text-white conocimientos">conocimientos</span></h1>

      <ConocimientosIcons />

        </motion.div>

        <motion.img {...apearLeft} src={image} alt='moon' className='planet z-0 ml-[-15rem]  h-[50%] mt-8'/>
    </div>
    </div>
  )
}
