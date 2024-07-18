// import React from 'react';
import Navbar from '../../components/Navbar';

function Signup() {
  return (
    <>
      <Navbar isLoggedIn={false}/>
      
      <div className='container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center'>
        {/* Image Section */}
        <div className='w-full md:w-1/2 mb-8 md:mb-0 flex justify-center'>
          <img
            src='/Signup.png'
            alt='Signup'
            className='w-full max-w-lg h-auto'
          />
        </div>

        {/* Form Section */}
        <div className='w-full md:w-1/2'>
          <div className='max-w-lg mx-auto p-8'>
            <h2 className='text-5xl font-bold text-black mb-4'>SIGN UP</h2>
            <p className='text-gray-700 mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form className='rounded'>
              <div className='mb-4 flex flex-wrap -mx-2'>
                <div className='w-full md:w-1/2 px-2 mb-4 md:mb-0'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='firstname'>
                    First Name
                  </label>
                  <input
                    type='text'
                    id='firstname'
                    placeholder='First Name'
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  />
                </div>
                <div className='w-full md:w-1/2 px-2'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='lastname'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    id='lastname'
                    placeholder='Last Name'
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  />
                </div>
              </div>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='Email'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div className='mb-6'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='password'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  placeholder='Password'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div className='mb-4'>
                <label className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox'
                  />
                  <span className='ml-2 text-gray-700'>I agree to the terms and conditions</span>
                </label>
              </div>
              <div className='flex items-center justify-between mb-4'>
                <button
                  type='submit'
                  className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline'>
                  Sign Up
                </button>
              </div>
              <div className='flex items-center justify-center'>
                <button
                  type='button'
                  className='bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 w-full rounded border border-gray-300 focus:outline-none focus:shadow-outline flex items-center justify-center'>
                  <img
                    src='/google.jpeg'
                    alt='Google logo'
                    className='w-5 h-5 mr-2'
                  />
                  Sign Up with Google
                </button>
              </div>
              <div className='mt-4 text-center'>
                <p className='text-gray-700'>Already have an account? <a href='/signin' className='text-[#F26A23] hover:underline'>Sign In</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
