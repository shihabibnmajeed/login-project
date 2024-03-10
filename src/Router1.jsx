import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Sidenav from './Sidenav'
import Product from './Product'
import Category from './Category'
import Dash from './Dash'


function Router1() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<><Login/></>}/>
  <Route path="/admindash" element={<><Dash/></>}/>
    <Route path="/product" element={<><Product/></>}/>
    <Route path="/category" element={<><Category/></>}/>

</Routes>
</BrowserRouter>

    </div>
  )
}

export default Router1