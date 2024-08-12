import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './Product';
import Category from './Category';
import Dash from './Dash';
import Userdash from './Userdash';
import Login from './Login';
import Report from './Report';
import Dayendreports from './Dayendreports';
import Bill from './Bill';
function Router2() {
  return (
    <div>
        <BrowserRouter>
<Routes>
  <Route path='/' element={<><Login/></>}/>
  <Route path='/user' element={<><Userdash/></>}/>
  <Route path="/admindash" element={<><Dash/></>}/>
    <Route path="/product" element={<><Product/></>}/>
    <Route path="/category" element={<><Category/></>}/>
    <Route path="/report" element={<><Report/></>}/>
    <Route path="/Day" element={<><Dayendreports/></>}/>
    <Route path="/bill" element={<><Bill/></>}/>
</Routes>
</BrowserRouter>

    </div>
  )
}

export default Router2