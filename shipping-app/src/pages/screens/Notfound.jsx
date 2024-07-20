// src/components/NotFound.jsx
function Notfound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-4'>404</h1>
      <p className='text-lg'>Page Not Found</p>
      <button onClick={() => window.history.back()} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'>
        Go Back
      </button>
    </div>
  );
}

export default Notfound;
