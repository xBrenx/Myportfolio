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

  return (
    
    <div className='flex m-2 sm:m-8 letra'>
        <motion.div {...apearRight} className='p-1 lg:p-4 2xl:p-2 rounded z-10 break-words backdrop-blur-[2px] border-[0.5px] border-gray-900'>
        <h1 className="text-accent text-2xl lg:text-4xl xl:text-5xl ff-sans-cond uppercase letter-spacing-1">Algunos de mis
      <span className="block text-2xl sm:text-3xl md:text-[4rem] lg:text-7xl xl:text-8xl py-4 ff-serif text-white">conocimientos</span></h1>

      <ConocimientosIcons />

        </motion.div>

        <motion.div {... window.outerWidth > 1114? apearLeft : apearTop} className='satelite invisible sm:visible z-0 max-h-fit mt-8 min-w-[5rem] 2xl:min-w-fit xl:h-[100%] 2xl ml-[-17rem] sm:ml-[-15rem] lg:ml-[-6rem] 2xl:ml-[-2rem]'>
          <motion.img {... window.outerWidth > 1114? apearLeft : apearTop} src={image} alt='europa'/>
          </motion.div>
    </div>
    
  )
}
