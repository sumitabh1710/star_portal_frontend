import React from "react";
import playIcon from "../assets/icon/play_icon.svg";

const ToFollow = () => {
  const creatorsArray = [
    {
      id: 1,
      url: "https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png",
      text: "How to plan your retirement with crypto?",
    },
    {
      id: 2,
      url: "https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png",
      text: "Why are there limited Bitcoin?",
    },
    {
      id: 3,
      url: "https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png",
      text: "How does Uniswap actually work?",
    },
    {
      id: 4,
      url: "https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png",
      text: "How to spot crypto projects to invest in?",
    },
  ];

  return (
    <div className="min-h-screen p-8 flex flex-col justify-center border-b-[1px] border-[#ffffff26]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center">
          <p className="text-[24px] font-normal mb-2 text-white">
            Top Crypto Creators and Projects to Follow
          </p>
          <p className="text-[16px] font-normal pb-4 text-[#ffffff66]">
            Answers to your crypto doubts, straight from the experts
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-[30px]">
          {creatorsArray.map((each) => (
            <div
              key={each.id}
              className="w-[283px] h-[420px] flex items-end relative rounded-2xl group"
              style={{
                backgroundImage: `url(${each.url})`,
              }}
            >
              <div className="w-full h-0 group-hover:h-full flex justify-center items-center absolute bottom-0 left-0 bg-[#0000004f] transition-all duration-300">
                <div className="hidden cursor-pointer group-hover:flex  w-[70px] h-[70px] rounded-full justify-center items-center bg-[#212121]">
                  <img
                    className="ml-2"
                    src={playIcon}
                    width="30px"
                    height="25px"
                  ></img>
                </div>
              </div>
              <div
                className="text-2xl text-left p-3 text-[#fff9] mix-blend-plus-lighter"
                style={{ textShadow: "0px 0px 5px #0000001a" }}
              >
                {each.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToFollow;
