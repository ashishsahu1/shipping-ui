// import React from 'react';
import { FaArrowRight, FaUser } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Hero({ isLogin }) {
  return (
    <div className='container mx-auto pt-32 px-4 py-16 flex flex-col md:flex-row items-center'>
      {!isLogin ? (
        <div className='flex-1 mb-8 md:mb-0'>
          <h2 className='text-5xl font-normal text-black mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            veritatis!
          </h2>
          <p className='text-xl text-black mb-2'>Lorem ipsum dolor sit amet.</p>
          <h2 className='text-4xl text-[#F26A23]'>
            Lorem ipsum dolor sit amet consectetur.
          </h2>
        </div>
      ) : (
        // Buttons
        <div className='flex-1 flex justify-center mb-8 md:mb-0'>
        <div className='flex-1 mb-8 md:mb-0 flex flex-col space-y-4 max-w-md w-full md:w-1/2'>
          <button className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-4 px-6 rounded flex items-center justify-center w-full'>
            <span>Send a Package</span>
            <FaArrowRight className='ml-2' />
          </button>
          <button className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-4 px-6 rounded flex items-center justify-center w-full'>
            <FaUser className='mr-2' />
            <span>Create an account</span>
          </button>
        </div>
        </div>
      )}

      {/* Image Section */}
      <div className='flex-1 flex justify-center items-center md:w-1/2'>
        <img src='/hero.png' alt='Hero' className='w-96 h-auto' />
      </div>
    </div>
  );
}

export default Hero;
