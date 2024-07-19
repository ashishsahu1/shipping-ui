// import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../../components/Navbar";

function PlacedSuccess() {
  return (
    <>
    <Navbar isLoggedIn={true}/>
    <div className='relative w-full h-dvh bg-cover bg-center' style={{ backgroundImage: 'url(/background.png)' }}>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='bg-white rounded-lg p-8 shadow-lg flex flex-col items-center'>
          <h1 className='text-4xl font-semibold text-center mb-4'>Order Placed Successfully</h1>
          <p className='text-xl text-center'>Lorem ipsum dolor sit.</p>
          <p className='text-xl text-center mb-4'>Lorem ipsum dolor sit amet.</p>
          <FaCheckCircle className='text-green-500 text-6xl' />
        </div>
      </div>
    </div>
    </>
    
  );
}

export default PlacedSuccess;
