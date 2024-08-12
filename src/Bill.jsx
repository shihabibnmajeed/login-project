import React, { useContext, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import Authcontext from './Context/Authcontext';
import './Bill.css';
function Bill() {
  const { Bill } = useContext(Authcontext);
  const [itembill, setitembill] = useState("")
  const [totalAmount, setTotalAmount] = useState(Bill.reduce((t, e) => t + parseFloat(e.amount), 0).toFixed(2))
   
  console.log(Bill)
  return (

    <div className='Billmain'>
      <div><h1>INVOICE RECEIPT</h1><hr />
      <h3>
        order no:INV-3836200005
      </h3>
      <h3> 
        printed date time:18-07-2024 10.00 PM
      </h3><hr />
      <div className='Bills'>
<h3>Customer:shihab </h3>
<h3>order Date:18-07-2024 </h3>
      
      </div>
      
      <div className='Bills'>

<h3>order Type:Tack away</h3>
<h3>Payment:Cash</h3>  
      </div>
      
      
      </div> <hr className='dotes'/>
            <Table striped hover   cellPadding={10} border={2}>
                <thead className='tabletr'>

                  <tr>
                   
                    <th>Name</th>
                    
                    <th>Quantity</th>
                    
                    <th>prize</th>
                    <th>amount</th>
                  </tr>
                </thead>
                <tbody>
                {Bill.map((item) => (
    <tr>
      <td>{item.name}</td>
      <td>
        {item.quantity}
      </td>
      <td>{item.price}</td>
      <td>{item.amount}</td>
    </tr>
  ))}

                   
                </tbody> 
            
              </Table>  <hr className='dotes'/>
         

              <div className='Bills'>

<h4>Sub Total</h4>
<h4>Rs 720.00</h4>  
      </div>
      <div className='Bills'>

<h4>Discount(0%)</h4>
<h4>Rs 0.00</h4>  
 </div>
      <div className='totalamount'><h4>Total amount</h4><h4>Rs {totalAmount}</h4> </div> <hr className='dotes' /> 
      <div className='Bills'>

<h4>Cash Received</h4>
<h4>Rs 1,000.00</h4>  
      </div>
      <div className='Bills'>

<h4>Return</h4>
<h4>Rs 280.00</h4>  
 </div>
    </div>
  )
}

export default Bill