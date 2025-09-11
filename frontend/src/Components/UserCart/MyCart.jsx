import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { baseURL } from '../../Utils/service'

const MyCart = () => {
  const [qty,setqty] = useState(1)
  const [myCart,setmyCart] = useState(null)
 useEffect(()=>{
  const token = localStorage.getItem("token")
    async function getcart(){
      try {
        const res = await axios.get(`${baseURL}/cart/getmycart`,{headers:{"authorization":"Bearer "+(token && token)}});
        console.log(res)
      } catch (error) {
        
      }
    }
    getcart()
 },[])
  return (
    <>
       <div className="min-h-fit p-5 px-32 ">
        <br />
        <h1 className="text-slate-500 text-sm">
          Home / <span className="text-slate-800">Cart</span>
        </h1>
        <br />
        <div className="py-3 w-full">
          <table className=" w-full text-left p-3">
            <thead>
              <tr className="border">
                <th className="p-3">Product </th>
                <th className="p-3">Price </th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Subtotal</th>
              </tr>
            </thead>
            <br />
            <tbody className="">
              <tr className="border my-2 ">
                <td className="p-3 flex gap-2">
                  <img src={assets.feature} className="h-5" alt="" />
                  lcd screen
                </td>
                <td className="p-3">
                  <img src="" alt="" />
                  lcd screen
                </td>
                <td className="p-3">
                  <input type="number" value={qty} onChange={(e)=>setqty(e.target.value)} className='border  w-20 rounded border-gray-300 p-2 text-gray-700 focus:border-blue-500 focus:ring-blue-200' />
                  
                </td>
                <td className="p-3">
                  <img src="" alt="" />
                  lcd screen
                </td>
              </tr>
            </tbody>
            <br />
            <tbody className="">
              <tr className="border my-2 ">
                <td className="p-3 flex gap-2">
                  <img src={assets.feature} className="h-5" alt="" />
                  lcd screen
                </td>
                <td className="p-3">
                  <img src="" alt="" />
                  lcd screen
                </td>
                <td className="p-3">
                  <img src="" alt="" />
                  lcd screen
                </td>
                <td className="p-3">
                  <img src="" alt="" />
                  lcd screen
                </td>
              </tr>
            </tbody>
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
          <div>
            <form action="" className="flex gap-3">
              <input
                type="text"
                className="outline-none border  border-stone-700   rounded-xl text-slate-500 py-2 px-5"
                placeholder="Coupon Code"
              />
              <button className="bg-red-500 text-white px-6 rounded-xl  cursor-pointer">
                apply coupon
              </button>
            </form>
          </div>
          <div className='w-[500px]  p-6  border-2 shadow-xl border-stone-500'> 
            <h1 className='text-[20px] font-semibold'>Cart Total</h1>

            <div className='border-b border-b-stone-800 py-3 flex justify-between mt-4'>
              <span>subtotal</span>
              <span>$1750</span>
            </div>
            <div className='border-b border-b-stone-800 py-3 flex justify-between mt-4'>
              <span>Shipping</span>
              <span>$1750</span>
            </div>
            <div className='border-b border-b-stone-800 py-3 flex justify-between mt-4'>
              <span>Total</span>
              <span>$1750</span>
            </div>
            <button className='text-white text-sm py-2 px-5 bg-red-500 block mx-auto my-4'>Process to checkout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCart
