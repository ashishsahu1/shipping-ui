import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'

function LandingPage() {
  // eslint-disable-next-line no-undef
  // const [isLogin, setIsLogin] = useState(false)
  // function LoginHandler(){
  //   setIsLogin(true);
  // }
  const isLogin = false;
  return (
    <>
        <Navbar isLoggedIn={isLogin}/>
        <Hero isLogin={isLogin}/>
    </>
  )
}

export default LandingPage