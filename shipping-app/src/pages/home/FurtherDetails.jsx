import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const paymentMethods = [
  { icon: "/credit.png", name: "Debit card/Credit Card" },
  { icon: "/paypal.png", name: "PayPal" },
  { icon: "netbank.png", name: "Net Banking" },
  { icon: "cod.png", name: "Cash on Delivery" },
];

const countryCodes = [
  {
    code: "+91",
    name: "India",
    map: "https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png",
  },
  {
    code: "+1",
    name: "USA",
    map: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwxhCMpFSg4qToHq_HKLhhU6bo5f1JJPh8w&s",
  },
  {
    code: "+44",
    name: "UK",
    map: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6NjUzMsxiPYELyWrKg17MA4eLo47fkkM2w&s",
  },
  {
    code: "+61",
    name: "Australia",
    map: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQT_K0zXpTtFrzz1KPWuXpKaRj0nVBvC-ppw&s",
  },
  // Add more countries as needed
];

function FurtherDetails() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  return (
    <>
      <Navbar isLoggedIn={true} />
      <button
        className='bg-white m-8 hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border'
        onClick={() => navigate(-1)}>
        <FaArrowLeft className='inline mr-2' /> Go Back
      </button>
      <h2 className='text-left mx-8 text-2xl font-semibold mb-1 pb-1'>
        Add Details
      </h2>
      <div className='flex flex-col md:flex-row container mx-auto p-4'>
        {/* Left Section */}
        <div className='xl:w-4/6 md:w-7/10 w-full bg-white p-8 rounded-lg shadow-xl md:mr-4'>
          <form className='grid grid-cols-1 gap-4'>
            <div className='md:flex'>
              <div className='md:w-1/2 md:pr-2'>
                <div className='font-bold mb-2 text-3xl'>Sender</div>
                <div>
                  <label className='block text-gray-700'>
                    Company/Person Name
                  </label>
                  <input type='text' className='w-full p-2 border rounded' />
                </div>

                <div>
                  <label className='block text-gray-700'>Email Address</label>
                  <input type='text' className='w-full p-2 border rounded' />
                </div>
                <div>
                  <label className='block text-gray-700'>Contact Number</label>
                  <div className='flex relative'>
                    <select
                      value={selectedCountry.code}
                      onChange={(e) => {
                        const country = countryCodes.find(
                          (country) => country.code === e.target.value
                        );
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
                      <img
                        src={selectedCountry.map}
                        alt={`${selectedCountry.name} map`}
                        className='w-8 h-8 rounded-full'
                      />
                    </div>
                    <input
                      type='text'
                      className='w-full pl-1 p-2 border rounded-r'
                    />
                  </div>
                </div>
              </div>
              <div className='md:w-1/2 md:pl-2'>
                <div className='font-bold mb-2 text-3xl'>Receiver</div>
                <div>
                  <label className='block text-gray-700'>
                    Company/Person Name
                  </label>
                  <input type='text' className='w-full p-2 border rounded' />
                </div>

                <div>
                  <label className='block text-gray-700'>Email Address</label>
                  <input type='text' className='w-full p-2 border rounded' />
                </div>
                <div>
                  <label className='block text-gray-700'>Contact Number</label>
                  <div className='flex relative'>
                    <select
                      value={selectedCountry.code}
                      onChange={(e) => {
                        const country = countryCodes.find(
                          (country) => country.code === e.target.value
                        );
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
                      <img
                        src={selectedCountry.map}
                        alt={`${selectedCountry.name} map`}
                        className='w-8 h-8 rounded-full'
                      />
                    </div>
                    <input
                      type='text'
                      className='w-full pl-1 p-2 border rounded-r'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4 flex-wrap gap-4'>
              <h4>Select a payment method</h4>
              {/* Grid of 4 */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className='flex items-center p-4 cursor-pointer hover:bg-gray-100'>
                    <img
                      src={method.icon}
                      alt={method.name}
                      className='w-15 s h-15 mr-4'
                    />
                    <span className='text-gray-700'>{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
              <button
                onClick={() => {
                  navigate("/placed");
                }}
                className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-3 px-4 rounded ml-4 mt-6 w-full'>
                Proceed to pay
              </button>
            </div>
          </form>
        </div>
        {/* Right Section */}
        <div className='w-full xl:w-2/6 md:w-3/10 flex flex-col justify-center items-center mt-4 md:mt-0'>
          <img
            src='/paymentPage.png'
            alt='Company'
            className='w-full h-auto rounded-lg max-w-xs'
          />
        </div>
      </div>
    </>
  );
}

export default FurtherDetails;
