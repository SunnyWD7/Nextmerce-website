import React from "react";
import payment1 from "../../assets/payment-01.svg";
import payment2 from "../../assets/payment-02.svg";
import payment3 from "../../assets/payment-03.svg";
import payment4 from "../../assets/payment-04.svg";
import payment5 from "../../assets/payment-05.svg";
function Footersec() {
    const payment = [
        {
            image:payment1,
            alt:"mastercard"
        },
        {
            image:payment2,
            alt:"visa"
        },
        {
            image:payment3,
            alt:"paypal"
        },
        {
            image:payment4,
            alt:"American Express"
        },
        {
            image:payment5,
            alt:"Westorn union"
        },
    ]
  return (
    <section className="w-full bg-[#F9FAFB] dark:bg-[#0f172a] py-4 md:py-6 ">
      <div className="max-w-[1300px] mx-auto px-2">
        <div className="footerSec flex flex-col md:flex-row justify-between md:items-center gap-3 px-4 ">
            <div className="left">
                <p className="dark:text-white text-[#606882] text-sm">© 2026. All rights reserved by <span className="text-[#1C274C] dark:text-white font-semibold">Pimjo.</span></p>
            </div>
            <div className="middle md:hidden">
                <p className="text-[#606882] text-sm font-semibold">We Accept:</p>
            </div>
            <div className="right flex  gap-x-5 items-center dark:text-white">
            <p className="hidden md:block text-[#606882] text-sm font-semibold">We Accept:</p>
                {payment.map((e,index)=>(
                    <div key={index}>
                     <img src={e.image} alt={e.alt} />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

export default Footersec;
