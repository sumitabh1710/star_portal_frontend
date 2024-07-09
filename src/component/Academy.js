import React from "react";

const Academy = () => {
  return (
    <div
      className="bg-cover flex justify-center items-center"
      style={{
        backgroundImage:
          "url('https://www.intract.io/assets/intract-academy-background-5547a705.png')",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <img
          className="mix-blend-screen"
          src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif"
          width="235px"
        ></img>
        <div>
          <p className="text-[#ffffff66] text-xl mt-[22px]">
            <span className="text-[#ffffffcc]">Intract users </span>
            have together made more than
            <span className="text-[#ffffffcc]"> $100 million </span>
            in web3. <br /> Join them and
            <span className="text-[#ffffffcc]"> learn how to earn crypto!</span>
          </p>
        </div>
        <div className="bg-[#6435e9] mt-10 py-[10px] px-[57px] rounded-lg cursor-pointer group">
          <div className="flex items-center justify-center gap-2 transition-all duration-200 group-hover:translate-x-2">
            <p className="text-sm font-normal text-[#ffffffcc]">Get Started</p>
            <img src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
