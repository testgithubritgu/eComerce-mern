import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../Context/Context';

const Navbar = () => {

  const navigate = useNavigate()
  const navLinks = [
    "Home","Contact","About","Sign_Up"
  ]
  const {user} = useContext(authContext)
  return (
    <>
      <div className="flex py-2 px-4  justify-between items-center shadow-xl">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer text-4xl font-medium"
        >
          Online <span className="text-yellow-600 font-medium">Shop</span>
        </h1>
        <div className="flex gap-4 text-lg cursor-pointer text-slate-500 items-center">
          {navLinks.map((elem, idx) => (
            <>
              <Link to={elem}>
                <span>{elem}</span>
              </Link>
            </>
          ))}
        </div>

        <div className="text-sm flex justify-center items-center gap-4">
          <div>
            <form action="">
              <div className="text-sm w-[300px] bg-stone-100 text-slate-500 flex justify-center items-center h-fit py-2 px-4 border  ">
                <input
                  type="text"
                  placeholder="what are you looking for?"
                  className="w-[100%] outline-none border py-2 px-4"
                />
                <button className="bg-orange-300 text-sm p-2 rounded-lg">
                  🔍
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col text-center cursor-pointer">
            <img src={assets.profile} className="h-[36px]" alt="" />
            <Link to={"/account"}> {user ? "My Account" : "login"}</Link>
          </div>
          <Link to={"/cart"}>
            <div className="flex flex-col text-center cursor-pointer">
              <span className="text-4xl">🛒</span>
              <span>Cart</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar
