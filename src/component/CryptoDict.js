import React from "react";
import cryptoBg from "../assets/image/crypto_bg.jpg";

const CryptoDict = () => {
  return (
    <div className="h-screen border-b-[1px] border-[#ffffff26]">
      <div className="max-w-[1200px] mt-7 mx-auto">
        <div className="flex flex-col justify-center">
          <p className="text-[24px] font-normal mb-2 text-white">
            Crypto Dictionary
          </p>
          <p className="text-[16px] font-normal pb-4 text-[#ffffff66]">
            Your one-stop to catch up on all crypto terms
          </p>
        </div>
        <div
          className="w-full flex items-end h-[500px] bg-no-repeat bg-cover bg-center mt-[30px] cursor-pointer rounded-2xl"
          style={{
            backgroundImage: `url(${cryptoBg})`,
          }}
        >
          <div className="h-[20%] flex justify-between items-center w-full p-6">
            <div className="flex flex-col items-start">
              <p
                className="text-[#fff9] text-2xl mix-blend-plus-lighter"
                style={{ textShadow: "0px 0px 5px #0000001a" }}
              >
                Web3 + Degen Glossary
              </p>
              <p
                className="text-[#ffffff66] text-base mix-blend-plus-lighter"
                style={{ textShadow: "0px 0px 5px #0000001a" }}
              >
                Your own crypto dictionary
              </p>
            </div>
            <div className="h-16 w-16 bg-[#57575766] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDict;
