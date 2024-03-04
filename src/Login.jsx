import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

import Signup from './Signup'
import  './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (

    <div className='login-header'>
      
    <Container className='login-header1'>
    <Row>
      <Col>
      <div className="main">
          <div className="login-imgheader">
      <img className='login-image' src="https://www.shutterstock.com/image-vector/man-key-near-computer-account-260nw-1499141258.jpg" alt="" />
      </div>
<div className="login-form">
  <h1>LOGIN</h1><br />
      <Form.Label className='login-userlabel' htmlFor="inputPassword5">USERNAME</Form.Label>
    <Form.Control className='login-input'
      type="password"
      id="inputPassword5"
      aria-describedby="passwordHelpBlock"
    />
     <Form.Label className='login-userlabel' htmlFor="inputPassword5">PASSWORD</Form.Label>
    <Form.Control className='login-input'
      type="password"
      id="inputPassword5"
      aria-describedby="passwordHelpBlock"
    />
     <Form.Label className='login-branchlabel' htmlFor="inputPassword5">BRANCH</Form.Label>
     <Form.Select className='login-option' aria-label="Default select example">
   <option hidden selected>Select one...</option>
   <option value="1">branch 1</option>
   <option value="2">branch 2</option>
   <option value="3">branch 3</option>
 </Form.Select>
 <button className='login-button' type="submit">
          Login
        </button>
       
    
<hr />
<div >
<a href='https://www.google.co.in/'className='login-social'> <img  src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg" alt="" height={35} width={30}/></a>
<a href='https://www.facebook.com/'className='login-social'><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImj5adg1sNvD0iCEQcjIGr-CZGuiX1or61w&usqp=CAU" alt="" height={35} width={35 }/></a>
<a href='https://twitter.com/?lang=en'className='login-social'><img   src="https://cdn.iconscout.com/icon/free/png-256/free-twitter-241-721979.png?f=webp" alt="" height={30} width={30}/></a>


</div><br />
<h6 className='fonts'>Don't have an account yet?<Link className='sty'  to={`/signup`}>Sing up here</Link></h6>
</div>
<br />
</div>
      </Col>
    </Row>
  </Container>
  </div>

    
  )
}

export default Login