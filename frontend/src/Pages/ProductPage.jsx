import React, { useContext, useEffect, useState } from 'react'
import ProductDetails from '../Components/Products/ProductDetails';
import { authContext } from '../Context/Context';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { baseURL } from '../Utils/service';

const ProductPage = () => {
  const {user} = useContext(authContext)
  
  const [favItem ,setfavItem] = useState(false)
  const {id} = useParams()
  const token = localStorage.getItem("token")
  useEffect(()=>{
    const checkUserFav =async ()=>{
       try {
         const res = await axios.get(`${baseURL}/favourite/getfav`, {
           headers: { authorization: "Bearer " + (token && token) },
         });
         const checkFav = res.data.getProducts[0].myproduct.some(item => item._id === id)
         setfavItem(checkFav);
       } catch (error) {
          console.log(error.message)
       }
    }
    if(user){
      checkUserFav()
    }
   
  },[user,token])
  return (
    <>
      <ProductDetails favItem={favItem} />
    </>
  );
}

export default ProductPage 