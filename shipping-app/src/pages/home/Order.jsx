import Navbar from "../../components/Navbar"
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import OrderUI from "../../components/OrderUI";

function Order() {
    const navigate = useNavigate();
  return (
    <>
        <Navbar isLoggedIn={true}/>
         <button
          className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded m-4 shadow-md border'
          onClick={() => navigate(-1)}>
          <FaArrowLeft className='inline mr-2' /> Go Back
        </button>
        <div className="orders-list flex flex-col justify-center items-center gap-4">
            <OrderUI/>
            <OrderUI/>
            <OrderUI/>
        </div>
        <div className='flex justify-end mt-8 xl:mx-40'>
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


    </>
  )
}

export default Order