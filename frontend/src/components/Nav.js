import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/nav.css";

function Nav() {
  return (
    <div className='nav-container'>
      <div className='nav-left'>
        <Link to="/" style={{ textDecoration : "none" }}>
        <div className='nav-logo'>Fixie</div>
        </Link>
        <Link to="/" style={{ textDecoration : "none" }}>
        <div className='nav-item'>Home</div>
        </Link>
        <Link to="/services" style={{ textDecoration : "none" }}>
        <div className='nav-item'>Services</div>
        </Link>
        <Link to="/book-now" style={{ textDecoration : "none" }}>
        <div className='nav-item'>Book Now</div>
        </Link>
        <Link to="/contact" style={{ textDecoration : "none" }}>
        <div className='nav-item'>Contact</div>
        </Link>
      </div>
      <div className='nav-right'>
        <Link to="/login" style={{ textDecoration : "none" }}>
        <div className='nav-login'>Login</div>
        </Link>
        <Link to="/register" style={{ textDecoration : "none" }}>
        <div className='nav-register'>Register</div>
        </Link>
      </div>
    </div>
  )
}

export default Nav
// Almost White: hsl(0, 0%, 98%)
// - Medium Gray: hsl(0, 0%, 41%)
// - Almost Black: hsl(0, 0%, 8%)
// - Family: [Epilogue](https://fonts.google.com/specimen/Epilogue)
// - Weights: 500, 700