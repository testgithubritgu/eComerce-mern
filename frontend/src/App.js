import React, { useState,useEffect, useContext } from 'react'
import { createBrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import AccountForm from './Components/UserForm.jsx/AccountForm'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import AccountSetting from './Components/Account/AccountSetting'
import Account from './Pages/Account'
import Product from './Pages/ProductPage'
import TopSell from './Components/TopSell'
import AboutUs from './Pages/AboutUs'
import { authContext } from './Context/Context'

const App = () => {
  const checkPath = useLocation()
  const location = checkPath.pathname === "/account"
  const { sethandleSearch }  = useContext(authContext)

  return (
    <>
        <TopSell/>
    <div className='min-h-screen w-full py-3
     px-4'>
        {!location && <Navbar/>}
        <div onClick={() => sethandleSearch(false)}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/account' element={<AccountForm />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/setting' element={<Account />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/about' element={<AboutUs />} />

          </Routes>
    </div>
    </div>
      <Footer />
    </>
  )
}

export default App