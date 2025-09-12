import React, { useContext, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { PiKeyReturn } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import { authContext } from "../../Context/Context";
import axios from "axios";
import { baseURL } from "../../Utils/service";
import { useParams } from "react-router-dom";
const ProductData = ({ favItem }) => {
    const [bgOfHeart, setbgOfHeart] = useState(false);
  const { id } = useParams();
  const [count, setcount] = useState(1);
  const [size, setsize] = useState(0);
  const token = localStorage.getItem("token");
  const { setproductImgdata, prdData } = useContext(authContext);

  const sizeArray = [
    { size: "XS" },
    { size: "S" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
  ];
  const addToFav = async () => {
    if(!token){
      toast.warning("Ooops you are not logged in")
      return 
    }
    try {
      setbgOfHeart(token?true:false);
      console.log(id);
      const res = await axios.post(`${baseURL}/favourite/addItem/${id}`, null, {
        headers: { authorization: "Bearer " + (token && token) },
      });
      toast.success("added to favourite")
      console.log(res);
    } catch (error) {
     if(
        error.response.data.message === "Product already in favourites"
      ){
        toast.warning("Already added in your favourite 😋")
      }
    }
  };

  const addToCart = async()=>{
    try {
      const res = await axios.post(
        `${baseURL}/cart/addItem/${id}`,
        { qty: count },
        { headers: { authorization: "Bearer " + (token && token) } }
      );

      toast.success("Added to cart successfully")
    } catch (error) {
      toast.warning("already added")
      console.log(error.message)
    }
  }


  return (
    <>
      <Toaster richColors position="top-right" />
      {prdData ? (
        <div className="productDetail ">
          <h1 className="text-slate-800 font-bold text-[30px]">
            {prdData.name}
          </h1>
          <div className="my-2">
            {Array(5)
              .fill("")
              .map((e, i) => (
                <span>⭐</span>
              ))}
            <span className="text-slate-700 ">(150 Reviews)</span> |{" "}
            <span className="text-green-500">In Stock</span>
          </div>
          <p className="text-slate-900 text-lg font-medium my-2">
            ₹{prdData.price - prdData.discount / 100}{" "}
            <span className="ml-6 line-through text-slate-500">
              ₹{prdData.price}
            </span>
          </p>
          <p className="text-sm text-slate-700 my-3">{prdData.desc}</p>
          <hr />
          Colours :{" "}
          <span>
            <input className="checked:bg-slate-200" type="radio" />
            <input type="radio" />
          </span>
          <section className="size my-3 flex gap-3">
            <span className="text-lg font-medium ">Size: </span>
            {sizeArray.map((e, i) => (
              <button
                onClick={() => setsize(i)}
                className={`h-7 text-slate-500 text-sm w-7 border rounded-sm font-medium  ${
                  size === i ? "bg-red-400" : ""
                } transition-all duration-300`}
              >
                {e.size}
              </button>
            ))}
          </section>
          <section className="qty flex justify-start items-center gap-3 my-3 mb-5">
            <div className="w-fit">
              <button
                onClick={() => setcount(count >0 ?count - 1 : count)}
                className="w-[50px] h-[50px] border"
              >
                -
              </button>
              <button className="w-[100px] h-[50px] border">{count}</button>
              <button
                onClick={() => setcount(count + 1)}
                className="w-[50px] h-[50px] border bg-red-500"
              >
                +
              </button>
            </div>
            <button className="h-[50px] w-[200px] bg-red-500 rounded text-white">
              Buy Now
            </button>
            <button onClick={()=>addToCart()} className="h-[50px] w-[200px] bg-yellow-200 text-black rounded">
              Add to Cart
            </button>
            <button
              onClick={() => addToFav()}
              className={`h-[50px] w-[50px] text-lg text-center flex justify-center items-center border `}
            >
              {favItem || bgOfHeart ? (
                <FaHeart className="text-red-500" />
              ) : (
                <CiHeart className={`font-semibold `} />
              )}
            </button>
          </section>
          <section
            className="delivery my-5
           w-[500px]   text-neutral-500 "
          >
            <div className="border w-full border-black flex  py-3 px-2 gap-4 justify-start items-center">
              <TbTruckDelivery className="text-lg" />{" "}
              <div>
                <h1 className="text-stone-700 font-bold">Free Delivery</h1>
                <p className="underline">
                  Enter your postal code for delivery Availability
                </p>
              </div>
            </div>
            <div className="border mt-2 w-full border-black flex  py-3 px-2 gap-4 justify-start items-center">
              <PiKeyReturn className="text-lg" />{" "}
              <div>
                <h1 className="text-stone-700 font-bold">Return Delivery</h1>
                <p>
                  Free 30 days Delivery Returns.{" "}
                  <span className="underline text-slate-500">Details</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        "sdfsdf"
      )}
    </>
  );
};

export default ProductData;
