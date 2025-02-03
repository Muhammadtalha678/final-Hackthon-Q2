import React from "react";
import { Button } from "@/components/ui/button";
import { env } from "process";

const Hero = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-100 bg-[url(/images/hero.jpg)] bg-cover md:h-[716px] h-[500px]">

      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-8 px-4 lg:px-16">
    
        <div className="relative w-full lg:w-1/2 flex justify-center"></div>

     
        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <div className="bg-amber-100 p-6 rounded-lg shadow-xl">
            <p className="text-[16px] leading-[24px] uppercase font-semibold text-gray-700">New Arrival</p>
            <h1 className="md:text-[52px] text-[36px] md:leading-[65px] leading-[40px] font-bold text-gray-900  mt-2">
              Discover Our New Collection
            </h1>
            <p className="mt-4 text-gray-600 font-medium text-[18px] leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <Button className="mt-6 px-[72px] py-[25px] bg-[#B88E2F] text-white font-semibold shadow-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
              Buy Now
            </Button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero