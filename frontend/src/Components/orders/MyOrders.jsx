import React, {  useEffect, useState } from 'react'

import { baseURL } from '../../Utils/service'
import { assets } from '../../assets/assets'
import {useFetch} from '../../custom-hooks/useFetch'
const MyOrders = () => {
    
    const {Data} = useFetch(`${baseURL}/order/getOrders`)
    const [myOrders,setmyOrders] = useState([])
    const statusarray = [
        "Arriving by tomarrow by 11am",
        "Delivered on jun 23",
        "Refund Completed",

    ]
    
    useEffect(() => {
      if (Data) {
        setmyOrders(Data.getProduct[0].orders);
      }
     
    }, [Data]);

  return (
    <>
      <div className="h-full w-full">
        {myOrders.length > 0 &&
          myOrders.map((e, i) => (
            <div key={i} className="p-3 my-3">
              <div>
                <img src={assets.headPhone} className="h-24" alt="" />
              </div>
              <div>
                <p>
                  {statusarray[Math.floor(Math.random() * myOrders.length)]}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default MyOrders
