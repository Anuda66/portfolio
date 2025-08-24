import React from 'react';
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';

const ResponsiveNavbar = ({ onNavItemClick, onClose }) => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="md:hidden fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl hover:text-blue-500 transition-colors"
      >
        <MdClose />
      </button>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center space-y-6 w-full px-2 mt-96 rounded-lg py-8 bg-slate-950/100"
      >
        {[
          { id: 'cover', label: 'About' },
          { id: 'experience', label: 'Experience' },
          { id: 'education', label: 'Education' },
          { id: 'skills', label: 'Skills' },
          { id: 'projects', label: 'Projects' },
          { id: 'message', label: 'Message Me' }
        ].map((item) => (
          <motion.button
            key={item.id}
            variants={itemVariants}
            onClick={() => {
              onNavItemClick(item.id);
              onClose();
            }}
            className="text-lg text-white hover:text-blue-500 transition-colors duration-300 transform hover:scale-105 font-medium tracking-wider"
          >
            {item.label}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ResponsiveNavbar;