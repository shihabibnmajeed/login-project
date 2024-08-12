import React from 'react'
import {BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsFillBellFill} from 'react-icons/bs'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart } from 'recharts';
import './Dash.css'
import Sidenav from './Sidenav';
import { Box } from '@mui/material';
import { FcSalesPerformance } from 'react-icons/fc';
import { GiProfit } from 'react-icons/gi'
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import { FaArrowTrendUp } from "react-icons/fa6";
import { Button } from 'react-bootstrap';
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoPeopleSharp } from "react-icons/io5";
function Dash() { {
    const data = [
        {
          name: 'Page A',
          uv: 1000,
          pv: 1000,
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
    <main className='maincontainer'>
  <div className='maintitle'>
   <Button  variant="outline-primary" className='outbut' >Today</Button>
<Button variant="outline-primary" className='outbut'>This Month</Button>
<Button variant="outline-primary"className='outbut' >This Year</Button>
    
  </div>

  <div className='main-cards'>
    <div className='cardees'>
        <div className='card-inner'>
            <h6 className='colorheading'>Sales</h6>
            <RiShoppingCartFill  className='cardicon1'/>
        </div>
        <h5 className='cardbottom'>$152,025.00</h5>
    </div>
    <div className='cardees'>
        <div className='card-inner'>
            <h6 className='colorheading'>Sales Return</h6>
            < FaLongArrowAltLeft   className='cardicon2'/>
        </div>
        <h5 className='cardbottom'>$103,522.50</h5>
    </div>
    <div className='cardees'>
        <div className='card-inner'>
            <h6 className='colorheading'>Purchases</h6>
            <RiShoppingCartFill  className='cardicon3'/>
        </div>
        <h5 className='cardbottom'>$12,14716.80</h5>
    </div>
    <div className='cardees'>
        <div className='card-inner'>
            <h6 className='colorheading'>Purchase Return</h6>
            <FaLongArrowAltRight  className='cardicon4'/>
        </div>
        <h5 className='cardbottom'>$50,1457.00</h5>
    </div>
    <div className='cardees'>
        <div className='card-inner'>
            <h6 className='colorheading'>Expenses</h6>
            <CurrencyRupeeRoundedIcon className='cardicon5'></CurrencyRupeeRoundedIcon>
        </div>
        <h5 className='cardbottom'>$10,41154.00</h5>
    </div>
    <div className='cardees'>
        <div className='card-inner'>
            <h6 className='colorheading'>Users</h6>
            <FaUsers className='cardicon6'/>
        </div>
        <h5 className='cardbottom'>4<FaArrowTrendUp/>All Time</h5>
    </div>
    <div className='cardees'>
        <div className='card-inner'>
            <h6 className='colorheading'>Customers</h6>
          <IoPeopleSharp  className='cardicon7'/>
        </div>
        <h5 className='cardbottom'>9<FaArrowTrendUp/>All Time</h5>
    </div>    <div className='cardees'>
        <div className='card-inner'>
            <h6 className='colorheading'>Suppliers</h6>
            <IoPeopleSharp   className='cardicon8'/>
        </div>
        <h5 className='cardbottom'>3<FaArrowTrendUp/>All Time</h5>
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