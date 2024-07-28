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
import Dashboard from './pages/home/Dashboard';
import Order from './pages/home/Order';
import OrderPage from './pages/Order/OrderPage';
import AdminDashboard from './pages/home/AdminDashboard';
import Notfound from './pages/screens/Notfound';
import ComponentPage from './pages/screens/ComponentPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/testui" element={<ComponentPage/>} />
        <Route path="/" element={<LandingPage isLogin={false}/>} />
        <Route path="/logged" element={<LandingPage isLogin={true}/>} />
        <Route path="/notlogged" element={<LandingPage isLogin={false}/>} />
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
        <Route path="/feedbackform" element={<GiveFeedback/>}/>
        <Route path="/feedbackthanks" element={<ThanksFeedback/>}/>
        <Route path="/carrierconnect" element={<CarrierConnect/>}/>
        <Route path="/carrieraccount" element={<CarrierAccConnect/>}/>
        <Route path="/summary" element={<OrderSummary/>}/>
        <Route path="/details" element={<FurtherDetails/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/orderpage" element={<OrderPage/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="*" element={<Notfound/>} />
      
      </Routes>
    </Router>
  )
}

export default App
