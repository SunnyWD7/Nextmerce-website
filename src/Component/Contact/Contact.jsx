import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
function Contact() {
  return (
    <section className="py-14 bg-[#F3F4F6] dark:bg-[#0f172a]">
      <div className="header bg-white flex justify-between items-center h-14 md:h-24 sm:h-20  my-14 px-5 ">
            <h4 className="text-2xl font-semibold px-5 sm:px-10 md:px-24">Contact</h4>
          </div>
      <div className="max-w-[1300px] mx-auto p-4">
        <div className="contact">
        <div className="form px-6 grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8">
  
  {/* Left */}
  <div className="left bg-white dark:bg-[#1e293b] shadow-[0_0_25px_rgba(0,0,0,0.12)] rounded-xl px-5 py-6">
    <div className="info border-b border-gray-300 py-4">
      <p className="text-xl font-semibold dark:text-white">
        Contact Information
      </p>
    </div>

    <div className="info-section mt-4">
      <div className="email flex gap-3 py-3">
        <CiMail className="text-2xl text-[#026EF6]" />
        <p className="dark:text-white">Email: james@example.com</p>
      </div>

      <div className="call flex gap-3 py-3">
        <MdCall className="text-2xl text-[#026EF6]" />
        <p className="dark:text-white">Phone: 1234 567890</p>
      </div>

      <div className="location flex gap-3 py-3">
        <ImLocation2 className="text-2xl text-[#026EF6]" />
        <p className="dark:text-white">
          Address: 7398 Smoke Ranch Road, Las Vegas, Nevada 89128
        </p>
      </div>
    </div>
  </div>

  {/* Right */}
  <div className="right bg-white dark:bg-[#1e293b] shadow-[0_0_25px_rgba(0,0,0,0.12)] rounded-xl py-8 px-6">
    <form className="flex flex-col">
      <label htmlFor="firstName" className="font-medium dark:text-white">
        First Name *
      </label>

      <input
        type="text"
        id="firstName"
        required
        placeholder="First Name"
        className="w-full py-3 px-4 rounded-3xl outline outline-1 outline-gray-300 focus:outline-2 focus:outline-[#3C50E0] mt-2 mb-4"
      />

      <label htmlFor="lastName" className="font-medium dark:text-white">
        Last Name *
      </label>

      <input
        type="text"
        required
        id="lastName"
        placeholder="Last Name"
        className="w-full py-3 px-4 rounded-3xl outline outline-1 outline-gray-300 focus:outline-2 focus:outline-[#3C50E0] mt-2 mb-4"
      />

      <label htmlFor="subject" className="font-medium dark:text-white">
        Subject *
      </label>

      <input
        type="text"
        required
        id="subject"
        placeholder="Subject"
        className="w-full py-3 px-4 rounded-3xl outline outline-1 outline-gray-300 focus:outline-2 focus:outline-[#3C50E0] mt-2 mb-4"
      />

      <label htmlFor="phone" className="font-medium dark:text-white">
        Phone *
      </label>

      <input
        type="text"
        id="phone"
        placeholder="Phone Number"
        required
        className="w-full py-3 px-4 rounded-3xl outline outline-1 outline-gray-300 focus:outline-2 focus:outline-[#3C50E0] mt-2 mb-4"
      />

      <label htmlFor="userFeedback" className="font-medium dark:text-white">
        Your Feedback
      </label>

      <textarea
        id="userFeedback"
        rows="5"
        placeholder="Write your message..."
        className="w-full py-3 px-4 rounded-3xl outline outline-1 outline-gray-300 focus:outline-2 focus:outline-[#3C50E0] mt-2 mb-4 resize-none"
      />

      <button
        type="submit"
        className="bg-[#3C50E0] text-white py-3 px-8 rounded-3xl hover:bg-[#2f42c4] duration-300 self-start"
      >
        Send Message
      </button>
    </form>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
