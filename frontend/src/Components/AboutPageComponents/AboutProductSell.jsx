import React from 'react'
import { VscLayersActive } from "react-icons/vsc";

const AboutProductSell = () => {
    const Oursellers = [
      { count: "10.5k", companySite: "sellers active our site" },
      { count: "33k", companySite: "Monthly Product Sale" },
      { count: "45.5k", companySite: "Customer active on our site" },
      { count: "25k", companySite: "Anual gross sale in our site" },
    ];
  return (
    <>
      <div className="flex justify-evenly  items-center my-6 py-11 ">
        {Oursellers.map((e, i) => (
          <div className="flex flex-col justify-center items-center  h-[300px] w-[300px] border-[2px] ">
            <div className="rounded-full p-4 border border-gray-600 ">
              <VscLayersActive className="text-4xl" />
            </div>
            <span className="mt-4 font-semibold text-lg">{e.count}</span>
            <p className="text-sm text-slate-700">{e.companySite}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutProductSell
