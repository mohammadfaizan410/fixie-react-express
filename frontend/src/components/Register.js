import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/register.css"
import axios from 'axios';

function Register() {
    const [registerData, setRegisterData] = React.useState({
        name: "", surname: "", email: "", password: "",
        confirmPassword : ""
    })

  const handleSubmit = (e) => {
        e.preventDefault();
      axios.post("http://localhost:4000/api/register",{
          data : registerData,
      }).then(response => {
          console.log(response.data)
      }, error => {
        console.log(error);
        })

        setRegisterData({
            name: "", surname: "", email: "", password: "",
            confirmPassword : ""
        })
    }

    const handleChange = (e) => {
        setRegisterData({...registerData, [e.target.name] : e.target.value})
    }

  return (
    <Form onSubmit={handleSubmit} className="register-container" >
        <h3>Register!</h3>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name='name' value={registerData.name} onChange={(e) => handleChange(e)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicSurname">
      <Form.Label>Surname</Form.Label>
      <Form.Control type="text" placeholder="Surname" name='surname' value={registerData.surname} onChange={(e)=>handleChange(e)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter Email" name='email' value={registerData.email} onChange={(e)=>handleChange(e)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name='password' value={registerData.password} onChange={(e)=>handleChange(e)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="confirm password" name='confirmPassword' value={registerData.confirmPassword} onChange={(e)=>handleChange(e)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="agree to terms and services" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Register
    </Button>
  </Form>
  )
}

export default Register