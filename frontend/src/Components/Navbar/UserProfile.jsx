import React, { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/Context";
const UserProfile = () => {
  const [profilebg, setprofilebg] = useState(false);
  const {user} = useContext(authContext)
  return (
    <>
      <Link to={`${user ? "/setting" : "/account"}`}>
        <div className="flex flex-col justify-center items-center text-center cursor-pointer">
          {/* <img src={assets.profile} className="h-[36px]" alt="" /> */}
          <div
            onClick={() => setprofilebg(!profilebg)}
            className={`text-center text-4xl  rounded-full p-2 border-[2px] ${
              profilebg ? "text-white bg-red-500" : "text-slate-700"
            } transition-all duration-300`}
          >
            <CgProfile />
          </div>
          {/* <Link to={"/account"}> {user ? "My Account" : "login"}</Link> */}
        </div>
      </Link>
    </>
  );
};

export default UserProfile;
