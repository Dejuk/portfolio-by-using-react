import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300 ">
        <p className="text-pink-600">hi,my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
         Dejen Ketema (dk)
        </h1>
        <p className="text-4xl sm:text-7xl font-bold text-[#892b0]">
          i'm full stack developer for a long time   
        </p>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          i'm a full-stack developer specializing in buidling (and occasionally
          designing) exceptional digital expriences.currently,i'm focused on
          building responsive full-stack web applications by using MERN stack(react js,mongodb,express js,next js
        </p>
        <div>
          <button className="text-white border group rounded-md border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 border-pink-600 ">
            view work <HiArrowNarrowRight className="ml-4 group-hover:rotate-90 duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
};


export default Home;
