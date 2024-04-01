
import React from 'react'
import { useState } from 'react';
import logo1 from '../Assets/logo1.png'
import { FaBars, FaTimes, FaLinkedin, FaGithub ,} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonFill} from 'react-icons/bs'
function Navbar() {
  const [show,setshow]=useState(false);
   function handleNav() {
    setshow(!show);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300  ">
      <div>
        <img src={logo1} alt="logo I  mage" style={{ width: "50px" }} />
      </div>
      {/* menu*/}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skils</li>
        <li>Work</li>
        <li>Contact</li>
        
      </ul>

      {/*hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        <div>{!show ? <FaBars size={30} /> : <FaTimes size={30} />}</div>
      </div>

      {/*mobile menu*/}
      <ul
        className={
          !show
            ? "hidden"
            : "md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center uppercase"
        }
      >
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">Skils</li>
        <li className="py-6 text-4xl">About</li>
      </ul>

      {/*social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              className="flex justify-between items-center w-full text-gary-300"
              href=""
            >
              LinKedin
              <FaLinkedin size={30} />
            </a>{" "}
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a
              className="flex justify-between items-center w-full text-gary-300"
              href=""
            >
              FaGithub
              <FaGithub size={30} />
            </a>{" "}
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc20] ">
            <a
              className="flex justify-between items-center w-full text-gary-300"
              href=""
            >
              Mail
              <HiOutlineMail size={30} />
            </a>{" "}
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] ">
            <a
              className="flex justify-between items-center w-full text-gary-300"
              href=""
            >
              Resume
              <BsFillPersonFill size={30} />
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;


