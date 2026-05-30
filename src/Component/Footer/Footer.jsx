import React from "react";
import { Link } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
function Footer() {
  return (
    <section className="w-full bg-[#FFFFFF] dark:bg-[#0f172a] py-4 md:py-6">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="footer sm:flex justify-between  sm:flex-wrap dark:text-white my-2 ">
          <div className="support flex flex-col gap-1">
            <h1 className="text-xl font-semibold mb-5">Help & Support</h1>
            <div className="loctaion flex gap-3 my-2 ">
              <ImLocation2 className="text-2xl text-[#026EF6] self-center"/>
              <div className="address">
                <p className="text-sm">685 Market Street,Las Vegas, LA 95820,United States.</p>
              </div>
            </div>
            <div className="call flex gap-3 my-2 text-sm">
              <MdCall className="text-2xl text-[#026EF6] self-center"/>
              <div className="number">
                <p>(+099) 532-786-9843</p>
              </div>
            </div>
            <div className="mail flex gap-3 my-2 text-sm ">
              <CiMail  className="text-2xl text-[#026EF6] self-center"/>
              <div className="mailaddress">
                <p>support@example.com</p>
              </div>
            </div>
             <div className="social-icon flex gap-4 my-3  text-lg">
    <Link >
    <FaFacebook/>
    </Link>
    <Link>
    <FaXTwitter/>
    </Link>
    <Link>
    <FaInstagram/>
    </Link>
    <Link>
    <FaLinkedin/>
    </Link>
   </div>
          </div>
         <div className="Account flex flex-col gap-1 text-sm">
            <h1 className="text-2xl">Account</h1>
            <div className="login flex flex-col  gap-2 my-4">
                <Link>Login / Register</Link>
                <Link>Cart</Link>
                <Link>Wishlist</Link>
                <Link>Shop</Link>
            </div>
         </div>
         <div className="quick-link flex flex-col gap-1 ">
            <h1 className="text-2xl ">Quick link</h1>
            <div className="links flex flex-col  gap-2 my-4 text-sm">
                <Link>
                Privacy Policy
                </Link>
                <Link>Refund Policy</Link>
                <Link>Terms of Use</Link>
                <Link>FAQ's</Link>
                <Link>Contact</Link>
            </div>
         </div>
         <div className="downloadApp flex flex-col gap-5 mt-5 sm:mt-8 md:mt-0 ">
            <h1 className="text-xl">Download App</h1>
            <div className="download flex flex-col gap-3 text-white">
                <div className="appstore bg-[#1C274C] w-[60vw] sm:w-[30vw] md:w-[16vw] p-2 rounded-xl">
                    <div className="icon flex gap-2 items-center px-2 py-1">
                        <FaApple className="text-white text-2xl"/>
                        <div className="text-sm">
                            <h5>Download on the <br/> App Store</h5>
                        </div>
                    </div>
                </div>
                <div className="playstore bg-[#3C50E0] w-[60vw] sm:w-[30vw] md:w-[12vw] p-2 rounded-xl">
                    <div className="icon flex gap-2 items-center px-1 py-1">
                        <IoLogoGooglePlaystore className="text-white text-2xl"/>
                        <div className="text-sm">
                            <h5>Get it on  <br/> Google Play</h5>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
