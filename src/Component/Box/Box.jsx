import React from 'react'

function Box() {
  return (
   <section className='w-full px-4 dark:bg-[#0f172a]'>
    <div className="box max-w-[1300px] mx-auto py-10 flex flex-col md:flex-row gap-8 ">
        <div className="left bg-[#dbf4f3] rounded-xl dark:bg-[#1e293b] dark:text-white p-7 sm:flex justify-between  items-center md:w-[50%] sm:w-full">
            <div className="leftImage flex justify-center p-6 ">
                <img src="./src/assets/running.webp" alt="" className='sm:w-[22vw] md:w-[15vw]' />
            </div>
            <div className="right-text  flex flex-col gap-1 ">
                <h4 className='text-lg '>Foldable Motorised Treadmill</h4>
                <h1 className='md:text-3xl font-semibold text-[#1c274c] sm:self-end'>Workout At Home</h1>
                <h2 className='text-xl text-[#02aaa4] sm:self-end'>Flat 20% off</h2>
                <button className='my-8 py-2 px-8 bg-[#02aaa4] rounded-3xl self-start sm:self-end text-white'>Grab Now</button>
            </div>
        </div>
        <div className="right bg-[#ffece1] rounded-xl dark:bg-[#1e293b] dark:text-white p-7 sm:flex justify-between  items-center md:w-[50%] sm:w-full">
            <div className="leftImage flex justify-center p-6 order-last ">
                <img src="./src/assets/watch.webp" alt="" className='sm:w-[22vw] md:w-[15vw]' />
            </div>
            <div className="right-text  flex flex-col gap-1.5">
                <h4 className='text-lg '>Apple Watch Ultra</h4>
                <h1 className='md:text-3xl sm:text-2xl text-xl  font-semibold text-[#1c274c] '>Up to 40% off</h1>
        
                <p className='text-sm'>The aerospace-grade titanium case strikes the perfect balance of everything.</p>
                <button className='my-8 py-2 px-8 bg-[#f27430] rounded-3xl self-start  text-white '>Buy Now</button>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Box
