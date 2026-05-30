import React from 'react'
function Trends() {
  return (
    <section className= "dark:bg-[#0f172a]">
      <div className="max-w-[1300px] mx-auto p-4">
        <div className="trends p-6 sm:p-8 md:p-10 sm:w-[94vw] md:w-full bg-cover bg-no-repeat md:flex justify-between items-center rounded-2xl bg-[#0078FC] dark:bg-[#1e293b]"
          
        >
        <div className="text-white flex flex-col gap-3 s ">
            <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold'>Don't Miss Out Latest <br className='hidden sm:block'/> Trends & Offers</h1>
            <p className='text-md'>Register to receive news about the latest offers & discount codes</p>
        </div>
        <div className="link flex flex-col my-5 gap-5 sm:flex-row md:flex-row">
            <input type="text" placeholder='Enter Your Email' className='py-3 px-5 sm:px-24  bg-white rounded-3xl outline-none'/>
            <button className='bg-[#3C50E0] py-3 rounded-3xl text-white text-lg sm:text-sm sm:px-8 md:px-8 hover:bg-[#1C3FB7]'>Subscribe</button>

        </div>
        </div>
        </div>
        </section>
  )
}

export default Trends
