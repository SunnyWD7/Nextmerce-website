import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <section className="min-h-screen bg-[#F3F4F6] dark:bg-[#0F172A] pt-28 pb-10">

      {/* Full Width Heading */}
      <div className="w-full bg-white dark:bg-[#1E293B] shadow-sm">
        <div className="max-w-[1300px] mx-auto h-16 px-4 flex items-center">
          <h1 className="text-2xl font-semibold dark:text-white">
            Sign Up
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-[1300px] mx-auto px-4 mt-10">

        <div className="flex justify-center">

          {/* Form Card */}
          <div className="w-full md:w-[75%] lg:w-[50%] bg-white dark:bg-[#1E293B] rounded-2xl shadow-xl p-6 md:p-10">

            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold dark:text-white">
                Create Account
              </h2>

              <p className="text-gray-500 dark:text-gray-300 mt-2">
                Enter your details below
              </p>
            </div>

            {/* Social Buttons */}
            <div className="space-y-4">

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 duration-300 py-4 rounded-full"
              >
                <FcGoogle className="text-2xl" />
                <span>Sign Up With Google</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 duration-300 py-4 rounded-full"
              >
                <IoLogoGithub className="text-2xl" />
                <span>Sign Up With Github</span>
              </button>

            </div>

            {/* OR Divider */}
            <div className="flex items-center my-8">
              <div className="flex-1 h-[1px] bg-gray-300"></div>

              <span className="px-4 text-gray-500 font-medium">
                OR
              </span>

              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            {/* Form */}
            <form className="space-y-5">

              {/* First + Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label className="font-medium dark:text-white">
                    First Name *
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full mt-2 py-3 px-5 rounded-full border border-gray-300 focus:border-[#2334B9] outline-none dark:bg-white"
                  />
                </div>

                <div>
                  <label className="font-medium dark:text-white">
                    Last Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full mt-2 py-3 px-5 rounded-full border border-gray-300 focus:border-[#2334B9] outline-none dark:bg-white"
                  />
                </div>

              </div>

              {/* Email */}
              <div>
                <label className="font-medium dark:text-white">
                  Email *
                </label>

                <input
                  type="email"
                  placeholder="john@gmail.com"
                  className="w-full mt-2 py-3 px-5 rounded-full border border-gray-300 focus:border-[#2334B9] outline-none dark:bg-white"
                />
              </div>

              {/* Password */}
              <div>
                <label className="font-medium dark:text-white">
                  Password *
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full mt-2 py-3 px-5 rounded-full border border-gray-300 focus:border-[#2334B9] outline-none dark:bg-white"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="font-medium dark:text-white">
                  Re-type Password *
                </label>

                <input
                  type="password"
                  placeholder="Re-type your password"
                  className="w-full mt-2 py-3 px-5 rounded-full border border-gray-300 focus:border-[#2334B9] outline-none dark:bg-white"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#1E2B5C] hover:bg-[#152048] text-white py-4 rounded-full text-lg font-semibold duration-300"
              >
                Create Account
              </button>

            </form>

            {/* Footer */}
            <div className="text-center mt-8">
              <p className="dark:text-white">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="text-[#2334B9] font-medium hover:underline"
                >
                  Sign In Now!
                </Link>
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Signup;