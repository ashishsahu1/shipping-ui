
function OrderUI() {
  return (
    <div className="shadow-md w-4/5 rounded-2xl">
        <div className="ttl mx-4 mt-4">
            Shipment ID #12
        </div>
        <div className="order-body flex-col md:flex-row flex justify-evenly items-center py-8 gap-4 xl:gap-10">
            <div className="order-section w-20 h-20 bg-slate-400 rounded-md">

            </div>
            <div className="order-section m-4">
                <p>Shipment Partner: Lorem, ipsum</p>
                <p className="my-2"><span className="font-semibold">Expected delivery date :</span>20 June 2024</p>
            </div>
            <div className="order-section">
                <p>Shipment from: Lorem, ipsum</p>
                <p>Shipment to: Lorem, ipsum</p>
            </div>
            <div className="order-section">
                <button
                className='bg-[#F26A23] hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4 mt-6 w-full'>
                View Details
              </button>
            </div>
        </div>
    </div>
  )
}

export default OrderUI