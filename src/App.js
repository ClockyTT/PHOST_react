import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Content from './Components/Content/Content';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  
  const authState = useSelector(state => state)

  return (
    <div className="App">
      <Header isAuth={authState}/>
      <div className='header'></div>
      <Profile isAuth={authState}/>
      <Content isAuth={authState}/>
    </div>
  );
}

export default App;
