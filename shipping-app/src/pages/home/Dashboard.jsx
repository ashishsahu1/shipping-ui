import Navbar from "../../components/Navbar";
import OrderUI from "../../components/OrderUI";
import { FaUserCircle } from "react-icons/fa";
import ProgressBar from "../../components/ProgressBar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar isLoggedIn={true}/>
      <div className='main-body m-4'>
        <p className='text-xl font-bold lg:mx-40 my-8'>User Dashboard</p>
        <div className='user-dashboard flex flex-col xl:flex-row justify-center items-center m-8 rounded gap-8 xl:px-32'>
          <div className='dash-section shadow-lg h-64 md:h-52 w-full flex flex-col  md:flex-row justify-evenly items-center'>
            <img
              className='w-20 h-auto package-icon'
              src='/packageicon.png'
              alt=''
            />
            <p>Hi! It is a good day to send a new package</p>
            <button className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4 mt-6 w-30'  onClick={() => {
                  navigate("/quoteform");
                }}>
              Send package
            </button>
          </div>
          <div className='parent-section w-full h-full gap-8  flex flex-col md:flex-row justify-center items-center'>
            <div className='dash-section shadow-md rounded h-52 p-8 md:w-1/2'>
              <p className='text-xl font-semibold mb-2'>Carrier Connect</p>
              <p>Connect with different Carrier</p>
              <button className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4 mt-6 w-30'>
                Send package
              </button>
            </div>
            <div className='dash-section shadow-md p-8 flex flex-col justify-center items-center md:w-1/2'>
              <div className='profile-icon'>
                <div className='flex flex-row gap-2 justify-center items-center mt-4'>
                  <FaUserCircle size={24} className='text-gray-600 mb-2' />
                  <span className='text-black font-bold'>Test User</span>
                </div>
              </div>
              <p>Profile completed 60%</p>
              <div className='progress w-full flex items-center justify-center'>
                <ProgressBar progress={60} />
              </div>
              <button className='bg-[#fdb994] hover:bg-orange-400 text-black font-bold py-2 px-4 rounded mt-6'>
                Edit profile
              </button>
            </div>
          </div>
        </div>
        <p className='text-xl font-bold lg:mx-40 my-8'>Order History</p>
        <div className='order-history flex-col flex justify-center items-center gap-4'>
          <OrderUI />
          <OrderUI />
          <div className='pager w-full px-8 xl:mr-60'>
            <div className='flex justify-end mt-4'>
              <button className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border mx-1'>
                &lt;
              </button>
              <button className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border mx-1'>
                1
              </button>
              <button className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border mx-1'>
                2
              </button>
              <button className='bg-white text-black font-bold py-2 px-4 rounded shadow-none border-none mx-1'>
                ...
              </button>
              <button className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border mx-1'>
                9
              </button>
              <button className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border mx-1'>
                10
              </button>
              <button className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border mx-1'>
                &gt;
              </button>
            </div>
          </div>
        </div>

        <div className='feed-help flex justify-evenly flex-wrap md:flex-nowrap md:m-20 lg:mx-40 gap-8'>
          <div className='section w-full md:w-1/2 my-4 rounded-md h-auto feedback flex flex-row shadow-md p-4'>
            <img className='w-32 h-auto' src='/feedback.png' alt='' />
            <div className='flex flex-col '>
              <p className="font-semibold">Share your Feedback</p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                perspiciatis nemo doloribus.
              </p>
              <button className='bg-[#F26A23]  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4 mt-6 w-40 lg:w-auto right'>
                Send Feedback
              </button>
            </div>
          </div>

          <div className='section w-full md:w-1/2 my-4 rounded-md h-auto feedback flex flex-row shadow-md p-4'>
            <img className='w-32 h-auto' src='/help.png' alt='' />
            <div className='flex flex-col '>
              <p className="font-semibold">Need any help?</p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                perspiciatis nemo doloribus.
              </p>
              <button className='bg-[#F26A23] lg:w-auto  hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4 mt-6 w-40 right'>
                Ask for help
              </button>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default Dashboard;
