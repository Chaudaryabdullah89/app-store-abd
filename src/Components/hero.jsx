import React from "react";
import assets from "../assets/assets";

const hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-grey-400">
      {/* {hero left side } */}
      <div className="w-full sm:w-1/2 flex item-center justify-center py-10 sm:py-0 align-middle items-center">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="text-sm md:text-xl font-medium">Our BestSeller</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrival</h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold uppercase text-sm md:text-base">Shop Now</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            
          </div>
        </div>
      </div>
      {/* {hero right side } */}
      <img src={assets.hero_img} alt="" className="w-full sm:w-1/2" />
    </div>
  );
};

export default hero;
