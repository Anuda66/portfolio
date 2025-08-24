import React, { useEffect, useState } from "react";
import { FaHandshake } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdMenu } from 'react-icons/md';
import ResponsiveNavbar from "./ResponsiveNavbar";
import { motion } from 'framer-motion';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsOpen(false); 
    }
  };

 
  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-200  `}
    >
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5, delay:0.1}}
        className="flex justify-between py-5 bg-slate-950 z-50"
      >
        
        <div className="ml-28 flex items-center gap-x-7">
          
          <h1 className="text-blue-500 md:text-xl  font-semibold text-2xl">
            AR.
          </h1>
        </div>

       
        <div className="md:flex md:gap-x-5 items-center text-slate-200 hidden">
          <button 
            onClick={() => scrollToSection('cover')} 
            className=" text-base cursor-pointer hover:text-blue-500 transition-colors duration-300"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className=" text-base cursor-pointer hover:text-blue-500 transition-colors duration-300"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('education')} 
            className=" text-base cursor-pointer hover:text-blue-500 transition-colors duration-300"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className=" text-base cursor-pointer hover:text-blue-500 transition-colors duration-300"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className=" text-base cursor-pointer hover:text-blue-500 transition-colors duration-300"
          >
            Projects
          </button>
        </div>

       
        <button 
          onClick={() => scrollToSection('message')}
          className="mr-28 border-[1.5px] items-center md:flex gap-4 text-white px-4 py-2 cursor-pointer border-blue-400/45 rounded-md hover:bg-blue-500 hover:border-blue-500 transition duration-300 hidden"
        >
          <span className="">Message Me</span>
          <AiFillMessage className=""/>
        </button>

        <div 
          className='md:hidden mr-4 z-50' 
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdMenu className='text-4xl text-white'/>
        </div>
      </motion.div>
       
      
      {isOpen && (
        <ResponsiveNavbar 
          onNavItemClick={scrollToSection} 
          onClose={() => setIsOpen(false)} 
        />
      )}
    </div>
  );
};

export default Navbar;