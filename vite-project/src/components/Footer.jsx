import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Group3 from '../assets/Group3.svg'



function Footer(props) {
  return (
<>
      <footer className="bg-[#010102]">
        <div className="px-4 md:px-20 py-11 min-h-32 flex flex-col md:flex-row justify-between gap-4 md:gap-20">
          <div className="company__details flex flex-col md:flex-row gap-4 items-center md:text-left">
            <div className="flex flex-col">
              <div className="flex  items-center gap-4">
                <img
                  src={logo}
                  alt=""
                  className="w-12 h-12"
                />
                <p className="text-center md:text-left text-white">
                  Wisozk Inc
                </p>
              </div>
              <div className="flex gap-4 text-2xl py-4 text-white">
              
                <FaFacebook/>
                <FaInstagram/>
                <FaSquareXTwitter/>
                <FaLinkedin/>
                <i className="ri-twitter-fill"></i>
                <i className="ri-facebook-fill"></i>
                <i className="ri-linkedin-fill"></i>
                
              </div>
            </div>
            
          </div>
          

          <div className="address__details md:py-7">
            <h3 className="text-center md:text-left text-white text-2xl">
              Address
            </h3>
            <ul className="mt-4 py-4 md:mt-0">
              {" "}
              <li className="text-center md:text-left text-white mb-2">
              {props?.data?.address}
              </li>{" "}
              <li className="text-center md:text-left text-white mb-2">
                {props?.data?.city}
              </li>{" "}
              <li className="text-center md:text-left text-white mb-2">
                {props?.data?.postal_code}
              </li>{" "}
            </ul>
          </div>

          <div className="contact__section md:py-7">
            <h3 className="text-center md:text-left text-white text-2xl">
              Contact
            </h3>
            <p className="text-center md:text-left text-white py-4">
              {props?.data?.phone}
            </p>
          </div>
          <div className="form__section md:py-7">
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter Your email address"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Enter Your Message"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className='-ms-10 -mt-36'>
            <img src={Group3} className='text-white'/>
        </div>
      </footer>
    </>

      )
}

export default Footer