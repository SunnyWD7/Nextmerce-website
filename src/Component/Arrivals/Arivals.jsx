import React from "react";

import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import img5 from "../../assets/img5.webp";
import img6 from "../../assets/img6.webp";
import img7 from "../../assets/img7.webp";
import img8 from "../../assets/img8.webp";

import { BsEye } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

function Arivals() {

  let images = [
    {
      img: img1,
      title: "Portable Electric Grinder Maker",
      offerprice: "$450",
      price: "$500",
    },

    {
      img: img2,
      title: "Indoor Steel Adjustable Silent...",
      offerprice: "$888",
      price: "$999",
    },

    {
      img: img3,
      title: "Rangs 43 Inch Frameless FHD...",
      offerprice: "$700",
      price: "$800",
    },

    {
      img: img4,
      title: "iPhone 16 Pro Max",
      offerprice: "$899",
      price: "$930",
    },

    {
      img: img5,
      title: "Apple AirPods Max",
      offerprice: "$450",
      price: "$500",
    },

    {
      img: img6,
      title: "Apple Watch Ultra",
      offerprice: "$89",
      price: "$99",
    },

    {
      img: img7,
      title: "MacBook Air M4 chip, 16/256GB",
      offerprice: "$600",
      price: "$699",
    },

    {
      img: img8,
      title: "Apple iMac M4 24-inch 2025",
      offerprice: "$333",
      price: "$555",
    },
  ];

  return (
    <section className="py-14 dark:bg-[#0f172a]">

      <div className="max-w-[1300px] mx-auto">
        <div className="Arrivals flex justify-between p-6 ">
          <h1 className="text-xl ml-7 sm:text-lg md:text-xl lg:2xl font-semibold dark:text-white">New Arrivals</h1>
          <button className="px-6 py-2 bg-[#f6f7fb] rounded-3xl font-semibold hover:bg-blue-950 hover:text-white dark:text-white dark:bg-[#3c68e5]">View All</button>
        </div>

        <div className="flex flex-wrap gap-8 mx-4 justify-center ">

          {images.map((e, index) => (

            <div key={index} className="group cursor-pointer">

              {/* card */}
              <div className="relative overflow-hidden w-full h-[40vh] sm:w-[40vw] sm:h-[30vh] md:w-[45vw] md:h-[22vh] lg:w-[20vw] lg:h-[30vh]  bg-[#f6f7fb] dark:bg-[#1E293B] rounded-2xl shadow-sm flex justify-center items-center flex-wrap">

                {/* image */}
                <img
                  src={e.img}
                  alt={e.title}
                  className="w-[50%]"
                />

                {/* hover buttons */}
                <div className="absolute -bottom-20 group-hover:bottom-6 transition-all duration-300 flex items-center gap-3">

                  {/* eye icon */}
                  <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center text-lg shadow-md hover:bg-[#3c68e5] hover:text-white duration-300">

                    <BsEye />

                  </div>

                  {/* add to cart */}
                  <button className="py-2 px-6 bg-[#3c68e5] rounded-full text-white text-sm shadow-md hover:bg-black duration-300">

                    Add To Cart

                  </button>

                  {/* heart icon */}
                  <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center text-lg shadow-md hover:bg-red-500 hover:text-white duration-300">

                    <CiHeart />

                  </div>

                </div>

              </div>

              {/* content */}
              <div className="mt-4 flex flex-col gap-2">

                <h4 className="font-semibold text-lg dark:text-white">
                  {e.title}
                </h4>

                <p className="text-lg dark:text-white">

                  {e.offerprice}

                  <span className="text-gray-500 line-through mx-2">
                    {e.price}
                  </span>

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Arivals;