
import { Link, useNavigate } from 'react-router-dom';

import UserProfile from './Navbar/UserProfile';
import NavbarSearch from './Navbar/NavbarSearch';
import { CiHeart } from "react-icons/ci";
const Navbar = () => {


  const navigate = useNavigate()
  const navLinks = [
    "Home","Contact","About","Sign_Up"
  ]
 
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
            <span  key={idx}>
              <Link to={elem}>
                {elem}
              </Link></span>
            
          ))}
        </div>

        <div className="text-sm flex justify-center items-center gap-4">
          <NavbarSearch />
          <UserProfile />
          <Link to={"/cart"}>
            <span className="text-4xl">🛒</span>
          </Link>
          <div className="text-4xl cursor-pointer relative text-slate-600 ">
            <CiHeart />
            <span className="absolute text-red-500 text-sm -top-2 -right-2 font-bold ">
              2
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar
