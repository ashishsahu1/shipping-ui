import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'

// eslint-disable-next-line react/prop-types
function LandingPage({isLogin}) {
  return (
    <>
        <Navbar isLoggedIn={isLogin}/>
        <Hero isLogin={isLogin}/>
    </>
  )
}

export default LandingPage