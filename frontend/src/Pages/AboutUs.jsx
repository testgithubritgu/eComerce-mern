import React from 'react'
import Story from '../Components/AboutPageComponents/Story'
import AboutProductSell from '../Components/AboutPageComponents/AboutProductSell';
import Serrvice from '../Components/Serrvice';

const AboutUs = () => {
  return (
    <>
      <div className="px-32 py-20" >
        <Story />
        <AboutProductSell/>
        <Serrvice/>
      </div>
    </>
  );
}

export default AboutUs
