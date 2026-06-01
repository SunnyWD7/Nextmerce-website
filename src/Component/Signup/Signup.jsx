import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { auth, } from "../FireBase/Firebase"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState } from "react";


function Signup() {

  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")

  const createuser = async (e) => {
  e.preventDefault()

  // Validation
  if (!firstName || !lastName) {
    alert("Please enter First and Last Name!")
    return
  }

  if (!email) {
    alert("Please enter Email!")
    return
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters!")
    return
  }

  if (password !== rePassword) {
    alert("Passwords do not match!")
    return
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(userCredential.user, {
      displayName: `${firstName} ${lastName}`
    })
    alert(`Account Created! Welcome ${firstName}!`)
  } catch (error) {
   
    if (error.code === 'auth/email-already-in-use') {
      alert("Email already exists! Try another email.")
    } else if (error.code === 'auth/weak-password') {
      alert("Password too weak! Use at least 6 characters.")
    } else if (error.code === 'auth/invalid-email') {
      alert("Invalid email format!")
    } else {
      alert(error.message)
    }
  }
  }
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
                    onChange={(e)=>setFirstName(e.target.value)}
                    value={firstName}
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
                    onChange={(e)=>setLastName(e.target.value)}
                    value={lastName}
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
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email}
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
                   onChange={(e)=>setPassword(e.target.value)}
                  value={password}
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
                  onChange={(e)=>setRePassword(e.target.value)}
                    value={rePassword}
                  placeholder="Re-type your password"
                  className="w-full mt-2 py-3 px-5 rounded-full border border-gray-300 focus:border-[#2334B9] outline-none dark:bg-white"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                onClick={createuser}
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