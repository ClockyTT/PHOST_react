import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Content from './Components/Content/Content';
import ModalAuth from './Components/Authentification/ModalAuth';
import { useSelector } from 'react-redux';

const App = () => {
  
  const authState = useSelector(state => state.auth)

  return (
    <div className="App">
      <Header isAuth={authState.isAuth}/>
      <div className='header'></div>
      <Profile isAuth={authState.isAuth}/>
      <Content isAuth={authState.isAuth}/>
      <ModalAuth/>
    </div>
  );
}

export default App;
