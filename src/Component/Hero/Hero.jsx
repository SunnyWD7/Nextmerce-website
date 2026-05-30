import React from "react";
import img1 from "../../assets/1.webp";
import img2 from "../../assets/2.webp";
import img3 from "../../assets/3.webp";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import { IoRocketOutline } from "react-icons/io5";
import { FiRefreshCw } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

function Hero() {
  const images = [
    {
      img: img1,
      heading: "Premium Design",
      title: "Redmi 12 Pro",
      about: "Advanced imaging performance with a 200 AI camera with Enhanced Image Quality",
      button: "Shop Now",
    },
    {
      img: img2,
      heading: "Special Edition",
      title: "Apple Headset",
      about: "Transparency mode and Spatial Audio delivers a Premium Listening Experience",
      button: "Shop Now",
    },
    {
      img: img3,
      heading: "Limited Edition",
      title: "iPhone 16 Pro Max",
      about: "Featuring an A18 Chip, Liquid Glass and AI Powered Innovation",
      button: "Shop Now",
    },
  ];

  return (
    <section className="w-full bg-gray-50 dark:bg-[#0f172a] py-4 md:py-6">
      <div className="max-w-[1300px] mx-auto px-4">

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-6 mt-24">

          {/* ── Swiper ── */}
          <div className="w-full md:w-[65%]">
            <Swiper
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Pagination, Autoplay]}
              className="mySwiper w-full h-full rounded-2xl overflow-hidden"
              style={{ height: "100%" }}
            >
              {images.map((e, index) => (
                <SwiperSlide key={index} style={{ height: "100%" }}>
                  <div
                    className="h-[260px] sm:h-[340px] md:h-full bg-cover bg-center flex items-center px-6 sm:px-10"
                    style={{ backgroundImage: `url(${e.img})` }}
                  >
                    <div className="text-white leading-8">
                      <h1 className="text-sm sm:text-base md:text-lg font-semibold">
                        {e.heading}
                      </h1>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-1">
                        {e.title}
                      </h2>
                      <p className="mt-3 text-xs sm:text-sm md:text-base max-w-[280px] sm:max-w-[380px]">
                        {e.about}
                      </p>
                      <button className="mt-4 px-4 py-2 sm:px-6 sm:py-3 text-sm md:text-base bg-[#3C68E5] hover:bg-[#3c50e0] text-white rounded-3xl transition-colors duration-200">
                        {e.button}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ── Sidebar Cards ──
               Mobile  → flex-col  (ek neeche ek, full width)
               sm      → flex-row  (side by side)
               md+     → flex-col  (wapas ek neeche ek)
          */}
          <div className="w-full md:w-[35%] flex flex-col sm:flex-row md:flex-col gap-4">

            {/* Card 1 */}
            <div className="flex flex-col justify-between p-4 sm:p-5 w-full rounded-2xl bg-[#d7ebf2] dark:bg-[#1e293b] shadow-md flex-1">
              <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white hover:text-[#3c50e0] dark:hover:text-[#6b96ff] transition-colors cursor-pointer">
                Smart Security <br /> Home Camera
              </p>
              <img
                src={img4}
                alt="Smart Security Home Camera"
                className="w-20 sm:w-24 self-end my-2"
              />
              <p className="font-semibold text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                save up to{" "}
                <span className="text-[#3c50e0] dark:text-[#6b96ff] font-bold text-sm sm:text-base">
                  $450
                </span>
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col justify-between p-4 sm:p-5 w-full rounded-2xl bg-[#d7ebf2] dark:bg-[#1e293b] shadow-md flex-1">
              <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white hover:text-[#3c50e0] dark:hover:text-[#6b96ff] transition-colors cursor-pointer">
                Smart Security <br /> Home Camera
              </p>
              <img
                src={img5}
                alt="Smart Security Home Camera"
                className="w-20 sm:w-24 self-end my-2"
              />
              <p className="font-semibold text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                save up to{" "}
                <span className="text-[#3c50e0] dark:text-[#6b96ff] font-bold text-sm sm:text-base">
                  $450
                </span>
              </p>
            </div>

          </div>
        </div>

        {/* ── Shipping Bar ── */}
        <div className="mt-10 p-5 flex flex-wrap sm:justify-start md:justify-center gap-7 sm:gap-12">

          <div className="flex gap-5 items-center dark:text-white">
            <IoRocketOutline className="text-4xl" />
            <div>
              <h4 className="font-semibold text-md">Free Shipping</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">For all orders $200</p>
            </div>
          </div>

          <div className="flex gap-5 items-center dark:text-white">
            <FiRefreshCw className="text-4xl" />
            <div>
              <h4 className="font-semibold text-md">1 & 1 Returns</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Cancellation after 1 day</p>
            </div>
          </div>

          <div className="flex gap-5 items-center dark:text-white">
            <FiShield className="text-4xl" />
            <div>
              <h4 className="font-semibold text-md">100% Secure Payments</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Gurantee secure payments</p>
            </div>
          </div>

          <div className="flex gap-5 items-center dark:text-white">
            <BiMessageRoundedDots className="text-4xl" />
            <div>
              <h4 className="font-semibold text-md">24/7 Dedicated Support</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Anywhere & anytime</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;