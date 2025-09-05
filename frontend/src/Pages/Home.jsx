import React from 'react'
import HeroSection from '../Components/HeroSection';
import Products from '../Components/Products';
import Featured from '../Components/Featured';
import Serrvice from '../Components/Serrvice';
import Footer from '../Components/Footer';


const Home = () => {
  return (
    <>
      <div className=" px-12 py-16">
        <HeroSection />
      <Products />
      <Featured/>
      <Serrvice/>
      
      </div>
      
    </>
  );
}

export default Home
