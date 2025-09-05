import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="h-fit bg-black text-white py-12 px-12 flex justify-evenly w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium">Exclusive</h1>
          <h2 className="text-lg font-normal">Subscribe</h2>
          <h3 className="text-sm font-normal ">Get 10% off your first order</h3>
          <div className="border rounded-2xl w-fit py-2 px-2 flex gap-2 text-slate-100 ">
            <input
              type="email"
              placeholder="Enter your email "
              className="bg-transparent outline-none font-medium"
            />
            <button>▶️</button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium">Account</h1>
          <h2 className="text-lg font-normal">My Account</h2>
          <h2 className="text-lg font-normal">Login / Register</h2>
          <h2 className="text-lg font-normal">Cart</h2>
          <h2 className="text-lg font-normal">Wishlist</h2>

          <h2 className="text-lg font-normal">Shop</h2>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium">Quick Link</h1>
          <h2 className="text-lg font-normal">Privacy Policy</h2>
          <h2 className="text-lg font-normal">Terms Of Use</h2>
          <h2 className="text-lg font-normal">FAQ</h2>
          <h2 className="text-lg font-normal">Contact</h2>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-medium">Download App</h1>
          <h2 className="text-lg font-normal">
            save $3 with App New User Only
          </h2>
          <div className="bg-white grid grid-cols-2 h-[200px]">
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer
