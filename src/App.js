import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Content from './Components/Content/Content';
import PostList from './Services/post.service';

const App = () => {

  const [authState, setAuthState] = useState(false)
  
  function changeAuthState() {
    setAuthState(authState ? false : true)
  }
  return (
    <div className="App">
      <Header isAuth={authState}/>
      <div className='header'></div>
      <button onClick={changeAuthState}>Change auth state</button>
      <Profile isAuth={authState}/>
      <Content posts={PostList} isAuth={authState}/>
    </div>
  );
}

export default App;
