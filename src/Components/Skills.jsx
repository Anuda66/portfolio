import React from 'react'
import framework from '../data/framework'
import language from '../data/language'
import Tool from '../data/Tool'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className='px-4 sm:px-24'
    id="skills"
    >
        <div className='mt-4 sm:mt-24 px-4 sm:px-16 bg-slate-700/20 py-6 sm:py-8 rounded-2xl shadow-2xl'>
        <h1 className='text-3xl sm:text-4xl text-blue-300 text-center p-2'>Skill Highlights 💡</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-14 mt-8 sm:mt-14'>
            <motion.div
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.5, delay:0.3}}
            className='border-[1px] border-slate-500 p-4 sm:p-8 rounded-3xl shadow-[0_0_15px_0px_rgba(59,130,246,1)] hover:shadow-[0_0_25px_0px_rgba(59,130,246,1)]'>
            <h1 className='text-xl sm:text-2xl text-slate-300 font-bold text-center'>Frameworks & Libraries</h1>
            <div className='grid grid-cols-3 gap-4 sm:gap-8 items-center mt-6 sm:mt-8'>
                {
                  framework.map((item)=>{
                    return(
                        <div key={item.id}>
                            <div className='bg-slate-900/50 border-[1px] border-blue-400 h-16 flex flex-col sm:flex-row gap-x-4 items-center justify-center rounded-2xl p-2'>
                            <div className='text-xl sm:text-3xl mb-1 sm:mb-0'>
                              <item.icon/>
                            </div>
                            <h1 className='text-sm sm:text-lg text-slate-300 text-center'>{item.name}</h1>
                            </div>
                        </div>
                    );
                  })
                }
            </div>
            </motion.div>
            <motion.div 
            initial={{opacity:0, x:50}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.4, delay:0.3}}
            className='border-[1px] border-slate-500 p-4 sm:p-8 rounded-3xl shadow-[0_0_15px_rgba(0,255,0,1)] hover:shadow-[0_0_25px_rgba(0,255,0,1)]'>
            <h1 className='text-xl sm:text-2xl text-slate-300 font-bold text-center'>Languages & Databases</h1>
            <div className='grid grid-cols-3 gap-4 sm:gap-8 items-center mt-6 sm:mt-8'>
                {
                  language.map((item)=>{
                    return(
                        <div key={item.id}>
                            <div className='bg-slate-900/50 border-[1px] border-green-400 h-16 flex flex-col sm:flex-row gap-x-4 items-center justify-center rounded-2xl p-2'>
                            <div className='text-xl sm:text-3xl mb-1 sm:mb-0'>
                              <item.icon/>
                            </div>
                            <h1 className='text-sm sm:text-lg text-slate-300 text-center'>{item.name}</h1>
                            </div>
                        </div>
                    );
                  })
                }
            </div>
            </motion.div>
            <motion.div
             initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0}}
             transition={{duration:0.4, delay:0.3}}
            className='col-span-1 md:col-span-2 w-full md:w-[800px] mx-auto border-[1px] border-slate-500 p-4 sm:p-8 rounded-3xl shadow-[0_0_15px_rgba(255,0,0,1)] hover:shadow-[0_0_25px_rgba(255,0,0,1)]'>
             <h1 className='text-xl sm:text-2xl text-slate-300 font-bold text-center'>Tools and Technologies</h1>
             <div className='grid grid-cols-3 gap-4 sm:gap-8 items-center mt-6 sm:mt-8'>
                {
                    Tool.map((item)=>{
                        return(
                            <div key={item.id}>
                                <div className='bg-slate-900/50 border-[1px] border-red-400 h-16 flex flex-col sm:flex-row gap-x-4 items-center justify-center rounded-2xl p-2'>
                                <div className='text-xl sm:text-3xl mb-1 sm:mb-0'>
                                  <item.icon/>
                                </div>
                              <h1 className='text-sm sm:text-lg text-slate-300 text-center'>{item.name}</h1>
                                </div>
                            </div>
                        );
                    })
                }
             </div>
            </motion.div>
        </div>
        </div>
    </div>
  )
}

export default Skills