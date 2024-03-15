import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './Product';
import Category from './Category';
import Dash from './Dash';
import Userdash from './Userdash';
import Login from './Login';
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

</Routes>
</BrowserRouter>

    </div>
  )
}

export default Router2