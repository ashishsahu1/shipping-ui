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
import ResultLoading from './pages/screens/ResultLoading';
import RateTable from './pages/Tables/RateTable';
import PlacedSuccess from './pages/screens/PlacedSuccess';
import OrderBlocked from './pages/screens/OrderBlocked';
import GiveFeedback from './pages/Feedback/GiveFeedback';
import ThanksFeedback from './pages/Feedback/ThanksFeedback';
import CarrierConnect from './pages/carrier/CarrierConnect';
import CarrierAccConnect from './pages/carrier/CarrierAccConnect';
import OrderSummary from './pages/Order/OrderSummary';
import FurtherDetails from './pages/home/FurtherDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage isLogin={false}/>} />
        <Route path="/logged" element={<LandingPage isLogin={true}/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<AccountCreation/>} />
        <Route path="/companyform" element={<CompanyDetailsForm/>}/>
        <Route path="/contactform" element={<ContactDetailsForm/>}/>
        <Route path="/billingform" element={<BillingDetailsForm/>}/>
        <Route path="/quoteform" element={<QuoteForm/>}/>
        <Route path="/resultload" element={<ResultLoading/>}/>
        <Route path="/rate" element={<RateTable/>}/>
        <Route path="/placed" element={<PlacedSuccess/>}/>
        <Route path="/blocked" element={<OrderBlocked/>}/>
        <Route path="/feedback/form" element={<GiveFeedback/>}/>
        <Route path="/feedback/thanks" element={<ThanksFeedback/>}/>
        <Route path="/carrier/connect" element={<CarrierConnect/>}/>
        <Route path="/carrier/account" element={<CarrierAccConnect/>}/>
        <Route path="/summary" element={<OrderSummary/>}/>
        <Route path="/details" element={<FurtherDetails/>}/>
        
      
      </Routes>
    </Router>
  )
}

export default App
