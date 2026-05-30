import React, { useEffect, useState } from 'react'

function Timmers() {
    const[days,setDays]=useState(0)
    const[hours,setHours]=useState(0)
    const[mins,setMins]=useState(0)
    const[secs,setSecs]=useState(0)

    const deadline = "June,31,2026"
    const getTime = ()=>{
        const time = Date.parse(deadline)-Date.now();
        setDays(Math.floor(time/(1000*60*60*24)));
        setHours(Math.floor(time/(1000*60*60)%24));
        setMins(Math.floor((time/1000/60)%60));
        setSecs(Math.floor((time/1000)%60));
       
        
    }
    useEffect(()=>{
   const interval = setInterval(()=>getTime(),1000);
      return ()=> clearInterval(interval);
    },[])
  return (
     <section className="w-full px-4 dark:bg-[#0f172a]">
      <div className="offfer bg-[#d0e9f3] max-w-[1300px] mx-auto p-6 rounded-xl md:flex justify-around items-center dark:bg-[#1e293b]">
        <div className="left py-3 dark:text-white flex flex-col gap-1">
          <h4 className="text-lg font-semibold py-3 md:text-2xl text-[#3c58e0] dark:text-white ">Don’t Miss!!</h4>
          <h2 className="text-lg font-bold py-2 md:text-4xl text-[#1c274c] dark:text-white ">Enhance Your Music Experience</h2>
          <p className="text-md py-2 font-semibold">
            SOG Headphone
          </p>
          <div className="timmer flex flex-wrap gap-5">
            <div className="days flex flex-col">
                <h4 className=' px-6 py-3 bg-white shadow-xl rounded-xl text-lg md:text-2xl font-bold dark:bg-[#1e293b]'>{days<10?"0"+days:days}</h4>
                <p className='self-center text-lg'>Days</p>
            </div>
             <div className="Hours flex flex-col ">
                <h4 className=' px-6 py-3 bg-white shadow-xl rounded-xl text-lg md:text-2xl font-bold dark:bg-[#1e293b]'>{hours<10?"0"+hours:hours}</h4>
                <p className='self-center text-lg'>Hours</p>
            </div>
             <div className="minutes flex flex-col">
                <h4 className=' px-6 py-3 bg-white shadow-xl rounded-xl text-lg md:text-2xl font-bold dark:bg-[#1e293b]'>{mins<10?"0"+mins:mins}</h4>
                <p className='self-center text-lg'>minutes</p>
            </div>
             <div className="seconds flex flex-col ">
                <h4 className='px-6 py-3 bg-white shadow-xl rounded-xl text-lg md:text-2xl font-bold dark:bg-[#1e293b]'>{secs<10?"0"+secs:secs}</h4>
                <p className=' self-center text-lg'>Seconds</p>
            </div>
          </div>
          <button className="py-3 px-8 mt-4 text-white bg-[#3c50e0] hover:bg-[#3C68E5] rounded-3xl self-start">Checks it Out</button>
        </div>
        
        <div className="right hidden p-5 md:flex justify-center sm:hidden  ">
            <img src="/src/assets/Headphone.webp" alt="" className="w-[25vw] " />
        </div>
      </div>
    </section>
  )
}

export default Timmers
