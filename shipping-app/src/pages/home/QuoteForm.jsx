import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useState } from "react";

function QuoteForm() {
  const [sameDayDelivery, setSameDayDelivery] = useState(false);
  const navigate = useNavigate();
  
  const handleGetQuote = () => {
    navigate('/resultload');
    setTimeout(() => {
      navigate('/rate');
    }, 3000); // 3 seconds
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      
      <div className='flex justify-center md:m-10 p-4 align-middle h-100'>
        {/* Form Container */}
        <div className='w-full max-w-7xl bg-white p-8 rounded-lg shadow-xl'>
          <h2 className='text-2xl font-semibold mb-4'>Lorem ipsum dolor sit.</h2>
          <form className='grid grid-cols-1 gap-6'>
            {/* Same Day Delivery Checkbox */}
            <div className='flex items-center mb-6'>
              <input 
                type='checkbox' 
                id='sameDayDelivery' 
                className='h-5 w-5 text-orange-600 rounded-full appearance-none border border-gray-300 checked:bg-[#F26A23] checked:border-transparent focus:outline-none'
                checked={sameDayDelivery}
                onChange={() => setSameDayDelivery(!sameDayDelivery)}
              />
              <label htmlFor='sameDayDelivery' className='ml-2 text-gray-700'>Same Day Delivery</label>
            </div>

            {/* Shipping From Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <h3 className='font-bold mb-4 text-xl'>Shipping From</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-gray-700 mb-2'>Enter place you want to ship from</label>
                    <input type='text' className='w-full p-2 border rounded' />
                  </div>
                  <div>
                    <label className='block text-gray-700 mb-2'>Select Location</label>
                    <select className='w-full p-2 border rounded'>
                      <option value=''>Select Country</option>
                      <option value='USA'>USA</option>
                      <option value='Canada'>Canada</option>
                      <option value='UK'>UK</option>
                    </select>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
                  <div>
                    <label className='block text-gray-700 mb-2'>Postal Code</label>
                    <input type='text' className='w-full p-2 border rounded' />
                  </div>
                  <div>
                    <label className='block text-gray-700 mb-2'>City</label>
                    <input type='text' className='w-full p-2 border rounded' />
                  </div>
                </div>
                <div className='mt-4'>
                  <label className='block text-gray-700 mb-2'>Enter Complete Address</label>
                  <input type='text' className='w-full p-2 border rounded mb-4' />
                  <input type='text' className='w-full p-2 border rounded' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
                  <div>
                    <label className='block text-gray-700 mb-2'>DIMS (L*B*H inches)</label>
                    <div className='flex gap-2'>
                      <input type='text' className='w-full p-2 border rounded' placeholder='L' />
                      <input type='text' className='w-full p-2 border rounded' placeholder='B' />
                      <input type='text' className='w-full p-2 border rounded' placeholder='H' />
                    </div>
                  </div>
                  <div>
                    <label className='block text-gray-700 mb-2'>Weight (lbs)</label>
                    <input type='text' className='w-full p-2 border rounded' />
                  </div>
                </div>
              </div>

              {/* Shipping To Section */}
              <div>
                <h3 className='font-bold mb-4 text-xl'>Shipping To</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-gray-700 mb-2'>Enter place you want to ship to</label>
                    <input type='text' className='w-full p-2 border rounded' />
                  </div>
                  <div>
                    <label className='block text-gray-700 mb-2'>Select Location</label>
                    <select className='w-full p-2 border rounded'>
                      <option value=''>Select Country</option>
                      <option value='USA'>USA</option>
                      <option value='Canada'>Canada</option>
                      <option value='UK'>UK</option>
                    </select>
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
                  <div>
                    <label className='block text-gray-700 mb-2'>Postal Code</label>
                    <input type='text' className='w-full p-2 border rounded' />
                  </div>
                  <div>
                    <label className='block text-gray-700 mb-2'>City</label>
                    <input type='text' className='w-full p-2 border rounded' />
                  </div>
                </div>
                <div className='mt-4'>
                  <label className='block text-gray-700 mb-2'>Enter Complete Address</label>
                  <input type='text' className='w-full p-2 border rounded mb-4' />
                  <input type='text' className='w-full p-2 border rounded' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
                  <div>
                    <label className='block text-gray-700 mb-2'>Preferred Date</label>
                    <input type='date' className='w-full p-2 border rounded' />
                  </div>
                  <button onClick={handleGetQuote} className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-3 px-4 rounded mt-6 w-full'>
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default QuoteForm;
