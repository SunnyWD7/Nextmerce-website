import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import img1 from "../../assets/image1.webp";
import img2 from "../../assets/image2.webp";
import img3 from "../../assets/image3.webp";
import img4 from "../../assets/image4.webp";
import img5 from "../../assets/image5.webp";
import img6 from "../../assets/image6.webp";
import img7 from "../../assets/image7.webp";

function Category() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const images = [
    {
      image: img1,
      title: "Laptop & PC",
    },
    {
      image: img2,
      title: "Watches",
    },
    {
      image: img3,
      title: "Mobile & Tablets",
    },
    {
      image: img4,
      title: "Health & Sports",
    },
    {
      image: img5,
      title: "Home Appliances",
    },
    {
      image: img6,
      title: "Games & Videos",
    },
    {
      image: img7,
      title: "Televisions",
    },
  ];

  return (
    <section className="py-14 dark:bg-[#0f172a]  ">

      <div className="max-w-[1300px] mx-auto border-b-1 border-gray-400 dark:border-gray-600 p-4 ">

        {/* heading */}
        <div className="flex justify-between items-center mb-12  ">

          <h1 className=" text-xl sm:text-2xl md:text-3xl font-bold text-[#1b2559] dark:text-white">
            Browse by Category
          </h1>

          {/* custom arrows */}
          <div className="flex gap-4">

            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-2xl hover:bg-[#3c50e0] hover:text-white duration-300"
            >
              <IoIosArrowBack className="dark:text-white"/>
            </button>

            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-2xl hover:bg-[#3c50e0] hover:text-white duration-300"
            >
              <IoIosArrowForward className="dark:text-white"/>
            </button>

          </div>

        </div>

        {/* swiper */}
        <Swiper

          slidesPerView={2}
          spaceBetween={20}

          modules={[Navigation]}

          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}

          breakpoints={{

            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            1024: {
              slidesPerView: 6,
              spaceBetween: 40,
            },

          }}

          className="mySwiper"
        >

          {images.map((e, index) => (

            <SwiperSlide key={index}>

              <div className="flex flex-col items-center group cursor-pointer">

                {/* circle */}
                <div className="w-[120px] h-[120px] rounded-full bg-[#f3f3f5] flex items-center justify-center overflow-hidden dark:bg-[#1E293B]">

                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="w-15 object-contain group-hover:scale-110 duration-300"
                  />

                </div>

                {/* title */}
                <div className="mt-5 ">

                  <h4 className="text-lg font-semibold text-[#1b2559] text-center group-hover:text-[#3c50e0] duration-300 dark:text-white ">
                    {e.title}
                  </h4>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default Category;