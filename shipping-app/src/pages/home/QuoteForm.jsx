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
      
      <div className='flex flex-col md:flex-row container mx-auto p-4'>
        {/* Left Section */}
        <div className='xl:w-4/6 md:w-7/10 w-full bg-white p-8 rounded-lg shadow-xl md:mr-4'>
          <h2 className='text-left text-2xl font-semibold mb-1 pb-1'>Lorem ipsum dolor sit.</h2>
          <form className='grid grid-cols-1 gap-4'>
            <div className='flex items-center mb-1'>
              <input 
                type='checkbox' 
                id='sameDayDelivery' 
                className='h-5 w-5 text-orange-600 rounded-full appearance-none border border-gray-300 checked:bg-[#F26A23] checked:border-transparent focus:outline-none'
                checked={sameDayDelivery}
                onChange={() => setSameDayDelivery(!sameDayDelivery)}
              />
              <label htmlFor='sameDayDelivery' className='ml-2 text-gray-700'>Same Day Delivery</label>
            </div>
            <div className='md:flex'>
              <div className='md:w-1/2 md:pr-2'>
                <div className='font-bold mb-2 text-3xl'>Shipping From</div>
                <div className="mb-3">
                  <label className='block text-gray-700'>Enter place you want to ship from</label>
                  <input type='text' className='w-full p-2 border rounded my-2' />
                </div>
                <div className="mb-3">
                  <label className='block text-gray-700'>Select Location</label>
                  <select className='w-full p-2 border rounded my-2'>
                    <option value=''>Select Country</option>
                    <option value='USA'>USA</option>
                    <option value='Canada'>Canada</option>
                    <option value='UK'>UK</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className='block text-gray-700'>Postal Code</label>
                  <input type='text' className='w-full p-2 border rounded my-2' />
                </div>
                <div className="mb-3">
                  <label className='block text-gray-700'>City</label>
                  <input type='text' className='w-full p-2 border rounded my-2' />
                </div>
                <div className="mb-3">
                  <label className='block text-gray-700'>Enter Complete Address</label>
                  <input type='text' className='w-full p-2 border rounded my-2' />
                  <input type='text' className='w-full p-2 border rounded my-2' />
                </div>
              </div>
              <div className='md:w-1/2 md:pl-2'>
                <div className='font-bold mb-2 text-3xl'>Shipping To</div>
                <div className="mb-3">
                  <label className='block text-gray-700'>Enter place you want to ship to</label>
                  <input type='text' className='w-full p-2 border rounded my-2' />
                </div>
                <div className="mb-3">
                  <label className='block text-gray-700'>Select Location</label>
                  <select className='w-full p-2 border rounded my-2'>
                    <option value=''>Select Country</option>
                    <option value='USA'>USA</option>
                    <option value='Canada'>Canada</option>
                    <option value='UK'>UK</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className='block text-gray-700'>Postal Code</label>
                  <input type='text' className='w-full p-2 border rounded my-2' />
                </div>
                <div className="mb-3">
                  <label className='block text-gray-700'>City</label>
                  <input type='text' className='w-full p-2 border rounded my-2' />
                </div>
                <div className="mb-3">
                  <label className='block text-gray-700'>Enter Complete Address</label>
                  <input type='text' className='w-full p-2 border rounded my-2' />
                  <input type='text' className='w-full p-2 border rounded my-2' />
                </div>
              </div>
            </div>
            <div className='flex flex-wrap gap-4'>
              <div className='flex-1'>
                <label className='block text-gray-700'>DIMS (L*B*H inches)</label>
                <div className='flex gap-2'>
                  <input type='text' className='w-full p-2 border rounded my-2' placeholder='L' />
                  <input type='text' className='w-full p-2 border rounded my-2' placeholder='B' />
                  <input type='text' className='w-full p-2 border rounded my-2' placeholder='H' />
                </div>
              </div>
              <div className='flex-1'>
                <label className='block text-gray-700'>Weight (lbs)</label>
                <input type='text' className='w-full p-2 border rounded my-2' />
              </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
              <div className='flex-1 w-1/2'>
                <label className='block text-gray-700'>Preferred Date</label>
                <input type='date' className='w-full p-2 border rounded my-2' />
              </div>
              <button onClick={handleGetQuote}  className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-3 px-4 rounded ml-4 mt-6 w-1/2'>
                Get Quote
              </button>
            </div>
          </form>
        </div>
        {/* Right Section */}
        <div className='w-full xl:w-2/6 md:w-3/10 flex flex-col justify-center items-center mt-4 md:mt-0'>
          <img
            src='/quote.png'
            alt='Company'
            className='w-full h-auto rounded-lg max-w-xs'
          />
        </div>
      </div>
    </>
  );
}

export default QuoteForm;
