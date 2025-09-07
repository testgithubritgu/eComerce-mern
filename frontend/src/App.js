import React, { useState } from 'react'
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

const App = () => {
  const checkPath = useLocation()
  const location = checkPath.pathname === "/account"

  return (
    <>
        <TopSell/>
    <div className='min-h-screen w-full py-3
     px-4'>
        {!location && <Navbar/>}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/account' element={<AccountForm/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/setting' element={<Account/>}/>
      <Route path='/product/:id' element={<Product/>}/>
        
           </Routes>
    </div>
      <Footer />
    </>
  )
}

export default App