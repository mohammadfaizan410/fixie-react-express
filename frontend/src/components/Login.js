import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, redirect } from 'react-router-dom';
import axios from 'axios';
import "../styles/login.css";
import { Navigate, useNavigate } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';

function Login() {
  const userStore = useStoreState((state) => state.userStore);
  const setUser = useStoreActions((actions) => actions.setUserStore);
  const navigate = useNavigate();

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
  
  const getResponse = async() => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/login`,
        { data: loginData }
        );
        return response;
      } catch (error){
        return error;
      }
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await getResponse();
      if (res.data) {
        setUser(res.data);
          navigate('/');
        } else {
          document.getElementsByClassName('status').text = 'Incorrect email or password';
        }
    }
  React.useEffect(() => {
    if(userStore.name)
    navigate("/");
  }, [])
  if (!userStore.name) {
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
          <Form.Control type="password" placeholder="Password" name='password' value={loginData.password} onChange={(e) => handleChange(e)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <div className='status'></div>
        <div>
          <Form.Text className="text-muted login-text" >
            Don't have an account? <Link to="/register">Register!</Link>
          </Form.Text>
        </div>
 
      </Form>
    ) 
  } else {
     return (
       <div>Logged in</div>
      )
  }
}

export default Login