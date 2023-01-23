import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import "../styles/login.css";
function Login() {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginData)
  }
  
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    })
  } 

  const [loginData, setLoginData] = React.useState({
    email: '',
    password: ''
  });  
  
  

  return (
      <Form onSubmit={handleSubmit} className="login-container" >
        <h3>Login!</h3>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={loginData.email} onChange={(e) => handleChange(e)} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={loginData.password} onChange={ (e)=> handleChange(e) } />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Login
      </Button>
      <div>
      <Form.Text className="text-muted login-text" >
        Don't have an account?<Link to="/register">Register!</Link>
        </Form.Text>
     </div>
 
  </Form>
  )
}

export default Login