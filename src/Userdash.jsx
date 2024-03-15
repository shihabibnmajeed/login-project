import React from 'react'
import {BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsFillBellFill} from 'react-icons/bs'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart, ComposedChart } from 'recharts';
import './Dash1.css'
import { Box} from '@mui/material';
import { FcSalesPerformance } from 'react-icons/fc';
import { GiProfit } from 'react-icons/gi'
import UserSidenav from './Usersidenave';
import { Card } from 'react-bootstrap'
function Userdash() { {
    const data = [
        {
          name: 'Page A',
          uv: 2800,
          pv: 2000,
          amt: 3300,
        },
        {
          name: 'Page B',
          uv: 3400,
          pv: 1898,
          amt: 2710,
        },
        {
          name: 'Page C',
          uv: 2700,
          pv: 8000,
          amt: 9290,
        },
        {
          name: 'Page D',
          uv: 4780,
          pv: 3708,
          amt: 8000,
        },
        {
          name: 'Page E',
          uv: 1440,
          pv: 4700,
          amt: 2047,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 7800,
          amt: 2550,
        },
        {
          name: 'Page G',
          uv: 8490,
          pv: 7300,
          amt: 6100,
        },
      ];




  return (
   <>
   <Box height={70}/> 
    <Box sx={{ display: 'flex' }}> <UserSidenav/>
    <main className='main-container home'>
  <div className='main-title'>
    <h3>DASHBOARD</h3>
  </div>

  <div className='main-cards'>
    <div className='cards'>
        <div className='card-inner'>
            <h4 className='color-headings'>Sales</h4>
            <FcSalesPerformance  className='card_icon'/>
        </div>
        <h1>1725</h1>
    </div>
    <div className='cards'>
        <div className='card-inner'>
            <h4 className='color-headings'>Employees</h4>
            <BsPeopleFill className='card_icon'/>
        </div>
        <h1>99</h1>
    </div>
    <div className='cards'>
        <div className='card-inner'>
            <h4 className='color-headings'>Profit</h4>
            <GiProfit  className='card_icon'/>
        </div>
        <h1>18500</h1>
    </div>
    <div className='cards'>
        <div className='card-inner'>
            <h4 className='color-headings'>Pending Job Orders</h4>
            <BsFillBellFill className='card_icon'/>
        </div>
        <h1>15</h1>
    </div>
  </div>
  <div className='charts'>
  <Card className='cardes' style={{ width: '30rem' }}>
      
      <Card.Body>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
  
      </Card.Body>
    </Card>
    <Card className='cardes' style={{ width: '29rem' }}>
      
      <Card.Body>
    <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
      </Card.Body></Card>
  </div>
    </main>
   </Box>
   
    </> 
  )
        }
}

export default Userdash