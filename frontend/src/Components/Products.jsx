import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { baseURL } from "../Utils/service";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const [product, setproduct] = useState([]);
  const [ProductLimit, setProductLimit] = useState(8);
  const token = localStorage.getItem("token");

  const getProductById = async (e) => {
    navigate(`/product/${e}`);
  };

  const getProduct = async () => {
    try {
      const limitset = ProductLimit + 8;

      setProductLimit(limitset);
      const res = await axios.get(
        `${baseURL}/product/product_limit?limit=${limitset}`,

        { headers: { authorization: `Bearer ${token}` } }
      );
      console.log(res);
      setproduct(res.data.Product);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    const getproduct = async () => {
      try {
        const res = await axios.get(`${baseURL}/product/product_limit?limit=8`,{ headers: { authorization: `Bearer ${token}` } });
       
        setproduct(res.data.Product);
      } catch (error) {
        console.log(error.message);
      }
    };
    getproduct();
  },[])
  console.log(product)
  return (
    <>
      <div className="min-h-[500px] py-11  my-7">
        <div className="flex  items-center gap-5">
          <div className="h-7 w-3 bg-orange-600"></div>
          <h1 className="text-orange-600 font-semibold">Our Products</h1>
        </div>
        <h1 className="text-4xl font-medium text-slate-700 my-4">
          Explore Our Products
        </h1>

      { product.length > 0? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-fit">
          { product.map((e, i) => (
            <div
              onClick={() => getProductById(e._id)}
              className=" min-h-fit cursor-pointer"
            >
              <div className="bg-gray-300 p-2 flex justify-center relative h-fit">
                <img src={e.productImage} className="h-[200px]" alt="" />
                <div className="absolute right-2 top-2">
                  <span className="cursor-pointer">🩷</span>
                  <br />
                  <span className="cursor-pointer">👁️</span>
                </div>
              </div>
              <br />
              <div>
                <p className="text-lg font-medium ">{e.name}</p>
                <div className="">
                  <div>
                    <span className="text-red-600">₹{e.price}</span>
                    <span className="text-slate-600 line-through ml-10">
                      ₹{e.price + 1000}
                    </span>
                  </div>
                  <div>
                    {Array(5)
                      .fill("")
                      .map((e, i) => (
                        <span className="text-sm">⭐</span>
                      ))}
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          ))}
        </div>:<><img src={assets.shoppingloader} alt="" className="block mx-auto  " /></>}
        <button
          onClick={() => getProduct()}
          className="block mx-auto py-3  px-7 rounded-xl cursor-pointer text-sm text-white font-semibold bg-red-500 "
        >
          View All Products
        </button>
      </div>
    </>
  );
};

export default Products;
