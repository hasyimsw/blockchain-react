import React from "react";
import heroVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div id="platform" className="w-full h-[90vh] top-20">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={heroVid}
        autoPlay
        loop
        muted
      ></video>
      <div className="flex flex-col w-full h-[100%] justify-center items-center text-white text-center">
        <h1>Decentralized</h1>
        <h1 className="my-2">
          <span className="text-yellow-400">Trading</span> Protocol
        </h1>
        <p className="text-slate-200 text-2xl">
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div className="flex items-center mt-4 space-x-2">
          <button>Use DeFi</button>
          <div className="cursor-pointer py-[6px] px-6 text-yellow-400 border-2 border-yellow-400 rounded-full hover:bg-gradient-to-tr from-yellow-400 to-pink-600 hover:text-white">
            FAQ
          </div>
        </div>
      </div>
      <div>
        <p className="text-center font-semibold text-xl text-white">
          Total Volume Secured: $54,715,741,832.16
        </p>
      </div>
    </div>
  );
};

export default Hero;
