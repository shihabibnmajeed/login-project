import React from 'react'
import Sidenav from './Sidenav'
import { Box } from '@mui/material'

function Category() {
  return (
<Box sx={{ display: 'flex' }}>  <>    <Sidenav/>
    <div>
        <h1>Categories</h1>
   </div></>
    </Box>
  )
}

export default Category