import './App.css'
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import LandingPage from './pages/home/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountCreation from './pages/screens/AccountCreation';
import CompanyDetailsForm from './pages/auth/CompanyDetailsForm';
import ContactDetailsForm from './pages/auth/ContactDetailsForm';
import BillingDetailsForm from './pages/auth/BillingDetailsForm';
import QuoteForm from './pages/home/QuoteForm';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<AccountCreation/>} />
        <Route path="/companyform" element={<CompanyDetailsForm/>}/>
        <Route path="/contactform" element={<ContactDetailsForm/>}/>
        <Route path="/billingform" element={<BillingDetailsForm/>}/>
        <Route path="/quoteform" element={<QuoteForm/>}/>
      </Routes>
    </Router>
  )
}

export default App
