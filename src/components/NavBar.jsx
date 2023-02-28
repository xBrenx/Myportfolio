import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import image from "../assets/image3.png"
import { motion } from "framer-motion";


const NavBar = ({setRender}) => {
  const [nav, setNav] = useState(false);

  const apearNav = {
    initial: "hidden",
    whileInView: "visible",
    viewport: {once: true, amount:0.5},
    transition: {duration: 0.5},
    variants: {
      hidden: {opacity: 0, y: -15 },
      visible: { opacity: 1, y: 0}
    }
  }

  const apearNavLeft = {
    initial: "hidden",
    whileInView: "visible",
    viewport: {once: true, amount:0.5},
    transition: {duration: 0.5},
    variants: {
      hidden: {opacity: 0, x: 80 },
      visible: { opacity: 1, x: 0}
    }     
  }

  // para girar => motion-safe:animate-spin
  const seteo = (num) => {
    setRender(num)
  }

  const closeNav = (num) => {
    setRender(num)
    setNav(false)
  }

  window.onscroll = function() {
    let scroll2 = window.scrollY
 
    let header = document.getElementById("header")
    if(scroll2 > 150){
      header.style.top = "-100px";
    }else{
      header.style.top = "0";
    }
  }

  
  //"flex justify-between items-center w-full h-20 px-4 text-white fixed top-0 z-20 header"
  
  return (
    <header id="header" className="flex justify-between items-center w-full h-20 text-white fixed top-0 translate-y-1 duration-300 z-20 header">
      <motion.div {...apearNav}>
            <img src={image} alt="logo" className='m-9' />
        </motion.div>

      <motion.div {...apearNav} className="fixed md:backdrop-blur-[2px] right-16 ml-64 p-4 md:border-[0.5px] border-gray-900 backdrop-blur-0 invisible md:visible border-0">
      <ul className="flex gap-4 mr-14 backdrop-blur-md h-full">
      <li>
                <p className="ff-sans-cond uppercase text-white letter-spacing-2 cursor-pointer" 
              href='#home' onClick={()=>{ seteo(0)}}><span className="font-bold">01</span> Home</p>
              </li>
           
              <li>
                <p className="ff-sans-cond uppercase text-white letter-spacing-2 cursor-pointer" 
              href='#home' onClick={()=>{ seteo(1)}}><span className="font-bold">02</span> Proyectos</p>
              </li>
           
              <li>
                <p className="ff-sans-cond uppercase text-white letter-spacing-2 cursor-pointer" 
              href='#home' onClick={()=>{ seteo(2)}}><span className="font-bold">03</span> Conocimientos</p>
              </li>
           
              <li>
                <p className="ff-sans-cond uppercase text-white letter-spacing-2 cursor-pointer" 
              href='#home' onClick={()=>{ seteo(3)}}><span className="font-bold">04</span> Contacto</p>
              </li>
           
      </ul>
      </motion.div>

      <motion.div {...apearNav}
        onClick={() => setNav(!nav)}
        className="md:invisible cursor-pointer pr-12 z-10 text-gray-500 visible md:z-30"
      >
        {nav ? <FaTimes  size={30} /> : <FaBars size={30} /> }
      </motion.div>
    
      {nav && (
        <motion.ul {...apearNavLeft}
         className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen backdrop-blur-md text-gray-500 gap-4">
            <li>
                <p className="ff-sans-cond uppercase text-white letter-spacing-2 cursor-pointer" 
              href='#home' onClick={()=>{ closeNav(0)}}><span className="font-bold">01</span> Home</p>
              </li>
           
              <li>
                <p className="ff-sans-cond uppercase text-white letter-spacing-2 cursor-pointer" 
              href='#home' onClick={()=>{ closeNav(1)}}><span className="font-bold">02</span> Proyectos</p>
              </li>
           
              <li>
                <p className="ff-sans-cond uppercase text-white letter-spacing-2 cursor-pointer" 
              href='#home' onClick={()=>{ closeNav(2)}}><span className="font-bold">03</span> Conocimiento</p>
              </li>
           
              <li>
                <p className="ff-sans-cond uppercase text-white letter-spacing-2 cursor-pointer h-full" 
              href='#home' onClick={()=>{ closeNav(3)}}><span className="font-bold">04</span> Contacto</p>
              </li>
        </motion.ul>
      )}
    </header>
  );
};

export default NavBar;
