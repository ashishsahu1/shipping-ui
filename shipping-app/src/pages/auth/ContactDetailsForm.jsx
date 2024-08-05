import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  return (
    <>
      <Navbar isLoggedIn={true} />
      
      <div className='flex justify-center container mx-auto p-4 w-full'>
        {/* Form Container */}
        <div className='w-full max-w-7xl bg-white p-8 rounded-lg mt-2 shadow-md'>
          <h2 className='text-left text-2xl font-semibold mb-4 pb-4'>Contact Details</h2>
          <form className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            <div className='col-span-4 md:col-span-1'>
              <label className='block text-gray-700 pb-2'>Name</label>
              <input type='text' className='w-full p-2 border rounded' />
            </div>
            <div className='col-span-4 md:col-span-1'>
              <label className='block text-gray-700 pb-2'>Select Location</label>
              <select className='w-full p-2 border rounded'>
                <option value=''>Select Country</option>
                <option value='USA'>USA</option>
                <option value='Canada'>Canada</option>
                <option value='UK'>UK</option>
              </select>
            </div>
            <div className='col-span-4 md:col-span-1'>
              <label className='block text-gray-700 pb-2'>Date of Birth</label>
              <input type='date' className='w-full p-2 border rounded' />
            </div>
            <div className='col-span-4 md:col-span-1'>
              <label className='block text-gray-700 pb-2'>Contact Number</label>
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

            <div className='col-span-4 md:col-span-1'>
              <label className='block text-gray-700 pb-2'>Postal Code</label>
              <input type='text' className='w-full p-2 border rounded' />
            </div>
            <div className='col-span-4 md:col-span-1'>
              <label className='block text-gray-700 pb-2'>City</label>
              <input type='text' className='w-full p-2 border rounded' />
            </div>
            <div className='col-span-4 md:col-span-1'>
              <label className='block text-gray-700 pb-2'>Select Gender</label>
              <select className='w-full p-2 border rounded'>
                <option value=''>Select Gender</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Other'>Other</option>
              </select>
            </div>
            <div className='col-span-4 md:col-span-1'>
              <label className='block text-gray-700 pb-2'>Contact Ref ID</label>
              <input type='text' className='w-full p-2 border rounded' />
            </div>

            <div className='col-span-4'>
              <label className='block text-gray-700 pb-2'>Enter Complete Address</label>
              <input type='text' className='w-full p-2 border rounded mb-4' placeholder='Street' />
              <input type='text' className='w-full p-2 border rounded mb-4' placeholder='City' />
            </div>

            <div className='col-span-4 md:col-span-2'>
              <label className='block text-gray-700 pb-2'>Previous Courier Service Used</label>
              <select 
                className='w-full p-2 border rounded mb-4'
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
            <div className='col-span-4 md:col-span-2'>
              <label className='block text-gray-700 pb-2'>Enter Additional Address</label>
              <input type='text' className='w-full p-2 border rounded mb-4' />
            </div>

            <div className='col-span-4 flex justify-end'>
              <button onClick={()=>{navigate('/billingform')}} className='bg-[#F26A23] hover:bg-orange-700 text-white my-5 h-12 font-bold rounded w-full'>
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactDetailsForm;
