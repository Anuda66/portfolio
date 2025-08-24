import React from 'react'
import { motion } from 'framer-motion'

function Expiience() {
  return (
    <div id="experience">
      <div className="mt-12 sm:mt-20">
        <h1 className="text-2xl sm:text-4xl text-blue-500 font-bold text-center">
          Experience 📂
        </h1>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }} 
          className='mt-10 px-4 sm:px-16 bg-slate-700/20 py-6 sm:py-8 rounded-2xl shadow-2xl md:mx-60 space-y-4 mx-4'>
          <h1 className='text-2xl font-bold'>Software Engineering Intern</h1>
          <p className='text-blue-700 text-lg'> Flego Innovation (Pvt) Ltd </p>
          <p className='text-base text-gray-600'>2025 - Present</p>
          <p className=''>Build responsive web applications with React and Tailwind CSS.Develop secure RESTful APIs using Node.js and Express, streamlining data
            workflows for business-critical applications.Build intuitive UI/UX that delights users while driving engagement and
            efficiency.
          </p>
          <div className='flex space-x-6 text-blue-300 text-sm'>
            <p>React</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>Tailwind CSS</p>
            <p>RESTful APIs</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Expiience
