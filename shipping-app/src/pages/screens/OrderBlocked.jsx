// import React from 'react';
import Navbar from "../../components/Navbar";

function OrderBlocked() {
  return (
    <>
    <Navbar isLoggedIn={true}/>
    <div className='relative w-full h-dvh bg-cover bg-center' style={{ backgroundImage: 'url(/background.png)' }}>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='bg-white rounded-lg p-8 shadow-lg flex flex-col items-center'>
          <h3 className='text-2xl font-normal text-center mb-4'>Your request cannot be processed at the moment!</h3>
          <h3 className='text-2xl font-normal text-center mb-4'>Please go back</h3>
          <button
                // onClick={() => navigate("/signup")}
                className='w-60 bg-[#585858] hover:bg-gray text-white font-bold py-2 px-4 rounded mt-2'>
                Go back
              </button>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default OrderBlocked;
