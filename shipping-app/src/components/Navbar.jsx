import { useState } from "react";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaBell, FaSearch } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function Navbar({ isLoggedIn, isAdmin }) {
  // Destructure isLoggedIn from props
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const userName = "John Doe"; // Replace with actual user name

  return (
    <nav className='bg-white text-black p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl text-[#F26A23] font-bold'>LOGO</div>

        {/* Menu */}
        {!isAdmin ? (
          <div className='hidden md:flex space-x-8'>
            <a href='#' className='hover:text-gray-600'>
              About Us
            </a>
            <a href='#' className='hover:text-gray-600'>
              Services
            </a>
            <a href='#' className='hover:text-gray-600'>
              How It Works
            </a>
          </div>
        ) : (
          <></>
        )}

        {/* Buttons or User Profile */}
        <div className='hidden md:flex items-center space-x-4'>
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/signup");
                }}
                className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>
                Sign Up
              </button>
            </>
          ) : (
            <>
              {isAdmin ? (
                <div className='flex space-x-4 p-2 bg-white'>
                  <FaBell className='text-gray-600 text-xl cursor-pointer' />
                  <FaSearch className='text-gray-600 text-xl cursor-pointer' />
                </div>
              ) : (
                <></>
              )}

              <div className='flex items-center space-x-2'>
                <FaUserCircle size={24} className='text-gray-600' />
                <span className='text-black font-bold'>{userName}</span>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div className='absolute top-16 p-5 right-0 w-48 bg-white shadow-md z-10'>
          <a href='#' className='block px-4 py-2 text-sm hover:bg-gray-200'>
            About Us
          </a>
          <a href='#' className='block px-4 py-2 text-sm hover:bg-gray-200'>
            Services
          </a>
          <a href='#' className='block px-4 py-2 text-sm hover:bg-gray-200'>
            How It Works
          </a>
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className='w-full bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-2'>
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className='w-full bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-2'>
                Sign Up
              </button>
            </>
          ) : (
            <div className='flex flex-col items-center mt-4'>
              <FaUserCircle size={24} className='text-gray-600 mb-2' />
              <span className='text-black font-bold'>{userName}</span>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
