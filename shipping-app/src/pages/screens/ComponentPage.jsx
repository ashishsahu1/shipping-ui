import { useNavigate } from 'react-router-dom';

const routes = [
  { path: "/notlogged", name: "LandingPage (Not Logged In)" },
  { path: "/logged", name: "LandingPage (Logged In)" },
  { path: "/signup", name: "Signup" },
  { path: "/login", name: "Login" },
  { path: "/success", name: "AccountCreation" },
  { path: "/companyform", name: "CompanyDetailsForm" },
  { path: "/contactform", name: "ContactDetailsForm" },
  { path: "/billingform", name: "BillingDetailsForm" },
  { path: "/quoteform", name: "QuoteForm" },
  { path: "/resultload", name: "ResultLoading" },
  { path: "/rate", name: "RateTable" },
  { path: "/placed", name: "PlacedSuccess" },
  { path: "/blocked", name: "OrderBlocked" },
  { path: "/feedbackform", name: "GiveFeedback" },
  { path: "/feedbackthanks", name: "ThanksFeedback" },
  { path: "/carrierconnect", name: "CarrierConnect" },
  { path: "/carrieraccount", name: "CarrierAccConnect" },
  { path: "/summary", name: "OrderSummary" },
  { path: "/details", name: "FurtherDetails" },
  { path: "/dashboard", name: "Dashboard" },
  { path: "/order", name: "Order" },
  { path: "/orderpage", name: "OrderPage" },
  { path: "/admin", name: "AdminDashboard" },
  { path: "*", name: "Notfound" },
];

function ComponentPage() {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Component Page</h2>
      {/* <div className='flex-1 flex justify-center items-center md:w-1/2'>
        <img src='/hero.png' alt='Hero' className='w-96 h-auto' />
      </div> */}
      <ul className="space-y-2 flex gap-4 flex-wrap rounded shadow-xl p-8 w-3/4">
        {routes.map((route, index) => (
          <li key={index}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate(route.path)}
            >
              {route.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComponentPage;
