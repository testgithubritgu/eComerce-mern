import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios'
import { baseURL } from '../../Utils/service'
import { authContext } from '../../Context/Context';
import Coupon from './Coupon';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'sonner';


const MyCart = () => {
  const {myCart, setmyCart} = useContext(authContext);

  const {token} = useContext(authContext)
     const removeCartItem = async (idx) => {

     
    try {
       const res = await axios.post(
         `${baseURL}/cart/remove_cart_item`,
         { idx },
         { headers: { authorization: "Bearer " + (token && token) } }
       );
       toast.success("removed cart item successfully!!!!")
       setTimeout(() => {
         window.location.reload()
        
       }, 2000);
     } catch (error) {
       console.log(error);
     }


   };
 useEffect(()=>{
  const token = localStorage.getItem("token")
    async function getcart(){
      try {
        const res = await axios.get(`${baseURL}/cart/getmycart`,{headers:{"authorization":"Bearer "+(token && token)}});
        setmyCart(res.data.getPro);
       
      } catch (error) {
        console.log(error.message)
      }
    } 
    getcart()
 },[])

  return (
    <>
    <Toaster position='top-center' richColors/>
      <div className="min-h-fit p-5 px-32 ">
        <br />
        <h1 className="text-slate-500 text-sm">
          Home / <span className="text-slate-800">Cart</span>
        </h1>

        <div className="py-3 w-full">
          <table className=" w-full text-left p-3">
            <thead>
              <tr className="border">
                <th className="p-3">Product </th>
                <th className="p-3">Price </th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Subtotal</th>
                <th className="p-3">remove</th>
              </tr>
            </thead>

            {myCart.length > 0 &&
              myCart.map((e, i) => (
                <tbody key={i} className="">
                  <tr className="border my-2 ">
                    <td className="p-3 flex gap-2">
                      <img
                        src={e.myCartItems.productImage}
                        className="h-7"
                        alt=""
                      />
                      {e.myCartItems.name}
                    </td>
                    <td className="p-3">₹{e.myCartItems.price}/-</td>
                    <td className="p-3">
                      <input
                        type="number"
                        value={e.items.qty}
                        className="border  w-20 rounded border-gray-300 p-2 text-gray-700 focus:border-blue-500 focus:ring-blue-200"
                        readOnly
                      />
                    </td>
                    <td className="p-3">₹{e.items.price}/-</td>
                    <td>
                      <button
                        onClick={() => removeCartItem(i)}
                        className="bg-red-600 text-white py-1 px-4 rounded-2xl  ml-6 text-lg font-bold cursor-pointer text-[20px]"
                      >
                        -
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
        <div className="flex mt-2  text-sm font-semibold  justify-between items-center">
          <button className="p-3 border cursor-pointer  border-stone-500 ">
            Return to cart
          </button>
          <button className="p-3 border cursor-pointer border-stone-500 ">
            Update cart
          </button>
        </div>
        {/* Cart summery */}
        <div className="py-4 my-10 flex justify-between">
          <Coupon />
          <div className="w-[500px]  p-6  border-2 shadow-xl border-stone-500">
            <h1 className="text-[20px] font-semibold">Cart Total</h1>

            <div className="border-b border-b-stone-800 py-3 flex justify-between mt-4">
              <span>subtotal</span>
              <span>₹{myCart.length > 0 && myCart[0].totalPrice}/-</span>
            </div>
            <div className="border-b border-b-stone-800 py-3 flex justify-between mt-4">
              <span>Shipping</span>
              <span>₹100/-</span>
            </div>
            <div className="border-b border-b-stone-800 py-3 flex justify-between mt-4">
              <span>Total</span>
              <span>₹{myCart.length > 0 && myCart[0].totalPrice + 100}/-</span>
            </div>
            <Link to={"/checkout"}>
              <button className="text-white text-sm py-2 px-5 bg-red-500 block mx-auto my-4">
                Process to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCart
