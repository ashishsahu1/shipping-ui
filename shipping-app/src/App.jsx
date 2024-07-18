import './App.css'
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import LandingPage from './pages/home/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountCreation from './pages/screens/AccountCreation';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<AccountCreation/>} />
      </Routes>
    </Router>
  )
}

export default App
