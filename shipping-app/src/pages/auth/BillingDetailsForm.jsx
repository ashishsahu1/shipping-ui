import Navbar from "../../components/Navbar";
import { useState } from "react";

const countryCodes = [
  { code: '+91', name: 'India', map: 'https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png' },
  { code: '+1', name: 'USA', map: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwxhCMpFSg4qToHq_HKLhhU6bo5f1JJPh8w&s' },
  { code: '+44', name: 'UK', map: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6NjUzMsxiPYELyWrKg17MA4eLo47fkkM2w&s' },
  { code: '+61', name: 'Australia', map: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQT_K0zXpTtFrzz1KPWuXpKaRj0nVBvC-ppw&s' },
  // Add more countries as needed
];

function BillingDetailsForm() {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isGuest, setIsGuest] = useState(false);

  return (
    <>
      <Navbar isLoggedIn={true}/>
      
      <div className='flex flex-col md:flex-row container mx-auto mt-10 p-4'>
        {/* Left Section */}
        <div className='xl:w-4/6 md:w-7/10 w-full bg-white p-8 rounded-lg mt-2 shadow-md md:mr-4'>
          <h2 className='text-left text-2xl font-semibold mb-4 pb-4'>Contact Details</h2>
          <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex items-center'>
              <input 
                type='checkbox' 
                id='guest' 
                className='h-5 w-5 text-orange-600 rounded-full appearance-none border border-gray-300 checked:bg-[#F26A23] checked:border-transparent focus:outline-none'
                checked={isGuest}
                onChange={() => setIsGuest(!isGuest)}
              />
              <label htmlFor='guest' className='ml-2 text-gray-700'>Same as Contact</label>
            </div>
            <div>
              
            </div>
            <div>
              <label className='block text-gray-700'>Billing Contact Name</label>
              <input type='text' className='w-full p-2 border rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Billing Contact Number</label>
              <div className='flex relative'>
                <select
                  value={selectedCountry.code}
                  onChange={(e) => {
                    const country = countryCodes.find(country => country.code === e.target.value);
                    setSelectedCountry(country);
                  }}
                  className='p-2 border rounded-l'>
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>
                <div className='absolute inset-y-0 right-2 flex items-center'>
                  <img src={selectedCountry.map} alt={`${selectedCountry.name} map`} className='w-8 h-8 rounded-full' />
                </div>
                <input type='text' className='w-full pl-1 p-2 border rounded-r' />
              </div>
            </div>
            <div>
              <label className='block text-gray-700'>Billing Contact Email Address</label>
              <input type='email' className='w-full p-2 border rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Ebilling Email</label>
              <input type='email' className='w-full p-2 border rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Billing Contact Ref ID</label>
              <input type='text' className='w-full p-2 border rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Ebilling ID</label>
              <input type='text' className='w-full p-2 border rounded' />
            </div>
            
          </form>
          <div className='flex justify-left mt-4'>
            <button className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-1/3'>
              Next
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className='w-full xl:w-2/6 md:w-3/10 flex flex-col justify-end items-center mt-4 md:mt-0'>
          <img
            src='/company.png'
            alt='Company'
            className='w-full h-auto rounded-lg max-w-xs'
          />
        </div>
      </div>
    </>
  );
}

export default BillingDetailsForm;
