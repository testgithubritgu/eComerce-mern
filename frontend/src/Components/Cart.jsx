import React, { useContext } from 'react'
import { assets } from '../assets/assets';
import { authContext } from '../Context/Context';
import MyCart from './UserCart/MyCart';
import NoCart from './UserCart/NoCart';

const Cart = () => {
  const {user} = useContext(authContext)
  return (
    <>
     {user?<MyCart/>:<NoCart/>}
    </>
  );
}

export default Cart
