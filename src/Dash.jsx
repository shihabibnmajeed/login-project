import React from 'react'
import {BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsFillBellFill} from 'react-icons/bs'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart } from 'recharts';
import './Dash.css'
import Sidenav from './Sidenav';
import { Box } from '@mui/material';
import { FcSalesPerformance } from 'react-icons/fc';
import { GiProfit } from 'react-icons/gi'
function Dash() { {
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
   <><Sidenav/>
   <Box height={70}/> 
    <Box sx={{ display: 'flex' }}>    <Sidenav/>
    <main className='main-container home'>
  <div className='main-title'>
    <h3>DASHBOARD</h3>
  </div>

  <div className='main-cards'>
    <div className='cardees'>
        <div className='card-inner'>
            <h3 className='color-heading'>Sales</h3>
            <FcSalesPerformance  className='card_icon'/>
        </div>
        <h1>1725</h1>
    </div>
    <div className='cardees'>
        <div className='card-inner'>
            <h3 className='color-heading'>Employees</h3>
            <BsPeopleFill className='card_icon'/>
        </div>
        <h1>99</h1>
    </div>
    <div className='cardees'>
        <div className='card-inner'>
            <h3 className='color-heading'>Profit</h3>
            <GiProfit  className='card_icon'/>
        </div>
        <h1>18500</h1>
    </div>
    <div className='cardees'>
        <div className='card-inner'>
            <h3 className='color-heading'>Pending Job Orders</h3>
            <BsFillBellFill className='card_icon'/>
        </div>
        <h1>15</h1>
    </div>
  </div>
  <div className='charts'>

  <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
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
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
  </div>
    </main>
   </Box>
   
    </> 
  )
        }
}

export default Dash