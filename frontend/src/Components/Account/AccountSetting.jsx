import React from 'react'
import { useNavigate } from "react-router-dom";
const AccountSetting = () => {
    const navigate = useNavigate();
    const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
      window.location.reload();
    };
  return (
    <>
      <div className="h-fit py-32 px-32  flex">
        <div className="flex flex-col gap-7 ">
          <div className=" space-y-1 w-[300px] text-slate-500">
            <h1 className="font-medium ">Manage My Accont</h1>
            <p className="ml-5 cursor-pointer "> My Profile</p>
            <p className="ml-5 cursor-pointer"> Address </p>
            <p className="ml-5 cursor-pointer">My Payment Options</p>
          </div>
          <div className="space-y-1 w-[300px] text-slate-500">
            <h1 className="font-semibold text-sm">My Orders</h1>
            <p className="ml-5 cursor-pointer">Orders</p>
            <p className="ml-5 cursor-pointer">My Cancellations</p>
            <p className="ml-5 cursor-pointer">My Returns</p>
          </div>
          <div className="space-y-1 w-[300px] text-slate-500">
            <h1 className="font-semibold text-sm  cursor-pointer">
              My WishList
            </h1>
          </div>
          <button className="text-white bg-red-500 " onClick={() => logout()}>
            Logout
          </button>
        </div>
        <div className=" w-full">sdf</div>
      </div>
    </>
  );
}

export default AccountSetting
