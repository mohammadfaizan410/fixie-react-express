import React, { PureComponent } from 'react';
import "./styles/app.css";
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Services from './components/Services';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookNow from './components/BookNow';
import { StoreProvider } from 'easy-peasy';
import { store } from './store/store';
import Verify from './components/Verify';

export class App extends PureComponent {
  render() {
    return (
      <StoreProvider store={store}>
      <BrowserRouter>
      <div className='app'>
            
        <Routes>
            <Route path='/' element={<div><Nav /> <Home /></div>} />
            <Route path='login' element={<Login />}/>
            <Route path='register' element={<Register />}/>
            <Route path='services' element={<div><Nav /><Services /></div>}/>
            <Route path='contact' element={<div><Nav /><Contact /></div>}/>
            <Route path='book-now' element={<div><Nav /><BookNow /></div>}/>
            <Route path='verify/:id' element={<Verify />}/>
        </Routes>
      </div>
    </BrowserRouter>
      </StoreProvider>
    )
  }
}

export default App