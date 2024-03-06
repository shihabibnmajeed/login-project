import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Userdash from './Userdash'
import Sidenav from './Sidenav'
import Product from './Product'
import Category from './Category'


function Router1() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<><Login/></>}/>
  <Route path="/signup" element={<><Signup/></>}/>
  <Route path="/user" element={<><Userdash/></>}/>
  <Route path="/admindash" element={<><Sidenav/></>}/>
    <Route path="/product" element={<><Product/></>}/>
    <Route path="/category" element={<><Category/></>}/>

</Routes>
</BrowserRouter>

    </div>
  )
}

export default Router1