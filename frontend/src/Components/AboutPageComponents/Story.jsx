import React from 'react'
import { assets } from '../../assets/assets'

const Story = () => {
  return (
    <>
      <div className='w-full flex gap-5 justify-between  items-center text-slate-500 text-sm  '>
        <div className='w-[50%] h-fit'>
            <h1 className='my-5 text-slate-900 font-semibold text-4xl'>Our Story</h1>
            <p>Launched in 2025,Exckusive is south Asia's Premier online shopping marketplace with an active presense in solapur. supported by wide range of tailored marketing. data and service solutions,Exclusive has 10,500 sailers na==and 300 brands and serves 3millions customers the region.

            </p>
            <br />
            <p>Exclusive has more than 1 Million producs to offer. growing at a very fast.Exclusive offers diservs assotment in categories ranging from consumer.</p>
        </div>
        <div className='w-[40%]'>
            <img src={assets.shop} className='h-[500px] rounded-xl w-full ' alt="" />
        </div>
      </div>
    </>
  )
}

export default Story
