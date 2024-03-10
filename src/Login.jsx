import React, { useState } from 'react'
import { Button, Col, Container, Form, FormControl, Modal, Row } from 'react-bootstrap'
import  './Login.css'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom'
import { IconButton, InputAdornment, Select, TextField, colors } from '@mui/material';
function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
});

const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
};

const handleMouseDownPassword = (event) => {
    event.preventDefault();
};

const handlePasswordChange = (prop) => (event) => {
    setValues({
        ...values,
        [prop]: event.target.value,
    });
};


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const { login } = useAuth();

  const handleLogin = () => {
    if (username === 'admin' && password === '123') {
      
      navigate(`/admindash`);
    }
    else if (username === 'user' && password === '111') {
      
        navigate(`/user`);
      }
     else {
      alert('Invalid password or username');
    }
  };
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
  <h1 className='login-head'>LOGIN</h1><br />
  <Form.Group className='group'>
  <Form.Label className='login-userlabel' htmlFor="inputPassword5">USERNAME</Form.Label>
      <TextField sx={{ m: 0,ml:1, width: 290 }} 
    size="small"
        type={values.showPassword ? "text" : "password"}
        onChange={(e) => setUsername(e.target.value)}
        
    />
  </Form.Group>
     <Form.Group className='group'> <Form.Label className='login-userlabel' htmlFor="inputPassword5">PASSWORD</Form.Label>
     
     <TextField sx={{ m: 0,ml:1, width: 290 }} 
     size="small"
         type={values.showPassword ? "text" : "password"}
         onChange={(e) => setPassword(e.target.value)}
         
         InputProps={{
             endAdornment: (
                 <InputAdornment position="end">
                     <IconButton
                         onClick={handleClickShowPassword}
                         onMouseDown={handleMouseDownPassword}
                     >
                         {values.showPassword ? <Visibility /> : <VisibilityOff />}
                     </IconButton>
                 </InputAdornment>
             )
         }}
     /> </Form.Group>
    
<Form.Group className='group'>
<Form.Label className='login-branchlabel' htmlFor="inputPassword5">BRANCH</Form.Label>
     <Select   sx={{ m: 0,ml:1, width: 290 }}
        fullWidth
        size="small"
        >
          
                        <option className='option-branch' value="1">branch1</option>
                        <option className='option-branch' value="2">branch2</option>
                        <option className='option-branch' value="3">branch3</option>

        </Select>
 
</Form.Group>
   
        <Button variant="secondary" className='login-button'onClick={handleLogin}>Login</Button>
    
<hr />
<div >
<a href='https://www.google.co.in/'className='login-social'> <img  src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg" alt="" height={35} width={30}/></a>
<a href='https://www.facebook.com/'className='login-social'><img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTImj5adg1sNvD0iCEQcjIGr-CZGuiX1or61w&usqp=CAU" alt="" height={35} width={35 }/></a>
<a href='https://twitter.com/?lang=en'className='login-social'><img   src="https://cdn.iconscout.com/icon/free/png-256/free-twitter-241-721979.png?f=webp" alt="" height={30} width={30}/></a>


</div><br />
<h6 className='fonts'>Don't have an account yet?<Link  onClick={handleShow} className='sty'  to={`/`}>Sing up here</Link></h6>
</div>
<br />
</div>
      </Col>
    </Row>
  </Container>
  <Container >
 
  <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modals' closeButton>
          <h1 className='hending'>SIGN UP</h1>
        </Modal.Header>
        <Modal.Body className='modals'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className='label' >USER NAME</Form.Label>
              <Form.Control className='control'
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
               <Form.Label className='label'>PASSWORD</Form.Label><br/>
               
               <TextField  sx={{ m: 0,ml:9, width: 350,height:45} }
    size="small"
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        InputProps={{
            endAdornment: (
                <InputAdornment  position="end">
                    <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            )
        }}
    />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
               <Form.Label className='label'>CONFORM PASSWORD</Form.Label>
              <Form.Control  className='control'
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group>  <Form.Label className='label'>BRANCH</Form.Label>
                <Form.Select  className='control' aria-label="Default select example">
      <option value="1">BRANCH ONE</option>
      <option value="2">BRANCH TWO</option>
      <option value="3">BRANCH THREE</option>
    </Form.Select>
    </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='modals'>
          <Button className='sign-but' variant="secondary " onClick={handleClose}>
            Save 
          </Button>
          <Button className='sign-but' variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
  </div>

    
  )
}

export default Login