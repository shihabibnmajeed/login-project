import React from 'react'
import { Form } from 'react-bootstrap'
import './Singup.css'
function Signup() {
  return (
<div className='signup-header'>
      <div className='mainsignup'>
        <h1>Signup</h1>
  <Form className='signup-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='label-signupuser'>Username </Form.Label>
        <input className='inputtext'
              type="text"
              required/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-signuppas'> Password</Form.Label>
        <input className='inputtext'
              type="text"
              required/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='label-signupconf'> Confirm Password</Form.Label>
        <input className='inputtext'
              type="text"
              required/>
      </Form.Group>
     <Form.Label className='label-signupconf'> Branches:</Form.Label>
  <select id="dropdown" name="dropdown" className='selectore'>
    <option className='drops' value="option1">Option 1</option>
    <option className='drops' value="option2">Option 2</option>
    <option className='drops' value="option3">Option 3</option>
  
  </select>
   </Form>
      
          <button className='signup-butt' type="submit">
            signup
          </button>
  
    </div>
    </div>
   
  )
}

export default Signup