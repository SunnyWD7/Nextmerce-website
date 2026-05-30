import React from "react";

function OfferSection() {
  return (
    <section className="w-full px-4 dark:bg-[#0f172a]">
      <div className="offfer bg-[#f5f5f7] max-w-[1300px] mx-auto p-6 rounded-xl md:flex justify-around items-center dark:bg-[#1e293b]">
        <div className="left py-3 dark:text-white">
          <h4 className="text-xl font-semibold py-3 md:text-2xl">Apple iPhone 14 Plus</h4>
          <h2 className="text-xl font-semibold py-2 md:text-4xl">Up TO 30% OFF</h2>
          <p className="text-md py-2">
            iPhone 14 has the same superspeedy chip that's in iPhone 13 Pro, A15
            Bionic,<br className="hidden sm:inline md:inline"/>with a 5‑core GPU, powers all the latest features.
          </p>
          <button className="py-2 px-8 mt-4 text-white bg-[#3c50e0] hover:bg-[#3C68E5] rounded-3xl">Buy Now</button>
        </div>
        
        <div className="right p-5 flex justify-center ">
            <img src="/src/assets/image2.png" alt="" className="sm:w-[30vw] md:w-[20vw] " />
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
