import React from "react";
import Banner from "./../../assets/zomato-banner.avif";
import logo from "./../../assets/zomato-logo.png";
import SearchBox from "./SearchBox";

const HeroBanner = () => {
  return (
    <>
      <div className="w-full h-[26rem] bg-stone-600 relative">
        <div className="w-full h-full object-cover">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center absolute w-full  bottom-0 top-0">
          <img src={logo} alt="logo" className="w-32" />
          <div className="flex flex-col mx-2.5">
            <h1 className="mb-6 sm:text-[36px] text-[30px]  text-white text-wrap text-center">
              Discover the best food & drinks in Delhi NCR
            </h1>
            <SearchBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
