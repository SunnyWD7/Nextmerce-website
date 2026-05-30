import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import blog1 from "../../assets/blog1.webp";
import blog2 from "../../assets/blog2.webp";
import blog3 from "../../assets/blog3.webp";
import blog4 from "../../assets/blog4.webp";
import blog5 from "../../assets/blog5.webp";
import blog6 from "../../assets/blog6.png";
import blog7 from "../../assets/blog7.webp";
import blog8 from "../../assets/blog8.webp";
import { Link } from "react-router";
function Blog() {
  let blog_details = [
    {
      image: blog8,
      date: "Nov 30 2025",
      view:"100k Views",
      Title: "Masterclass: Creating Delicious Italian Pasta",
      btn: "Read More",
      
    },
    {
      image: blog1,
      date: "Nov 30 2025",
         view:"100k Views",
      Title: "Tech Trends 2022: What's Changing in the Digital World",
      btn: "Read More",
    },
    {
      image: blog2,
      date: "Nov 30 2025",
         view:"100k Views",
      Title: "Exploring the Wonders of Modern Art: A Gallery Tour",
      btn: "Read More",
    },
    {
      image: blog3,
      date: "Nov 30 2025",
         view:"100k Views",
      Title: "A Guide to Sustainable Living: Reduce, Reuse, Recycle",
      btn: "Read More",
    },
    {
      image: blog4,
      date: "Nov 30 2025",
         view:"100k Views",
      Title: "The Benefits of Regular Exercise for a Healthy Lifestyle",
      btn: "Read More",
    },
    {
      image: blog5,
      date: "Nov 30 2025",
         view:"100k Views",
      Title: "The Ultimate Guide to Traveling on a Budget",
      btn: "Read More",
    },
    {
      image: blog6,
      date: "Nov 30 2025",
         view:"100k Views",
      Title: "The Psychology of Happiness: Finding Joy in Everyday Life",
      btn: "Read More",
    },
    {
      image: blog7,
      date: "Nov 30 2025",
         view:"100k Views",
      Title: "How to Start a Successful E-commerce Business",
      btn: "Read More",
    },
  ];
  return (
    <section className="py-14 bg-[#F3F4F6] dark:bg-[#0f172a]">
      <div className="blog-grid bg-white flex justify-between items-center h-16 md:h-20 my-20 dark:bg-[#0F1729] dark:text-white dark:border-1 dark:border-gray-400 dark:shadow-xl">
        <h1 className=" text-xl md:text-3xl font-semibold mx-28">Blog Grid</h1>
      </div>
      <div className="max-w-[1300px] mx-auto p-4">
  
        <div className="blog-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
          {blog_details.map((e, index) => (
          
           <Link >
            <div key={index} className="bg-white rounded-xl overflow-hidden  p-5 shadow-xl rounded-mg dark:bg-[#0F1729] dark:text-white">
              <div className="image">
                <img src={e.image} alt="" className="w-full rounded-md" />
                <p className="my-3 text-sm"><span className="mx-1">{e.date}</span>{e.view}</p>
                <h3 className="text-md font-semibold my-2">{e.Title}</h3>
               <div className="btn flex items-center gap-1">
                <button>Read More</button>
                <IoIosArrowRoundForward className="text-xl" />
               </div>
              </div>
            </div>
           </Link>
           
          ))}
        </div>

      </div>
    </section>
  );
}

export default Blog;
