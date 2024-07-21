import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
// import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

function OrderSummary() {
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
         <h2 className='text-left mt-4 ml-8 lg:ml-32 text-2xl font-semibold mb-1 pb-1'>Lorem ipsum dolor sit.</h2>
      <div className='flex flex-col md:flex-row container mx-auto p-4'>
        {/* Left Section */}
        <div className='flex flex-wrap justify-evenly xl:w-4/6 md:w-7/10 w-full bg-white p-8 rounded-lg shadow-xl '>
         <div className="imgg mb-8 bg-gray-300 w-32 h-32 rounded">
            
         </div>
         <div className="content-txt">
            <h3><span className="font-bold text-2xl">Shipment Partner:Lorem ipsum</span> </h3>
            <div className="col-sec flex flex-wrap gap-8">
                <div className="ship-from py-4">
                    <p className="py-2"><span className="font-bold my-4">Shipment from:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold my-2">Pincode:</span>  KI232</p>
                    <p className="py-2"><span className="font-bold">City:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold">Address:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold">Dimensions:</span>  10 x 10 x 10</p>
                </div>
                <div className="ship-to py-4">
                    <p className="py-2"><span className="font-bold">Shipment to:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold">Pincode:</span>  KI265</p>
                    <p className="py-2"><span className="font-bold">City:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold">Address:</span>  Lorem ipsum</p>
                    <p className="py-2"><span className="font-bold">Weight:</span>  10 lbs</p>
                </div>
            </div>
            <p className="mb-16"><span className="font-bold">Expected delivery date:</span> 20 June 2024</p>
            <div className="order-details flex flex-col justify-evenly md:flex-row">
                <p className=""><span className="font-bold">Rate:</span> $6</p>
                <p><span className="font-bold">Transit Days:</span>  3 Days</p>
                <p><span className="font-bold">Savings:</span>  20%</p>
            </div>
            <div className="flex justify-center item-center my-4">
              <button onClick={()=>{navigate('/resultload')}} className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded  w-3/4 right'>
                Get Quote
              </button>
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

export default OrderSummary;
