import React from 'react'
import Sidenav from './Sidenav'
import { Box } from '@mui/material'
import Nave from './Nave'
function Product() {
  return (
    <>
    <Nave/>
    <Box sx={{ display: 'flex' }}>  <>    <Sidenav/>
    <div>
        <h1>PRODUCTS</h1>
   </div></>
    </Box></>
  )
}

export default Product