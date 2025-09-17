import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../Context/Context";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../Utils/service";

const NavbarSearch = () => {
  const [getSearchInput, setgetSearchInput] = useState("");
  const { setproduct } = useContext(authContext);
  const [getProductName, setgetProductName] = useState([]);
  const { handleSearch, sethandleSearch } = useContext(authContext);
  const navigate = useNavigate();
  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        `${baseURL}/product/get_product/itmes?name=${getSearchInput.trim()}`
      );
      navigate("/");
      setproduct(res.data.Product);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    async function getProduct() {
      if (!getSearchInput) {
        return;
      }
      try {
        const res = await axios.get(
          `${baseURL}/product/get_product?name=${getSearchInput.trim()}`
        );
        sethandleSearch(true);
        setgetProductName(res.data.Product);
      } catch (error) {
        sethandleSearch(false);
      }
    }
    getProduct();
  }, [getSearchInput]);
 
  return (
    <>
      <div className="relative">
        <form onSubmit={onFormSubmit} action="">
          <div className="text-sm w-[300px] bg-stone-100 text-slate-500 flex justify-center items-center h-fit py-2 px-4 border  ">
            <input
              type="text"
              onChange={(e) => setgetSearchInput(e.target.value)}
              value={getSearchInput}
              placeholder="what are you looking for?"
              className="w-[100%] outline-none border py-2 px-4"
            />
            <button
              type="submit"
              className="bg-orange-300 text-sm p-2 rounded-lg"
            >
              🔍
            </button>
          </div>
        </form>
        {getProductName.length > 0 && handleSearch && (
          <div className="absolute p-2 bg-white w-full h-fit text-slate-500 z-10">
            {getProductName.map((e, i) => (
              <div key={i} className="flex gap-2 my-1 items-center text-sm cursor-pointer">
                <span>
                  <CiSearch />
                </span>
                <span onClick={(e) => setgetSearchInput(e.target.innerText)}>
                  {e.name}
                </span>
              </div>
            ))}{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarSearch;
