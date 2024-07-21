import Navbar from "../../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const accounts = [
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTqNFSY0U46ROPuQRPjkYEfOM7BRdqrhEbA&s",
    "name": "UPS"
  },
  {
    "logo": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/fedex-icon.png",
    "name": "FedEx"
  },
  {
    "logo": "https://i.pinimg.com/originals/85/ff/be/85ffbe5a2d75b81985c63c68ee58bbbf.png",
    "name": "Purolator"
  },
  {
    "logo": "https://www.propack.com/wp-content/uploads/2024/01/canpar.webp",
    "name": "Canpar"
  },
  {
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTqNFSY0U46ROPuQRPjkYEfOM7BRdqrhEbA&s",
    "name": "UPS"
  },
  {
    "logo": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/fedex-icon.png",
    "name": "FedEx"
  },
  {
    "logo": "https://i.pinimg.com/originals/85/ff/be/85ffbe5a2d75b81985c63c68ee58bbbf.png",
    "name": "Purolator"
  },
  {
    "logo": "https://www.propack.com/wp-content/uploads/2024/01/canpar.webp",
    "name": "Canpar"
  },
];

function CarrierAccConnect() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar isLoggedIn={true} />
      <div className='relative w-full h-screen bg-cover bg-center' style={{ backgroundImage: 'url(/background.png)' }}>
        <button
          className='bg-white hover:bg-gray-100 text-black font-bold m-5 py-2 px-4 rounded shadow-md border'
          onClick={() => navigate(-1)}>
          <FaArrowLeft className='inline mr-2' /> Go Back
        </button>
        <div className='mt-20 md:mt-10 xl:mt-0 absolute inset-0 flex flex-col items-center justify-center space-y-8'>
          {/* First White Box */}
          <div className='bg-white rounded-lg mt-60 md:mt-1 lg:mt-0 p-8 lg:w-3/4 shadow-lg max-w-6xl flex flex-col md:flex-row items-center md:items-start'>
            <div className='md:w-1/2 p-4'>
              <h4 className='text-xl font-semibold mb-2'>Carrier Account Connect</h4>
              <p className='mb-2'>
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <div className='md:w-1/2 p-4 flex justify-center'>
              <img src='/parcel.png' alt='Feedback' className='w-32 h-auto' />
            </div>
          </div>

          {/* Second White Box */}
          <div className='bg-white rounded-lg p-8 shadow-lg w-full max-w-6xl'>
            <div className='flex justify-between items-center mb-4'>
              <h4 className="font-bold">Add a Carrier Account</h4>
            </div>
            <div className="logos flex flex-wrap">
              {accounts.map((comp, i) => (
                <div className="flex items-center mb-4 w-1/2 md:w-1/4 p-2" key={i}>
                  <img className="w-10 h-10 object-contain mr-2" src={comp.logo} alt="logo" />
                  <p>{comp.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarrierAccConnect;
