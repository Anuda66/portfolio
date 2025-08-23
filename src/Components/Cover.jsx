import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { MdWavingHand } from "react-icons/md";
import { PiReadCvLogoBold } from "react-icons/pi";
import { motion } from 'framer-motion';
import image from '../assets/pic1.png';
import media from '../data/data';
import { Link } from 'react-router-dom';
import img1 from '../assets/i1.png';
import img2 from '../assets/i2.png';
import img3 from '../assets/i3.png';

const SlideRight=(delay)=>{
  return{
    hidden:{
      opacity:0,
      x:-50,
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:0.4,
        delay:delay,
      },
    },
  };
};

const Cover = () => {
  return (
    <div className='mt-10 sm:mt-36 px-4 sm:px-0'
    id="cover"
    >
        <div className='grid grid-cols-1 md:grid-rows-4 md:grid-flow-col gap-4'>
        <motion.div 
        variants={SlideRight(0.4)}
        initial="hidden"
        animate="visible"
        className='md:row-span-4 bg-slate-800/20 w-full md:w-[450px] md:ml-28 py-10 rounded-2xl'>
         <div className='flex flex-col items-center'>
         <img src={image} width={300} height={350} alt='my-image' className='w-[250px] sm:w-[300px] h-auto'/>
         <h1 className='text-2xl sm:text-4xl text-slate-300 mt-6 sm:mr-5 sm:mt-12 font-semibold text-center'>Nisith Ferdinando</h1>
        <div className='flex gap-x-4 sm:gap-x-8 mt-4 sm:mr-4 justify-center'>
            <div className='flex gap-x-2 items-center'>
            <FaLocationDot/>
         <h4 className='text-xs sm:text-sm'>Panadura</h4>
         </div>
         <div className='flex gap-x-2 items-center'>
            <FaUserGraduate/>
            <h4 className='text-xs sm:text-sm'>Undergraduate</h4>
         </div>
        </div>
        <div className='mt-6 sm:mt-12 flex gap-x-4 sm:gap-x-10 justify-center'>
        {
            media.map((item)=>{
                return(
                    <div key={item.id}>
                     <Link to={item.link}>
                     <div className='p-2 sm:p-3 text-xl sm:text-2xl text-white rounded-xl cursor-pointer transition-colors duration-300 border-[0.5px] border-slate-800/90 hover:bg-blue-500'>
                     <item.icon />
                     </div>
                     </Link>
                    </div>
                );
            })
        }
        </div>
         </div>
        </motion.div>
        <motion.div 
        initial={{opacity:0, x:50}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.8, delay:0.4}}

        className="md:row-span-2 bg-slate-800/20 pt-6 sm:pt-10 rounded-2xl w-full md:w-[800px] md:pr-12">
        <h2 className='flex items-center gap-4 text-base sm:text-xl text-slate-400 pl-4 sm:pl-10'>Hello There <span className='text-yellow-200'><MdWavingHand/></span></h2>
        <div className='mt-4 sm:mt-8 pl-4 sm:pl-10 pb-4 sm:pb-7'>
         <h1 className='text-3xl sm:text-6xl text-slate-300 font-bold'>I'm <span className='text-blue-500'>Nisith Ferdinando</span> </h1>
         <h2 className='text-2xl sm:text-5xl text-slate-300 mt-3 sm:mt-5'>Software Engineer</h2>
         <button className='mt-6 sm:mt-12 p-2 sm:px-3 py-2 border-[0.5px] bg-blue-500 hover:bg-slate-800/20 border-slate-900 transition duration-300 rounded-xl'>
          <a href='/Resume.pdf' download className='flex gap-x-2 sm:gap-x-4 items-center text-sm sm:text-base'>Download Resume <PiReadCvLogoBold/> </a>
         </button>
        </div>
        </motion.div>
        <motion.div 
        initial={{opacity:0, x:50}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.8, delay:0.5}}
        className="md:row-span-2 md:col-span-2 bg-slate-800/20 rounded-2xl w-full md:w-[800px] mt-6 sm:mt-10">
        <h2 className='text-2xl sm:text-3xl text-blue-400 p-4 sm:p-10'>About Me 👤</h2>
        <p className='text-sm sm:text-base text-slate-300 text-justify px-4 sm:px-10 leading-relaxed'>I am a final-year undergraduate with a proactive approach and 
            a passion for technology. I quickly adapt to diverse tech stacks, excel in problem-solving,
             and thrive in dynamic, collaborative environments. I eagerly embrace challenges, continuously seeking growth opportunities. 
            I'm actively looking for internship opportunities to further develop my skills.</p>
         <div className='flex flex-col sm:flex-row gap-y-4 sm:gap-x-8 mt-4 sm:mt-8 pl-4 sm:pl-10 pb-4 sm:pb-0'>
          <div className='flex gap-x-2 border-[0.5px] bg-slate-800/15 border-blue-300 px-2 py-2 rounded-lg items-center cursor-pointer shadow-[0_0_12px_2px_rgba(59,130,246,0.4)] hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.4)] hover:bg-blue-500'>
          <img src={img1} width={20} height={20} alt='img1' className='invert'/>
            <p className='text-sm font-sans'>UX Design</p>
        </div>
        <div className='flex gap-x-2 border-[0.5px] bg-slate-800/15 border-red-500 px-2 py-2 rounded-lg items-center cursor-pointer shadow-[0_0_12px_2px_rgba(255,0,0,0.4)] hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.4)] hover:bg-red-500'>
            <img src={img2} width={20} height={20} alt='img2' className='invert'/>
            <p className='text-sm font-sans'>Web Development</p>
          </div>
          <div className='flex gap-x-2 border-[0.5px] bg-slate-800/15 border-green-500 px-2 py-2 rounded-lg items-center cursor-pointer shadow-[0_0_12px_2px_rgba(34,197,94,0.4)] hover:shadow-[0_0_15px_5px_rgba(34,197,94,0.4)] hover:bg-green-500'>
              <img src={img3} width={20} height={20} alt='img3' className='invert'/>
              <p className='text-sm font-sans'>Undergraduate</p>
          </div>
        </div>
        </motion.div>
        </div>
    </div>
  )
}

export default Cover