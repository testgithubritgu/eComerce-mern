import React from 'react'
import { assets } from '../assets/assets';

const Featured = () => {
  return (
    <>
      <div className="min-h-fit " id="feature">
        <div className="flex  items-center gap-5">
          <div className="h-7 w-3 bg-orange-600"></div>
          <h1 className="text-orange-600 font-semibold">Featured</h1>
        </div>
        <h1 className="text-4xl font-medium text-slate-700 my-4">
          New Arival
        </h1>

        <div className="grid grid-cols-3 gap-2 h-[600px]">
          <img src={assets.feature} className="row-span-2 h-[608px]" alt="" />
          <img
            src={assets.feature1}
            className="col-span-2 h-[300px] w-full"
            alt=""
          />
          <img src={assets.feature2} className="h-[300px] w-full " alt="" />
          <img src={assets.feature3} className="h-[300px] w-full" alt="" />
        </div>
      </div>
    </>
  );
}

export default Featured
