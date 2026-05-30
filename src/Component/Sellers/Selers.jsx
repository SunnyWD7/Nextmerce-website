import React from "react";
import monitor from "../../assets/monitor.webp";
import tab from "../../assets/pad.webp";
import ipad from "../../assets/ipad.webp";
import laptop from "../../assets/laptop.webp";
import run from "../../assets/run.webp";
import tv from "../../assets/led.webp";
import { BsEye } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function Selers() {
  let images = [
    {
      img: monitor,
      title: "Apple iMac M4 24-inch 2025",
      offerprice: "$333",
      price: "$555",
    },

    {
      img: tab,
      title: "Apple AirPods Max",
      offerprice: "$450",
      price: "$500",
    },

    {
      img: ipad,
      title: "iPhone 16 Pro Max",
      offerprice: "$899",
      price: "$930",
    },

    {
      img: laptop,
      title: "MacBook Air M4 chip, 16/256GB",
      offerprice: "$600",
      price: "$699",
    },

    {
      img: run,
      title: "Indoor Steel Adjustable Silent..",
      offerprice: "$888",
      price: "$999",
    },

    {
      img: tv,
      title: "Rangs 43 Inch Frameless FHD Double..",
      offerprice: "$700",
      price: "$800",
    },
  ];
  return (
    <section className=" dark:bg-[#0f172a]">
      <div className="sellers max-w-[1300px] mx-auto p-6 sm:p-8 md:p-10">
        <div className="heading text-xl py-5 font-semibold">
          <h1>Best Sellers</h1>
        </div>
        <div className="flex justify-between gap-4 flex-wrap">
          {images.map((e, index) => (
            <div
              key={index}
              className=" group seller-list relative p-6 overflow-hidden bg-[#F6F7FB] flex flex-col justify-center items-center rounded-2xl w-full sm:w-[48%] md:w-[32%] flex-wrap dark:bg-[#1e293b] "
            >
              <div className="flex flex-col gap-2 font-semibold ">
                <h4 className="text-md text-[#1c274c] dark:text-white">
                  {e.title}
                </h4>
                <p className="text-[#1c274c] self-center text-lg dark:text-white">
                  <span className="line-through text-gray-500 mx-2">
                    {e.price}
                  </span>
                  {e.offerprice}
                </p>
              </div>
              <div>
                <img src={e.img} alt={e.title} />
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-10 flex flex-col gap-4 group-hover:right-6 transition-all duration-300">
                <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center text-lg shadow-md hover:bg-[#3c68e5] hover:text-white duration-300">
                  <BsEye />
                </div>
                <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center text-lg shadow-md hover:bg-red-500 hover:text-white duration-300">
                
                                    <IoCartOutline />
                
                                  </div>
                <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center text-lg shadow-md hover:bg-red-500 hover:text-white duration-300">
                
                                    <CiHeart />
                
                                  </div>
              </div>
            </div>
          ))}
        </div>

        <div className="btn flex justify-center my-10">
          <button className="py-3 px-12 rounded-3xl bg-[#F6F7FB] hover:bg-[#1c274c] hover:text-white dark:bg-[#3c50e0] dark:text-white">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}

export default Selers;
