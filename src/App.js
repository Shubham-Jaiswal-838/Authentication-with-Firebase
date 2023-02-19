import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import Home from "./components/Home"
import SignIn from './components/SignIn'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter >
       <Routes>
       <Route path="/" element={<SignUp />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/signin" element={<SignIn />}/>

       </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App