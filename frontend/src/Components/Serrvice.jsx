import React from "react";
import { FaHeadphonesAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
 import { IoIosCloudDone } from "react-icons/io";
const Serrvice = () => {
  const servieData = [
    {
      icons: <FaHeadphonesAlt />,
      seviceName: "FREE AND FAST DELIVERY",
      message: "Free delivery for all orders over $140",
    },
    {
      icons: <TbTruckDelivery />,
      seviceName: "24/7 CUSTOMER SERVICE",
      message: "Friendly 24/7 customer support",
    },
    {
      icons: <IoIosCloudDone />,
      seviceName: "MONEY BACK GUARANTEE",
      message: "We return money within 30 days",
    },
  ];
  return (
    <>
      <div id="service" className="min-h-fit flex my-6 py-8 justify-evenly items-center ">
        {servieData.map((em,idx)=>(
            <div className="min-h-[300px] flex justify-center items-center flex-col   min-w-fit">
                <button className="text-5xl text-stone-800 bg-gray-300 mb-4 p-4 rounded-full ">
                  {em.icons}
                </button>
                <p className=" text-slate-700 font-extrabold">
                  {em.seviceName}
                </p>
                <p className="text-slate-500">{em.message}</p>
            </div>
        ))}
      </div>
    </>
  );
};

export default Serrvice;
