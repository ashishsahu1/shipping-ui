import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
// import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

function OrderPage() {
//   const [sameDayDelivery, setSameDayDelivery] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Navbar isLoggedIn={true} />
      <button
          className='bg-white hover:bg-gray-100 text-black font-bold m-2 py-2 px-4 rounded shadow-md border'
          onClick={() => navigate(-1)}>
          <FaArrowLeft className='inline mr-2' /> Go Back
        </button>
         <h2 className='text-left mt-4 ml-32 text-2xl font-semibold mb-1 pb-1'>View Order details</h2>
      <div className='flex flex-col md:flex-row container mx-auto p-4'>
        {/* Left Section */}
        <div className='flex justify-evenly xl:w-4/6 md:w-7/10 w-full bg-white p-16 rounded-lg shadow-xl md:mr-4'>
         <div className="imgg mr-6 bg-gray-300 w-32 h-32 rounded">
            
         </div>
         <div className="content-txt">
            <h3><span className="font-bold text-2xl">Shipment Partner:Lorem ipsum</span> </h3>
            <div className="col-sec flex">
                <div className="ship-from py-8">
                    <p className="py-2"><span className="font-bold my-4">Name:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold my-4">Shipment from:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold my-2">Pincode:</span>  KI232</p>
                    <p className="py-2"><span className="font-bold">City:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold">Address:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold">Email:</span>  loremipsum@ipsum.com</p>
                    <p className="py-2"><span className="font-bold">Contact:</span>  999999999</p>
                    <p className="py-2"><span className="font-bold">Dimensions:</span>  10 x 10 x 10</p>
                </div>
                <div className="ship-to py-8 ml-8">
                    <p className="py-2"><span className="font-bold my-4">Name:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold">Shipment to:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold">Pincode:</span>  KI265</p>
                    <p className="py-2"><span className="font-bold">City:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold">Address:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold">Email:</span>  loremipsum@ipsum.com</p>
                    <p className="py-2"><span className="font-bold">Contact:</span>  999999999</p>
                    <p className="py-2"><span className="font-bold">Weight:</span>  10 lbs</p>
                </div>
            </div>
            <p className="mb-16"><span className="font-bold">Expected delivery date:</span> 20 June 2024</p>
            <div className="order-details flex justify-evenly">
                <p className=""><span className="font-bold">Rate:</span> $6</p>
                <p><span className="font-bold">Transit Days:</span>  3 Days</p>
                <p><span className="font-bold">Savings:</span>  20%</p>
            </div>
            
         </div>
        
          
        </div>

        {/* Right Section */}
        <div className='w-full xl:w-2/6 md:w-3/10 flex flex-col justify-end items-center mt-4 md:mt-0'>
          <img
            src='/summary.png'
            alt='Company'
            className='w-full h-auto rounded-lg max-w-xs'
          />
        </div>
      </div>
    </>
  );
}

export default OrderPage;
