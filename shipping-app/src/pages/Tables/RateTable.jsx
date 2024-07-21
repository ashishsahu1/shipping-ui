import { useNavigate } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../../components/Navbar";

function RateTable() {
  const navigate = useNavigate();
  const rates = [
    {
      sno: 1,
      company: "Company A",
      days: 5,
      globalRate: "$200",
      accountRate: "$180",
      savings: "$20",
    },
    {
      sno: 2,
      company: "Company B",
      days: 7,
      globalRate: "$220",
      accountRate: "$200",
      savings: "$20",
    },
    {
      sno: 3,
      company: "Company C",
      days: 7,
      globalRate: "$220",
      accountRate: "$200",
      savings: "$20",
    },
    {
      sno: 4,
      company: "Company B",
      days: 7,
      globalRate: "$220",
      accountRate: "$200",
      savings: "$20",
    },
    {
      sno: 5,
      company: "Company B",
      days: 7,
      globalRate: "$220",
      accountRate: "$200",
      savings: "$20",
    },
    {
      sno: 6,
      company: "Company B",
      days: 7,
      globalRate: "$220",
      accountRate: "$200",
      savings: "$20",
    },
    {
      sno: 7,
      company: "Company B",
      days: 7,
      globalRate: "$220",
      accountRate: "$200",
      savings: "$20",
    },
    {
      sno: 8,
      company: "Company B",
      days: 7,
      globalRate: "$220",
      accountRate: "$200",
      savings: "$20",
    },
    {
      sno: 9,
      company: "Company B",
      days: 7,
      globalRate: "$220",
      accountRate: "$200",
      savings: "$20",
    },
    {
      sno: 10,
      company: "Company B",
      days: 7,
      globalRate: "$220",
      accountRate: "$200",
      savings: "$20",
    },
    // Add more rates as needed
  ];

  return (
    <>
      <Navbar isLoggedIn={true} />
      <div className='container mx-auto p-4'>
        <button
          className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border'
          onClick={() => navigate(-1)}>
          <FaArrowLeft className='inline mr-2' /> Go Back
        </button>
        <h2 className='text-xl font-semibold my-4'>
          10 Rates are available for you
        </h2>
        <div className='overflow-x-auto rounded-lg'>
          <table className='min-w-full bg-white rounded-lg border border-gray-200'>
            <thead>
              <tr className='bg-[#330867]'>
                <th className='py-2 px-4 border-b text-white'>Sno</th>
                <th className='py-2 px-4 border-b text-white'>Company Name</th>
                <th className='py-2 px-4 border-b text-white'>Transit Days</th>
                <th className='py-2 px-4 border-b text-white'>Global Rate</th>
                <th className='py-2 px-4 border-b text-white'>Account Rate</th>
                <th className='py-2 px-4 border-b text-white'>Savings</th>
                <th className='py-2 px-4 border-b text-white'>Action</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((rate) => (
                <tr key={rate.sno} className='text-center'>
                  <td className='py-2 px-4 border-b'>{rate.sno}</td>
                  <td className='py-2 px-4 border-b'>{rate.company}</td>
                  <td className='py-2 px-4 border-b'>{rate.days}</td>
                  <td className='py-2 px-4 border-b'>{rate.globalRate}</td>
                  <td className='py-2 px-4 border-b'>{rate.accountRate}</td>
                  <td className='py-2 px-4 border-b'>{rate.savings}</td>
                  <td className='py-2 px-4 border-b'>
                    <button onClick={()=>{navigate('/summary')}} className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-2 rounded'>
                      Select
                    </button>
                    <FaInfoCircle className='inline-block ml-2 text-gray-500 hover:text-gray-700 cursor-pointer' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-end mt-4'>
          <button className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border mx-1'>
            &lt;
          </button>
          <button className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border mx-1'>
            1
          </button>
          <button className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border mx-1'>
            2
          </button>
          <button className='bg-white text-black font-bold py-2 px-4 rounded shadow-none border-none mx-1'>
            ...
          </button>
          <button className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border mx-1'>
            9
          </button>
          <button className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border mx-1'>
            10
          </button>
          <button className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded shadow-md border mx-1'>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}

export default RateTable;
