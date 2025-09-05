import React from 'react'
import { assets } from '../assets/assets';

const HeroSection = () => {
  return (
    <>
      <div className="min-h-fit w-full ">
        <div className="relative h-[500px] w-[100%] bg-slate-500 rounded-xl">
          <img
            src={assets.headPhone}
            className="h-full rounded-xl w-full"
            alt=""
          />
          <div className="absolute rounded-xl top-0 bottom-0 left-0 h-full w-full bg-black/50 p-5">
            {" "}
            <h1 className="text-sm text-green-500">Categories</h1>
            <h1 className="text-white my-8 text-5xl font-semibold tracking-widest">
              Enhance Your
              <br />
              Music Experience
            </h1>
            <div className="flex gap-4 my-8 items-center">
              {Array(4)
                .fill("")
                .map((e, i) => (
                  <div className="h-[50px] w-[50px] bg-white rounded-full text-[10px] font-bold flex flex-col justify-center items-center">
                    <span>23</span>
                    <span>Hours</span>
                  </div>
                ))}
            </div>
            <button className="text-sm text-slate-500 bg-green-400  py-2 px-6">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection
