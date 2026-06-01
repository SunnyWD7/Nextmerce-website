import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import person1 from "../../assets/person1.webp";
import person2 from "../../assets/person2.webp";
import person3 from "../../assets/person3.webp";

function Fedback() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const fedbacks = [
    {
      para:
        "The audio quality is crystal clear, but the battery drains much faster than advertised",
      img: person1,
      name: "Rahul Sharma",
      post: "Senior Entrepreneur",
    },

    {
      para:
        "The audio quality is crystal clear, but the battery drains much faster than advertised",
      img: person2,
      name: "Deepak Kumar",
      post: "Senior Entrepreneur",
    },

    {
      para:
        "The audio quality is crystal clear, but the battery drains much faster than advertised",
      img: person3,
      name: "Amit Kumar",
      post: "Senior Entrepreneur",
    },

    {
      para:
        "The audio quality is crystal clear, but the battery drains much faster than advertised",
      img: person2,
      name: "Roshan Shah",
      post: "Senior Entrepreneur",
    },
  ];

  return (
    <section className="py-14 dark:bg-[#0f172a]">
      <div className="max-w-[1300px] mx-auto p-4">
        
        {/* Heading */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1b2559] dark:text-white">
            Browse by Category
          </h1>

          {/* Custom Arrows */}
          <div className="flex gap-4">
            <button
              ref={prevRef}
              className="group w-8 h-8 rounded-full border border-gray-300 flex items-center justify-around text-2xl hover:bg-[#3c50e0] duration-300"
            >
              <IoIosArrowBack className="dark:text-white group-hover:text-white" />
            </button>

            <button
              ref={nextRef}
              className="group w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-2xl hover:bg-[#3c50e0] duration-300"
            >
              <IoIosArrowForward className="dark:text-white group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          breakpoints={{
            

            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },

            
          }}
          className="mySwiper"
        >
          {fedbacks.map((e, index) => (
            <SwiperSlide key={index}>
              <div className="group cursor-pointer">
                <div className=" md:p-6 p-4  bg-white flex flex-col gap-4 overflow-hidden dark:bg-[#1E293B] rounded-xl shadow-xl border border-gray-300">

                  {/* Stars */}
                  <div>
                    {[...Array(5)].map((_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                  </div>

                  {/* Paragraph */}
                  <div className="text-gray-600 dark:text-gray-300">
                    {e.para}
                  </div>

                  {/* Profile */}
                  <div className="flex gap-4 items-center">
                    <img
                      src={e.img}
                      alt={e.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="font-semibold dark:text-white">
                        {e.name}
                      </h4>

                      <h5 className="text-sm text-gray-500">
                        {e.post}
                      </h5>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Fedback;