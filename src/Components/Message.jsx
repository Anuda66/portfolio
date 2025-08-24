import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const Message = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d35669a1-4a28-48b3-9c98-07825f23e38b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mesage sent successfully!",
        icon: "success"
      });
    }
  };



  return (
    <div
      id="message">
      <div className='mt-16'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className='text-center text-3xl font-semibold text-blue-400/90 drop-shadow-lg'>Get In Touch </motion.h1>
        <div 
                className='mt-28  justify-center md:mx-96 mx-10'>

          <p className=" text-lg text-center mb-10">I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!</p>

          <form onSubmit={onSubmit} className="space-y-6" >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Full Name
              </label>
              <div className="mt-1">
                <input id="name" name="name" type="text" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="John Doe"/>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your message here..."
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
                Submit
              </button>
            </div>
          </form>
          <div className='flex flex-col md:flex-row gap-8 justify-center mt-16 text-center text-slate-300 '>
            <div className='flex flex-col gap-2 items-center bg-black p-5 rounded-xl border border-slate-600 hover:shadow-[0_0_12px_5px_rgba(59,130,246,0.4)] transition-shadow duration-300 w-full md:w-auto'>
              <MdEmail className='text-2xl text-blue-700' />
              <p>Email</p>
              <p className='text-gray-500'>anudaransara@gmail.com </p>
            </div>
            <div className='flex flex-col gap-2 items-center bg-black p-5 rounded-xl border border-slate-600 hover:shadow-[0_0_12px_5px_rgba(59,130,246,0.4)] transition-shadow duration-300  w-full md:w-auto'>
              <FaPhoneAlt className='text-2xl text-blue-700'  />
              <p>Phone</p>
              <p className='text-gray-500'>+94 74 020 2565 </p>
            </div>
            <div className='flex flex-col gap-2 items-center bg-black p-5 rounded-xl border border-slate-600 hover:shadow-[0_0_12px_5px_rgba(59,130,246,0.4)] transition-shadow duration-300  w-full md:w-auto'>
              <FaLocationDot className='text-2xl text-blue-700'   />
              <p>Location</p>
              <p className='text-gray-500'>Matara, Sri Lanka </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Message;
