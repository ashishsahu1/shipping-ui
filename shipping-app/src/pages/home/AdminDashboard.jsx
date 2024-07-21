import Navbar from "../../components/Navbar";
import { FaArrowRight } from "react-icons/fa";

function AdminDashboard() {
  return (
    <>
      <Navbar isLoggedIn={true} isAdmin={true} />
      <div className='flex flex-col md:flex-row'>
        {/* Sidebar */}
        <div className='w-full md:w-1/6 h-auto bg-gray-100 p-4'>
          <ul>
            <li className='p-2 bg-gray-200 rounded'>Dashboard</li>
            <li className='p-2 mt-2 hover:bg-gray-200 rounded'>Help</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className='w-full md:w-5/6 p-4'>
          {/* Top Flex Section */}
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4'>
            <div className='w-full md:w-1/2 p-4 py-8 bg-white rounded-lg shadow-md flex'>
              <div className='w-3/4'>
                <p className='text-lg font-semibold'>Hi! Lets get started with the work!</p>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className='w-1/4 flex justify-end items-center'>
                <img src='/packageicon.png' alt='Metric 1' className='w-16 h-16' />
              </div>
            </div>
            <div className='w-full md:w-1/2 p-4 py-8 bg-white rounded-lg shadow-md flex'>
              <div className='w-3/4'>
                <p className='text-lg font-semibold'>View Raised tickets</p>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className='w-1/4 flex justify-end items-center'>
                <img src='/ticket.png' alt='Metric 1' className='w-16 h-16' />
              </div>
              <div className='w-1/4 flex justify-end items-center'>
                <FaArrowRight className='text-gray-600' />
              </div>
            </div>
          </div>

          {/* Bottom Flex Section */}
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-8'>
            <div className='w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md'>
              <img src='/dot.png' alt='Monthly Order View' className='w-full h-auto mb-2' />
              <div className='flex justify-between'>
                <p className='text-center'>Monthly Order View</p>
                <a href='/more' className='text-center text-blue-500 block'>See more</a>
              </div>
            </div>
            <div className='w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md'>
              <img src='/pie.png' alt='Pie Chart' className='w-full h-auto mb-2' />
              <div className='flex justify-between'>
                <p className='text-center'>Pie Chart View</p>
                <a href='/more' className='text-center text-blue-500 block'>See more</a>
              </div>
            </div>
            <div className='w-full md:w-1/3 p-4 bg-white rounded-lg shadow-md'>
              <img src='/line.png' alt='Line Chart' className='w-full h-auto mb-2' />
              <div className='flex justify-between'>
                <p className='text-center'>Line Chart View</p>
                <a href='/more' className='text-center text-blue-500 block'>See more</a>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4'>
            <div className='w-full md:w-1/2 p-4 bg-white rounded-lg shadow-md flex'>
              <div className='w-3/4'>
                <p className='text-lg font-semibold'>View Payment and Billing</p>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className='w-1/4 flex justify-end items-center'>
                <img src='/money.png' alt='Metric 1' className='w-16 h-16' />
              </div>
              <div className='w-1/4 flex justify-end items-center'>
                <FaArrowRight className='text-gray-600' />
              </div>
            </div>
            <div className='w-full md:w-1/2 p-4 bg-white rounded-lg shadow-md flex'>
              <div className='w-3/4'>
                <p className='text-lg font-semibold'>Manage Content</p>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className='w-1/4 flex justify-end items-center'>
                <img src='/content.png' alt='Metric 1' className='w-16 h-16' />
              </div>
              <div className='w-1/4 flex justify-end items-center'>
                <FaArrowRight className='text-gray-600' />
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4'>
            <div className='w-full md:w-1/2 p-4 bg-white rounded-lg shadow-md flex gap-4'>
              <div className='w-1/4 flex justify-end items-center'>
                <img src='/security.png' alt='Metric 1' className='w-26 h-26' />
              </div>
              <div className='w-3/4 flex flex-col gap-4'>
                <div className='w-full'>
                  <p className='text-lg font-semibold'>Security and Compliance</p>
                  <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore impedit reiciendis eum est mollitia quidem iure animi minus asperiores amet.</p>
                </div>
                <button className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-40'>
                  Buttons
                </button>
              </div>
            </div>
            <div className='w-full md:w-1/2 p-4 bg-white rounded-lg shadow-md flex gap-4'>
              <div className='w-1/4 flex justify-end items-center'>
                <img src='/api.png' alt='Metric 1' className='w-26 h-26' />
              </div>
              <div className='w-3/4 flex flex-col gap-4'>
                <div className='w-full'>
                  <p className='text-lg font-semibold'>API Management</p>
                  <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore impedit reiciendis eum est mollitia quidem iure animi minus asperiores amet.</p>
                </div>
                <button className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-40'>
                  Manage APIs
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
