import React, { useState, useEffect } from "react";

import logo from "../../assets/logo.svg";
import logowhite from "../../assets/logowhite.svg";
import x from "../../assets/cut.svg";

import { GoPerson } from "react-icons/go";
import { CgShoppingBag } from "react-icons/cg";
import { CiHeart, CiBrightnessDown, CiDark } from "react-icons/ci";
import { HiOutlineBars3 } from "react-icons/hi2";

import { Link, NavLink, useNavigate } from "react-router-dom";

import useTheme from "../UseContext/UseContext";
import { auth } from "../FireBase/Firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

function Navbar() {

  const [Active, setActive] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const { thememode, darkTheme, lightTheme } = useTheme();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  const logout = () => {
    signOut(auth).then(() => {
      navigate('/signin')
    })
  }

  return (
    <>

      {/* navbar wrapper */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 border-b border-gray-300 shadow-xl">

        {/* navbar */}
        <nav className="max-w-[1200px] mx-auto h-20 flex justify-between items-center px-4">

          {/* logo */}
          <a href="/home">

            {thememode === "dark" ? (
              <img src={logowhite} alt="logo" />
            ) : (
              <img src={logo} alt="logo" />
            )}

          </a>

          {/* desktop menu */}
          <ul className="hidden md:flex gap-x-8 font-semibold">

            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-[#2334b9]"
                      : "text-[#1C274C] hover:text-[#2334b9] dark:text-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-[#2334b9]"
                      : "text-[#1C274C] hover:text-[#2334b9] dark:text-white"
                  }`
                }
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-[#2334b9]"
                      : "text-[#1C274C] hover:text-[#2334b9] dark:text-white"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-[#2334b9]"
                      : "text-[#1C274C] hover:text-[#2334b9] dark:text-white"
                  }`
                }
              >
                Blog
              </NavLink>
            </li>

          </ul>

          {/* right section */}
          <div className="flex items-center gap-x-6">

            {/* account */}
            <div className="hidden md:flex items-center gap-x-3 cursor-pointer dark:text-white">

              

            </div>

            {/* icons */}
            <div className="hidden md:flex gap-x-6 items-center dark:text-white">

              {/* wishlist */}
              <div className="relative w-fit cursor-pointer">
                <CiHeart className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>

              {/* cart */}
              <div className="relative w-fit cursor-pointer">
                <CgShoppingBag className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </div>

              {/* dark mode */}
              {thememode === "dark" ? (
                <CiBrightnessDown
                  onClick={lightTheme}
                  className="text-3xl cursor-pointer"
                />
              ) : (
                <CiDark
                  onClick={darkTheme}
                  className="text-3xl cursor-pointer"
                />
              )}


              <GoPerson className="text-xl cursor-pointer" />
              <div className="">

                <p className="text-[12px] cursor-pointer hover:text-[#2334b9]">
                  Account
                </p>

                {user ? (
                  <button onClick={logout} className="text-[13px] cursor-pointer font-semibold text-red-500 hover:text-red-700">
                    Logout
                  </button>
                ) : (
                  <Link to="/signin">
                    <p className="text-[13px] font-semibold cursor-pointer hover:text-[#2334b9]">
                      Sign In / Register
                    </p>
                  </Link>
                )}

              </div>

            </div>

            {/* mobile menu */}
            <div className="md:hidden flex items-center gap-x-5">

              {thememode === "dark" ? (
                <CiBrightnessDown
                  onClick={lightTheme}
                  className="text-3xl dark:text-white"
                />
              ) : (
                <CiDark
                  onClick={darkTheme}
                  className="text-3xl dark:text-white"
                />
              )}

              <HiOutlineBars3
                onClick={() => setActive(true)}
                className="text-3xl dark:text-white cursor-pointer"
              />

            </div>

          </div>

        </nav>

      </header>

      {/* mobile sidebar */}
      <ul
        className={`fixed top-0 ${
          Active ? "right-0" : "-right-[100%]"
        } w-[88vw] h-screen bg-white dark:bg-[#1E293B] shadow-2xl p-6 md:hidden flex flex-col justify-between transition-all duration-300 z-[100]`}
      >

        {/* top */}
        <li className="flex flex-col gap-y-6 font-semibold">

          <div className="flex justify-between items-center">

            <a href="/home">
              {thememode === "dark" ? (
                <img src={logowhite} alt="logo" />
              ) : (
                <img src={logo} alt="logo" />
              )}
            </a>

            <img
              src={x}
              alt="cut"
              className="w-5 h-5 cursor-pointer"
              onClick={() => setActive(false)}
            />

          </div>

          {/* links */}
          <NavLink to="/home" onClick={() => setActive(false)} className={({ isActive }) => isActive ? "text-[#2334b9]" : "text-[#1C274C] dark:text-white hover:text-[#2334b9]"}>
            Home
          </NavLink>

          <NavLink to="/shop" onClick={() => setActive(false)} className={({ isActive }) => isActive ? "text-[#2334b9]" : "text-[#1C274C] dark:text-white hover:text-[#2334b9]"}>
            Shop
          </NavLink>

          <NavLink to="/contact" onClick={() => setActive(false)} className={({ isActive }) => isActive ? "text-[#2334b9]" : "text-[#1C274C] dark:text-white hover:text-[#2334b9]"}>
            Contact
          </NavLink>

          <NavLink to="/blog" onClick={() => setActive(false)} className={({ isActive }) => isActive ? "text-[#2334b9]" : "text-[#1C274C] dark:text-white hover:text-[#2334b9]"}>
            Blog
          </NavLink>

        </li>

        {/* bottom */}
        <div className="flex flex-col gap-y-5 dark:text-white">

          {/* account */}
          <div className="flex items-center gap-x-3 cursor-pointer">

            <GoPerson className="text-xl" />

            {user ? (
              <button onClick={logout} className="text-[13px] font-semibold text-red-500">
                Logout
              </button>
            ) : (
              <p className="text-[13px] font-semibold hover:text-[#2334b9]">
                <Link to="/signin">Sign In / Register</Link>
              </p>
            )}

          </div>

          {/* wishlist */}
          <div className="flex gap-x-4 items-center cursor-pointer">
            <CiHeart className="text-xl" />
            <span className="text-sm">Wishlist</span>
          </div>

        </div>

      </ul>

    </>
  );
}

export default Navbar;