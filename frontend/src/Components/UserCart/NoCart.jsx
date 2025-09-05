import React from 'react'
import { Link } from 'react-router-dom';

const NoCart = () => {
  return (
    <div className="min-h-fit flex justify-center items-center py-32 ">
      <div className="text-center">
        <h1 className="text-[60px] font-medium text-slate-800 my-4">
          Page Not Found
        </h1>
        <p className="text-slate-500 text-[30px] ">
          Sorry, we couldn't find the user cart.
        </p>
        <div className="flex justify-center items-center gap-6 my-7 ">
          <Link to={"/"}>
            <button className="text-blue-500  cursor-pointer p-5">
              ⬅ Go back
            </button>
          </Link>

          <Link to={"/account"}>
            <button className="text-white bg-blue-500 py-2 px-6 rounded cursor-pointer font-semibold tracking-widest">
              🏡 Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NoCart
