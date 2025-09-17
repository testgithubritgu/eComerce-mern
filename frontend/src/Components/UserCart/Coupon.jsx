import React from 'react'

const Coupon = () => {
  return (
    <>
      <div>
        
          <input
            type="text"
            className="outline-none border  border-stone-700   rounded-xl text-slate-500 py-2 px-5"
            placeholder="Coupon Code"
          />
          <button type='button' className="ml-2 bg-red-500 text-white px-6 rounded-sm mt-6  cursor-pointer py-2">
            apply coupon
          </button>
    
      </div>
    </>
  );
}

export default Coupon
