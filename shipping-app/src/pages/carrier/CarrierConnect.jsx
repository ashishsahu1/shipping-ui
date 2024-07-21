import Navbar from "../../components/Navbar";
import { FaArrowLeft, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function CarrierConnect() {
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
        <div className='absolute inset-0 flex flex-col items-center justify-center space-y-8'>
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
              <button className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>
                Add Carrier
              </button>
            </div>
            <div className="table-section overflow-x-auto">
              <table className='w-full border border-gray-300 rounded-lg overflow-hidden'>
              <thead className=''>
                <tr>
                  <th className='p-2 border-b'>Carrier</th>
                  <th className='p-2 border-b'>Key Type</th>
                  <th className='p-2 border-b'>Account Holder</th>
                  <th className='p-2 border-b'>Country Code</th>
                  <th className='p-2 border-b'>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample row */}
                <tr className='hover:bg-gray-100'>
                  <td className='p-2 border-b flex text-center justify-center'>
                    <img className="w-6 mr-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTqNFSY0U46ROPuQRPjkYEfOM7BRdqrhEbA&s" alt="carrier image"  /> UPS
                  </td>
                  <td className='p-2 border-b text-center'>Sample Key Type</td>
                  <td className='p-2 border-b text-center'>Sample Account Holder</td>
                  <td className='p-2 border-b text-center'>+91</td>
                  <td className='p-2 border-b text-center'>
                    <button className='text-red-600'>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarrierConnect;
