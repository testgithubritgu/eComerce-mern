import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import Coupon from "../Components/UserCart/Coupon";
import { authContext } from "../Context/Context";
import axios from "axios"
import { baseURL } from "../Utils/service";

const Checkout = () => {
  const { myCart } = useContext(authContext);
  const [checkPayType, setcheckPayType] = useState("");
  const [addressDetails,setaddressDetails] = useState({})
  const {token} = useContext(authContext)
  const onBillingInputChanges = (e)=>{
    const val = e.target.value 
    setaddressDetails(pre => ({...pre,[e.target.name]:val}))
  }
  // qty, street, city, state, pincode;
  const placeOrder  = async(idx,qty,street,city,state,pincode)=>{
      console.log(myCart[idx].items.Product);
        try {
          const res = await axios.post(
            `${baseURL}/order/orderProduct/${myCart[idx].items.Product}`,
            {
              qty: qty,
              street: street,
              city: city,
              state: state,
              pincode: pincode,
            },
            { headers: { authorization: "Bearer " + (token && token) } }
          );
          console.log(res)
        } catch (error) {
          console.log(error)
        }
  }
  const onFormSubmit = (e)=>{
    e.preventDefault()
    const { address, city, state, pincode } = addressDetails;
    try {
      if(myCart.length > 0){
        for(let i = 0;i<myCart.length ; i++){
          placeOrder(i, myCart[i].items.qty, address, city, state, pincode);
        }
      }
    } catch (error) {
      
    }
  }
  console.log(addressDetails);
  console.log(myCart);
  const stylesForTotalSummery ="border-b-2 mt-3 py-2 px-1 flex justify-between items-center text-slate-900";
  const billingDetails = [
    { lable: "first name", type: "text", require: true, identy: "name" },
    {
      lable: "state",
      type: "text",
      require: true,
      identy: "state",
    },
    { lable: "Street address", type: "text", require: true, identy: "address" },
    {
      lable: "Appartment,floor,etc.(optional)",
      type: "text",
      require: false,
      identy: "plot",
    },
    { lable: "town/city", type: "text", require: true, identy: "city" },
    { lable: "Phon Number", type: "number", require: true, identy: "number" },
    { lable: "pincode", type: "text", require: true, identy: "pincode" },
  ];
  return (
    <>
      <div className="px-32 py-5 min-h-fit">
        <form onSubmit={(e)=>onFormSubmit(e)} action="" className="flex gap-40 justify-center items-center">
          <div className="forBillingDetails w-[50%]   p-3">
            <h1 className="text-4xl text-slate-700 mb-8">Billing Details</h1>
            {billingDetails.map((elm, idx) => (
              <>
                <label htmlFor={elm.identy} className="text-sm text-stone-500">
                  {elm.lable}
                  {elm.require && <span className="text-red-500">*</span>}
                </label>
                <br />
                <input
                  onChange={(e)=>onBillingInputChanges(e)}
                  required={elm.require}
                  className="name w-full outline-none bg-stone-100 py-2 mb-4  px-2 text-slate-700 text-sm"
                  id={elm.identy}
                  name={elm.identy}
                  type={elm.type}
                />
              </>
            ))}
            <input type="checkbox" id="checkbox" className="mr-4" />
            <label className="text-sm" htmlFor="checkbox">
              Save this information for faster check-out next time
            </label>
          </div>
          <div className="placeOrder w-[50%] text-sm  px-28 ">
            <div className="min-h-fit">
              {myCart &&
                myCart.map((e, i) => (
                  <div className="text-sm my-3 flex justify-between items-center">
                    <div className="flex justify-center gap-4 items-center">
                      <div className="w-5">
                        <img
                          src={e.myCartItems.productImage}
                          className="h-7 w-full"
                          alt=""
                        />
                      </div>

                      <span>{e.myCartItems.name}</span>
                    </div>
                    <span>₹{e.items.price}/-</span>
                  </div>
                ))}
            </div>
            <div className="mt-5">
              <div className={stylesForTotalSummery}>
                <span>subtotal</span>
                <span>₹{myCart.length > 0 && myCart[0].totalPrice}</span>
              </div>
              <div className={stylesForTotalSummery}>
                <span>Shipping</span>
                <span>₹200/-</span>
              </div>
              <div className={`${stylesForTotalSummery} font-semibold`}>
                <span>total</span>
                <span>
                  ₹{myCart.length > 0 && myCart[0].totalPrice + 200}/-
                </span>
              </div>
            </div>
            <div className="my-3">
              <div className=" flex justify-between items-center">
                <div className="flex justify-center items-center w-fit  gap-3">
                  <input type="radio" name="checkbox" id="bank" />{" "}
                  <label
                    onClick={(e) => setcheckPayType(e.target.innerText)}
                    htmlFor="bank"
                  >
                    Bank
                  </label>
                </div>
                <div className="imageContainer flex items-center gap-2">
                  <img src={assets.BCA} alt="" className="h-4 cursor-pointer" />
                  <img src={assets.ibm} alt="" className="h-4 cursor-pointer" />
                  <img
                    src={assets.masterCard}
                    alt=""
                    className="h-4 cursor-pointer"
                  />
                  <img
                    src={assets.visa}
                    alt=""
                    className="h-4 cursor-pointer"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center w-fit  gap-3 mt-3">
                <input type="radio" name="checkbox" id="cashOnDelivery" />
                <label
                  onClick={(e) => setcheckPayType(e.target.innerText)}
                  htmlFor="cashOnDelivery"
                >
                  cash On Delivery
                </label>
              </div>
            </div>
            <Coupon />
            <button
              type="submit"
              className="bg-red-500 text-white px-6 rounded-sm mt-6  cursor-pointer py-2 "
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
