import React, { useContext, useState } from 'react'
import { Box } from '@mui/material'
import './Category.css'
import { Button, Card, Col, Container, Form, InputGroup, Modal, Row, Table} from 'react-bootstrap'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import { FiAlertCircle } from "react-icons/fi";
import { IoRefreshCircleOutline } from "react-icons/io5";
import IcecreamOutlinedIcon from '@mui/icons-material/IcecreamOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import { Product } from './Component/Product';
import { Link } from 'react-router-dom';
import Authcontext from './Context/Authcontext';
function Category() {
  const [show,setShow] = useState(false);
  
  const { setBill } = useContext(Authcontext);

  const [selectedItem,setSelectedItem] = useState({
    name: '',
    quantity: 1,
    price: 20.54,
    image: 'https://t4.ftcdn.net/jpg/00/55/33/95/360_F_55339517_X2HjkIkjCpWMiiS1RAM5zssjnkYpW20u.jpg', // Add image property to store the URL of the selected card's image
  });

  const [orderedItems, setOrderedItems] = useState([]);
  const handleIncrement = (index) => {
    const updatedItems = [...orderedItems];
    const item = updatedItems[index];
    const quantity = (item.quantity || 0) + 1;
    const amount = (quantity * item.price).toFixed(2); // Calculate the new amount based on the fixed price
    updatedItems[index] = { ...item, quantity, amount }; // Update amount in the item
    setOrderedItems(updatedItems); // Update orderedItems state
  };
  
  const handleDecrement = (index) => {
    const updatedItems = [...orderedItems];
    const item = updatedItems[index];
    if (item.quantity > 1) {
      const quantity = item.quantity - 1;
      const amount = (quantity * item.price).toFixed(2); // Calculate the new amount based on the fixed price
      updatedItems[index] = { ...item, quantity, amount };
      setOrderedItems(updatedItems);
    }
  };
  

  
  const handleAddToOrder = (itemName, itemPrice, itemImage) => {
    const itemToAdd = {
      name: itemName,
      price: itemPrice,
      quantity: selectedItem.quantity,
      amount: (selectedItem.quantity * itemPrice).toFixed(2), // Calculate amount based on quantity and price
      image: itemImage,
    };
    setOrderedItems([...orderedItems, itemToAdd]);
    setSelectedItem({ ...selectedItem, image: itemImage });
    console.log('Item added to order:', itemToAdd);
  };
  
  // Mock data for the selected card (replace this with your actual data)

  const totalAmount = orderedItems.reduce((acc, item) => acc + parseFloat(item.amount), 0).toFixed(2);
  console.log(totalAmount);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [paymentmethod, setpaymentmethod] = useState("")
  const [payamount, setamount] = useState(totalAmount)
const [amountstate, setamountstate] = useState({
    totalAmount:parseFloat(totalAmount),
    balance:parseFloat(totalAmount),
    paidamount:0,
    Gpay:0,
    Visa:0,
    Cash:0,
    Card:0
  })
  console.log(amountstate);

  const [calculate, setcalculate] = useState("")
  const handlecalculate = (event) => {
    setcalculate(calculate + event.target.value);
  };
  const clearcalculate = () => {
    setcalculate('');
  
  };
  
  return (
    
    <div className='back'>
    <Container fluid  className='mainse'>
      <Row> 
        <Col xl='4'className='firstgrid'>
        <h5 className='top'>FlowMenu</h5> 
        <h6 className='topsub'>Greg,Baldwin</h6><hr />
        <div className='roundbut'><Button className='round' variant="outline-info">1</Button>
        <Button className='round' variant="outline-info">2</Button>
        <Button className='round' variant="outline-info">3</Button>
        <Button className='round' variant="outline-info">4</Button>
        <Button className='round' variant="outline-info">5</Button>
        <Button className='round' variant="outline-info">6</Button>
        <Button className='round' variant="outline-info">7</Button>
        </div>
        <div className='roundbut'><Button className='round' variant="outline-info">1</Button>
        <Button className='round' variant="outline-info">2</Button>
        <Button className='round' variant="outline-info">3</Button>
        <Button className='round' variant="outline-info">4</Button>
        <Button className='round' variant="outline-info">5</Button>
        <Button className='round' variant="outline-info">6</Button>
        <Button className='round' variant="outline-info">7</Button>
        </div><br />
        <div className='back' style={{height:"310px",overflowY:"scroll"}}>
        <Table striped hover   cellPadding={28}>
                <thead>
                  <tr>
                   
                    <th>Name</th>
                    
                    <th>Quantity</th>
                    
                    <th>prise</th>
                    <th>amount</th>
                  </tr>
                </thead>
                <tbody>
                {orderedItems.map((item, index) => (
    <tr key={index}>
      <td>{item.name}</td>
      <td>
        <Button variant="outline-warning" onClick={() => handleDecrement(index)}>-</Button>{' '}
        {item.quantity}
        <Button variant="outline-warning" onClick={() => handleIncrement(index)}>+</Button>{' '}
      </td>
      <td>{item.price.toFixed(2)}</td>
      <td>{item.amount}</td>
    </tr>
  ))}

                   
                </tbody>
              </Table>
              </div>
              <div className="back">
              <Table>
              <tbody>
              <tr>
              <td colSpan="3">Total Amount:</td>
              <td >{totalAmount}</td>
            </tr>
            </tbody>
            </Table>
            <Button className='settlebutton' variant="outline-warning" onClick={()=>{
              const totalAmount = orderedItems.reduce((acc, item) => acc + parseFloat(item.amount), 0).toFixed(2);
              setamountstate({...amountstate, totalAmount: parseFloat(totalAmount),balance:parseFloat(totalAmount)})
              setBill(orderedItems)
              
              handleShow()
            }}>BILLING</Button>{' '} 
          <Modal 
          
                 size=""
                  centered show={show} onHide={handleClose}>
                  <Modal.Header closeButton> </Modal.Header> <br />
                  <InputGroup className='inputhead'>
        <h5 style={{color:"blue"}}>grand total</h5>
        
        <Form.Control className='input__boxs'
        value={totalAmount}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />

      </InputGroup>
     
   
                 
                  <Modal.Body>
                    <div className="amountpaid">
                      <div className="amountpaidp"> <p>Paid Amount:</p>   <Form.Control className='input__boxss'
         value={amountstate.paidamount.toFixed(2)}
          aria-label="Username"
          aria-describedby="basic-addon1"
        /></div>
                      <div className="amountpaidp"> <p>Balance Amount:</p>  <Form.Control className='input__boxss'
        Value={amountstate.balance.toFixed(2)}
          aria-label="Username"
          aria-describedby="basic-addon1"
        /></div>
                    </div>
                  <div className="paymenttype">
                  <button className='paymentbutton' onClick={(e)=>{setpaymentmethod("Cash");
                    e.target.style.backgroundColor='rgb(15,40,66)';}}>Cash <br />{amountstate.Cash.toFixed(2)} </button>
                  <button className='paymentbutton' onClick={(e)=>{setpaymentmethod("Card");
                    e.target.style.backgroundColor='rgb(15,40,66)';}}>Card <br />{amountstate.Card.toFixed(2)} </button>
                  <button className='paymentbutton' onClick={(e)=>{setpaymentmethod("Gpay");
                    e.target.style.backgroundColor='rgb(15,40,66)';}}>Gpay <br />{amountstate.Gpay.toFixed(2)}</button>
                  <button className='paymentbutton' onClick={(e)=>{setpaymentmethod("Visa");
                    e.target.style.backgroundColor='rgb(15,40,66)';}}>Visa Card <br />{amountstate.Visa.toFixed(2)}</button>
                  
       
      </div>
      <br/>
      <div className="cal">
        <div className="cal1">
        <Form.Control className='input__boxs' as="textarea" variant="standard" onChange={(e)=>setamount(parseFloat(e.target.value))} >{payamount}</Form.Control>
      <Link to={`/bill`}> <button className='caladdbutton'>Add</button></Link> 
        </div>
        <div className="cal1">
        
        <button className='calnumbutton'>7</button>
        <button className='calnumbutton'>8</button>
        <button className='calnumbutton'>9</button>
        <button className='calnumsbutton'>$5</button>
        </div>
        <div className="cal1">
        
        <button className='calnumbutton'>4</button>
        <button className='calnumbutton'>5</button>
        <button className='calnumbutton' >6</button>
        <button className='calnumsbutton'>$10</button>
        </div>
        <div className="cal1">
        
        <button className='calnumbutton'>1</button>
        <button className='calnumbutton' >2</button>
        <button className='calnumbutton'>3</button>
        <button className='calnumsbutton'>$20</button>
        </div>
        <div className="cal1">
        
        <button className='calnumbutton'>C</button>
        <button className='calnumbutton' >0</button>
        <button className='calnumbutton'>.</button>
        <button className='calnumsbutton' onClick={() => {
          if(paymentmethod==""){
            return alert("please select payment method")
          }
          if(payamount <=0 || amountstate.balance < payamount)
            {
               return alert ("enter the amount from zero to "+ amountstate.totalAmount)
            }
          
          setamountstate({...amountstate,balance:amountstate.balance- payamount,paidamount:amountstate.paidamount +payamount,[paymentmethod]:amountstate[paymentmethod] + payamount})
          console.log(amountstate);
        }}>PAY</button>
        </div>
      </div>
                  </Modal.Body>
                  
                </Modal>
            </div>
        </Col>
        <Col xl='8' className='secondgrid'>
          <div className='heads'><h6 className='down'>DASH</h6> <h6 className='down'>TABLES</h6><h6 className='down'>TO GO</h6> <h6 className='down'>ENTRY</h6><h6 className='down'>< FiAlertCircle className='ic'/></h6><h6 className='down'><IoRefreshCircleOutline className='ic'/></h6> </div>
          <div className='secondhead'>
          <ChevronLeftIcon className='arrows'/>
          <Button className='roundred' variant="outline-warning"><IcecreamOutlinedIcon/></Button>
        <Button className='roundred' variant="outline-warning"><LunchDiningOutlinedIcon/></Button>
        <Button className='roundred' variant="outline-warning"><LocalBarOutlinedIcon/></Button>
        <Button className='roundred' variant="outline-warning"><LocalPizzaOutlinedIcon/></Button>
        <Button className='roundred' variant="outline-warning">< RestaurantMenuOutlinedIcon/></Button>
        <ChevronRightIcon className='arrows'/>
          </div>
          <div className='itemstitle'><p className='itemstitles'>ICE CREAM</p><p className='itemstitless'>BURGUR</p><p className='itemstitlesss'>FALOODA</p><p className='itemstitlessss'>PIZZA</p><p className='itemstitlessss'>MAIN COURSE</p> </div>
       <hr />
       <div style={{height:"550px",overflowY:"scroll"}}>
       <div className='cardimg'>
        {
          Product.map(item => {
            return(

       
       <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={item.image} height={125}  />
      <Card.Body className='cardcolor'>
     {item.title}

      <br /> ${item.price.toFixed(2)}&nbsp;
        <Button onClick={() => handleAddToOrder(item.title,item.price)}  variant="outline-warning">+</Button>
      </Card.Body>
    </Card>     )
          })
        }
    
       </div>
       </div>
        </Col>
        
      </Row>
      
    </Container>
   </div>
  
  )
}

export default Category