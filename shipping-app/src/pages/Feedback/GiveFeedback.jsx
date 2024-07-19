import Navbar from "../../components/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function GiveFeedback() {
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
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='bg-white rounded-lg p-8 shadow-lg flex flex-col items-center'>
            <h3 className='text-2xl font-normal text-center mb-4'>
              Your Feedback matters to us, Please share your feedback!
            </h3>
            <textarea 
              className='w-full p-4 border rounded-lg mb-4' 
              rows='6' 
              placeholder='Enter your feedback here...'
            ></textarea>
            <button className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GiveFeedback;
