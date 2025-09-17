import { createContext, useState } from "react";

export const authContext = createContext()

const CreatAuthContext = ({children}) => {
    const getUser = localStorage.getItem("user") 
      const [myCart, setmyCart] = useState([]);
    const token = localStorage.getItem("token")
    let userData ;
    if(getUser && getUser!== "undefined"){
        userData= getUser && JSON.parse(getUser);
    }
    const [user ,setuser]= useState(userData? userData:false)
    const [productImgdata, setproductImgdata] = useState('');
   const [prdData, setprdData] = useState(null);
   const [product, setproduct] = useState([]);
   const [handleSearch,sethandleSearch] = useState(false)
    return (
      <authContext.Provider
        value={{
          user,
          setmyCart,
          token,
          myCart,
          setuser,
          setproductImgdata,
          productImgdata,
          prdData,
          setprdData,
          sethandleSearch,
          handleSearch,
          product,
          setproduct,
        }}
      >
        {children}
      </authContext.Provider>
    );
}

export default CreatAuthContext