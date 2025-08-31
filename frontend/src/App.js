import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AccountForm from './Components/UserForm.jsx/AccountForm'

const App = () => {
  return (
    <>
    <div>
     <Routes>
      <Route path='/Account' element={<AccountForm/>}/>
        
           </Routes>
    </div>
    </>
  )
}

export default App
