import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../assets/VC.jpg';
import image2 from '../assets/susl.png';

const Education = () => {
  const educationData = [
    {
      image: image1,
      institution: ' Vijitha Central College, Dickwella',
      degree: 'G.C.E Advanced Level in Science Stream',
      period: '2004 - 2017'
    },
    {
      image: image2,
      institution: 'Sabaragamuwa University of Sri Lanka',
      degree: 'B.Sc.(Hons) in Computer Science and Technology',
      period: '2020 - 2025'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 mt-8"
    id="education"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold text-blue-500 flex items-center justify-center">
          Education 
          <span className="ml-3">🎓</span>
        </h2>
      </motion.div>

      <div className="relative mt-14">
        
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{opacity:1, x:0}}
              transition={{ duration: 0.7, delay:0.3 }}
              className={`flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 
                ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
            
              {/* Education Card */}
              <div className="w-full max-w-lg border-2 border-blue-400 rounded-lg p-6 hover:shadow-xl shadow-[0_0_12px_5px_rgba(59,130,246,0.4)] transition-shadow duration-300 ">
                <div className="flex items-center mb-4">
                  <img 
                    src={edu.image} 
                    alt={edu.institution} 
                    className="w-16 h-16 object-cover rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-200">{edu.institution}</h3>
                    <p className="text-slate-400 text-sm">{edu.period}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic">{edu.degree}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;