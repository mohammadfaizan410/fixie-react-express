import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../styles/register.css";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";


function Register() {
  
  const navigate = useNavigate();


  const [registerData, setRegisterData] = React.useState({
    name: "", surname: "", email: "", password: "",
    confirmPassword: ""
  })

  const [isLoading, setIsLoading] = React.useState(false); 
  
  const [disabledBtn, setDisabledBtn] = React.useState(true);

  const [passError, setPassError] = React.useState("");

  const getResponse = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/register`,
        { data: registerData }
      );
      return response;
    }
    catch (error) {
      console.log(error);
      return error;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      setPassError("passwords must match!");
      setDisabledBtn(true)
    }
    else {   
      setIsLoading(true);
      const res = await getResponse();
      setIsLoading(false);
      console.log(res);
      setRegisterData({
        name: "", surname: "", email: "", password: "",
        confirmPassword: ""
      })
      navigate("/login")
      }

    //   axios.post("http://localhost:4000/api/register", {
    //     data: registerData,
    // }).then(response => {
    //   console.log(response.data)
    // }, error => {
    //   console.log(error);
    // })
  }
  

  const handleChange = (e) => {
    console.log("change", disabledBtn);
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    if (registerData.name==="" || registerData.surname==="" || registerData.email==="" || registerData.email==="" || registerData.password==="" || registerData.confirmPassword==="") {
      setDisabledBtn(true)
    }
    else {
      setDisabledBtn(false)
    }
    }

    
  return (
    <Form onSubmit={handleSubmit} className="register-container" >
        <h3>Register!</h3>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name*</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name='name' value={registerData.name} onChange={(e) => handleChange(e)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicSurname">
      <Form.Label>Surname*</Form.Label>
      <Form.Control type="text" placeholder="Surname" name='surname' value={registerData.surname} onChange={(e)=>handleChange(e)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email*</Form.Label>
      <Form.Control type="email" placeholder="Enter Email" name='email' value={registerData.email} onChange={(e)=>handleChange(e)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password*</Form.Label>
      <Form.Control type="password" placeholder="Password" name='password' value={registerData.password} onChange={(e)=>handleChange(e)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
      <Form.Label>Confirm Password*</Form.Label>
      <Form.Control type="password" placeholder="confirm password" name='confirmPassword' value={registerData.confirmPassword} onChange={(e)=>handleChange(e)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="agree to terms and services" />
    </Form.Group>
    <Button variant="primary" type="submit" disabled={disabledBtn}>
        {isLoading ? <div className="spinner-border spinner-grow-sm" role="status">
        </div> : "Register"}
      </Button>
      <p style={{ color: "red" }}>{passError}</p>
    </Form>
  )
}

export default Register