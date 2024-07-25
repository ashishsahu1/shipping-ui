// import React from 'react';
import { FaArrowRight, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function Hero({ isLogin }) {
  const navigate = useNavigate();
  return (
    <div className='container mx-auto pt-32 px-4 py-16 flex flex-col md:flex-row items-center'>
      {!isLogin ? (
        // Buttons
        <div className='flex-1 flex justify-center mb-8 md:mb-0'>
        <div className='flex-1 mb-8 md:mb-0 flex flex-col space-y-8 md:space-y-14 max-w-md w-full md:w-1/2'>
          <button onClick={()=>{navigate('/login')}} className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold text-xl md:text-3xl py-6 px-6 rounded-lg flex items-center justify-center w-full'>
            <span>Send a Package</span>
            <FaArrowRight className='ml-2' />
          </button>
          <button onClick={()=>{navigate('/signup')}} className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold text-xl md:text-3xl py-6 px-6 rounded-lg flex items-center justify-center w-full'>
            <FaUser className='mr-2' />
            <span>Create an account</span>
          </button>
        </div>
        </div>
      ) : (
        // Buttons
        <div className='flex-1 flex justify-center mb-8 md:mb-0'>
        <div className='flex-1 mb-8 md:mb-0 flex flex-col space-y-14 max-w-md w-full md:w-1/2'>
          <button onClick={()=>{navigate('/quoteform')}} className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold text-3xl py-6 px-6 rounded-lg flex items-center justify-center w-full'>
            <span>Send a Package</span>
            <FaArrowRight className='ml-2' />
          </button>
          <button onClick={()=>{navigate('/contactform')}} className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold text-3xl py-6 px-6 rounded-lg flex items-center justify-center w-full'>
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
