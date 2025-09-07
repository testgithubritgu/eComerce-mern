import React from 'react'

const NavbarSearch = () => {
  return (
    <>
      <div>
        <form action="">
          <div className="text-sm w-[300px] bg-stone-100 text-slate-500 flex justify-center items-center h-fit py-2 px-4 border  ">
            <input
              type="text"
              placeholder="what are you looking for?"
              className="w-[100%] outline-none border py-2 px-4"
            />
            <button className="bg-orange-300 text-sm p-2 rounded-lg">🔍</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NavbarSearch
