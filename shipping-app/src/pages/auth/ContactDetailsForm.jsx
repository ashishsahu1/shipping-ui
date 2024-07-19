import Navbar from "../../components/Navbar";
import { useState } from "react";

const countryCodes = [
  { code: '+91', name: 'India', map: 'https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png' },
  { code: '+1', name: 'USA', map: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwxhCMpFSg4qToHq_HKLhhU6bo5f1JJPh8w&s' },
  { code: '+44', name: 'UK', map: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6NjUzMsxiPYELyWrKg17MA4eLo47fkkM2w&s' },
  { code: '+61', name: 'Australia', map: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQT_K0zXpTtFrzz1KPWuXpKaRj0nVBvC-ppw&s' },
  // Add more countries as needed
];

function ContactDetailsForm() {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [courierService, setCourierService] = useState('');

  return (
    <>
      <Navbar isLoggedIn={true}/>
      
      <div className='flex flex-col md:flex-row container mx-auto p-4'>
        {/* Left Section */}
        <div className='xl:w-4/6 md:w-7/10 w-full bg-white p-8 rounded-lg mt-2 shadow-md md:mr-4'>
          <h2 className='text-left text-2xl font-semibold mb-4 pb-4'>Contact Details</h2>
          <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-gray-700'>Name</label>
              <input type='text' className='w-full p-2 border rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Date of Birth</label>
              <input type='date' className='w-full p-2 border rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Email Address</label>
              <input type='email' className='w-full p-2 border rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Contact Number</label>
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
              <label className='block text-gray-700'>City</label>
              <input type='text' className='w-full p-2 border rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Address</label>
              <input type='text' className='w-full p-2 border rounded mb-2' placeholder='Street' />
              <input type='text' className='w-full p-2 border rounded' placeholder='City' />
            </div>
            <div>
              <label className='block text-gray-700'>Select Country</label>
              <select className='w-full p-2 border rounded'>
                <option value=''>Select Country</option>
                <option value='USA'>USA</option>
                <option value='Canada'>Canada</option>
                <option value='UK'>UK</option>
              </select>
            </div>
            <div>
              <label className='block text-gray-700'>Pincode</label>
              <input type='text' className='w-full p-2 border rounded' />
            </div>
            <div>
              <label className='block text-gray-700'>Select Gender</label>
              <select className='w-full p-2 border rounded'>
                <option value=''>Select Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
            </div>
            <div>
              <label className='block text-gray-700'>Previous Courier Service Used</label>
              <select 
                className='w-full p-2 border rounded'
                value={courierService}
                onChange={(e) => setCourierService(e.target.value)}>
                <option value=''>Select Courier Service</option>
                <option value='FedEx'>FedEx</option>
                <option value='DHL'>DHL</option>
                <option value='UPS'>UPS</option>
              </select>
              {courierService === 'Other' && (
                <input 
                  type='text' 
                  className='w-full p-2 border rounded mt-2' 
                  placeholder='Please specify' />
              )}
              <button 
                type='button' 
                className='mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow'
                onClick={() => setCourierService('Other')}>
                Add More
              </button>
            </div>
            <div>
              <label className='block text-gray-700'>Contact Ref ID</label>
              <input type='text' className='w-full p-2 border rounded' />
            </div>
          </form>
          <div className='flex justify-end mt-4'>
            <button className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-1/2'>
              Create Account
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

export default ContactDetailsForm;
