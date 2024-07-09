import React from "react";

const Navbar = () => {
  return (
    <div className="sticky h-16 px-[100px] w-full top-0 flex justify-center items-center backdrop-blur-[5px] bg-[#00000040] border-[1px] border-[#ffffff26] z-20">
      <img src="https://www.intract.io/logo/intract_text.svg"></img>
      <div className="flex items-center h-full ml-10 gap-4">
        <div className="flex items-center text-[#ffffffb3] px-[6px]">
          <p className="outfit-font font-normal text-lg text-[#ffffffb3]">
            Compass
          </p>
        </div>
        <div className="flex items-center text-[#ffffffb3] px-[6px]">
          <p className="outfit-font font-normal text-lg text-[#ffffffb3]">
            Explore
          </p>
        </div>
        <div className="flex items-center h-full border-b-[3px] border-[#fff] px-[6px]">
          <p className="outfit-font font-normal text-lg text-[#ffffffb3]">
            Academy
          </p>
          <div className="bg-[#6435e9] text-white px-2 rounded-xl ml-2 text-sm py-1">
            New
          </div>
        </div>
        <div className="flex items-center text-[#ffffffb3] px-[6px]">
          <p className="outfit-font font-normal text-lg text-[#ffffffb3]">
            NFTs
          </p>
        </div>
        <div className="flex items-center text-[#ffffffb3] px-[6px]">
          <p className="outfit-font font-normal text-lg text-[#ffffffb3]">
            For Projects
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center h-full gap-4 ml-8">
        <div className="bg-[#ffffff12] border-[1px] border-[#ffffff0d] flex-1 h-11 rounded-full"></div>
        <div className="flex gap-2 h-full justify-end items-center">
          <div className="bg-white py-[7px] px-6 rounded-lg text-[15px] font-medium">
            Sign In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
