import React from 'react'
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
function SignIn() {
   return (
    <section className="min-h-screen bg-[#F3F4F6] dark:bg-[#0F172A] pt-28 pb-10">

      {/* Full Width Heading */}
      <div className="w-full bg-white dark:bg-[#1E293B] shadow-sm">
        <div className="max-w-[1300px] mx-auto h-16 px-4 flex items-center">
          <h1 className="text-2xl font-semibold dark:text-white">
            Sign In
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-[1300px] mx-auto px-4 mt-10">

        <div className="flex justify-center">

          <div className="w-full md:w-[75%] lg:w-[50%] bg-white dark:bg-[#1E293B] rounded-2xl shadow-xl p-6 md:p-10">

            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold dark:text-white">
                Welcome Back
              </h2>

              <p className="text-gray-500 dark:text-gray-300 mt-2">
                Sign in to your account
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5 ">

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

              {/* Forgot Password */}
              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-[#2334B9] hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-[#1E2B5C] hover:bg-[#152048] text-white py-4 rounded-full text-lg font-semibold duration-300"
              >
                Sign In
              </button>

            </form>

            {/* OR */}
            <div className="flex items-center my-8">
              <div className="flex-1 h-[1px] bg-gray-300"></div>

              <span className="px-4 font-semibold dark:text-white">
                OR
              </span>

              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-4">

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 duration-300 py-4 rounded-full"
              >
                <FcGoogle className="text-2xl" />
                <span>Sign In with Google</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 duration-300 py-4 rounded-full"
              >
                <IoLogoGithub className="text-2xl" />
                <span>Sign In with Github</span>
              </button>

            </div>

            {/* Footer */}
            <div className="text-center mt-8">
              <p className="dark:text-white">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#2334B9] font-medium hover:underline"
                >
                  Sign Up Now!
                </Link>
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SignIn
