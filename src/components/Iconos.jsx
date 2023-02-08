import React from 'react'
import { FiGithub } from "react-icons/fi"
import { FiLinkedin } from "react-icons/fi"
import { ImWhatsapp } from "react-icons/im"
import { motion } from 'framer-motion'

export default function Iconos() {

    const apearTop = {
        initial: "hidden",
        whileInView: "visible",
        viewport: {once: true, amount:0.5},
        transition: {duration: 0.8},
        variants: {
          hidden: {opacity: 0, y: -80 },
          visible: { opacity: 1, y: 0}
        }     
      } 

  return (
    <motion.div {...apearTop} className='flex flex-col p-4 justify-center mx-auto z-20'>
        <a href="https://github.com/xBrenx"><FiGithub size={22}  color="#ffffff"/></a>
        <a href="https://www.linkedin.com/in/brenda-panes/"><FiLinkedin className='my-10' size={22}  color="#ffffff"/></a>
        <a href="https://api.whatsapp.com/send?phone=5491157211697"><ImWhatsapp size={22}  color="#ffffff"/></a>
    </motion.div>
  )
}
