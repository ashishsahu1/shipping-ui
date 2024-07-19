import { useEffect } from "react";
import Navbar from "../../components/Navbar";

function ResultLoading() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navbar isLoggedIn={true} />
      <div className='relative w-full h-dvh bg-cover bg-center' style={{ backgroundImage: 'url(/background.png)' }}>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='bg-white rounded-lg p-5 lg:px-32 shadow-lg flex flex-col items-center'>
            <p className='text-2xl text-center mb-4'>Results are loading</p>
            <div>
              <lottie-player
                src="https://lottie.host/1d7988b4-c646-49e1-ac35-2686b0043602/8pS8vDcaMV.json"
                background="##FFFFFF"
                speed="1"
                style={{ width: '200px', height: '200px' }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultLoading;
