import React, { PureComponent } from 'react';
import "./styles/app.css";
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
      <div className='app'>
            
        <Routes>
            <Route path='/' element={<div><Nav /> <Home /></div>} />
            <Route path='login' element={<Login />}/>
            <Route path='register' element={<Register />}/>
        </Routes>
      </div>
    </BrowserRouter>
    )
  }
}

export default App