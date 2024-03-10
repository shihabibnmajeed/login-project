import React from 'react'
import Sidenav from './Sidenav'
import { Box } from '@mui/material'
import Nave from './Nave'

function Category() {
  return (
    <>
    <Nave/>
    <Box  height={30}  /> 
    <Box sx={{ display: 'flex' }}>  <>  <Sidenav/>
    <div><br /><br />
        <h1>Categories</h1>
   </div></>
    </Box></>
  )
}

export default Category