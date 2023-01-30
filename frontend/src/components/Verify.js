import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from './Nav'
import axios from 'axios';

function Verify() {
    const {id} = useParams();

    const getResponse = async() => {
        try {
          const response = await axios.post(
            `http://localhost:4000/api/verify`,
            { id: id }
            );
            return response;
          } catch (error){
            return error;
          }
        }

        getResponse();

  return (
    <div>
        <Nav />
        <div className='login-container'>
            <h3>Thank you, user {id} for verifying your account!</h3>
            <p>Now you can order services or whatever as you fucking please!</p>
        </div>
    </div>
  )
}

export default Verify