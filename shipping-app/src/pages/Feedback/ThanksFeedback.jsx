// import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ThanksFeedback() {
    const navigate = useNavigate();
  return (
    <>
    <Navbar isLoggedIn={true}/>
    <div className='relative w-full h-dvh bg-cover bg-center' style={{ backgroundImage: 'url(/background.png)' }}>
        <button
          className='bg-white hover:bg-gray-100 text-black font-bold m-5 py-2 px-4 rounded shadow-md border'
          onClick={() => navigate(-1)}>
          <FaArrowLeft className='inline mr-2' /> Go Back
        </button>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='bg-white rounded-lg p-8 shadow-lg flex flex-col items-center'>
          <h3 className='text-4xl font-semibold text-center mb-4'>Thankyou for your Feedback</h3>
          <p className='text-xl text-center'>Lorem ipsum dolor sit.</p>
          <p className='text-xl text-center mb-4'>Lorem ipsum dolor sit amet .lorem1</p>
          <FaCheckCircle className='text-green-500 text-6xl' />
        </div>
      </div>
    </div>
    </>
    
  );
}

export default ThanksFeedback;
