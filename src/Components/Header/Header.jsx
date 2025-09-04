import classes from './Header.module.css';
import Navigation from './Navigation';
import Search from './Search';
import React from 'react';


const Header = (props) => {
  return (
    <div className={classes.Header}>
      <div>
        <img className={classes.image} src='logo.png' alt="logo"/>
      </div>
      <Search/>
      <Navigation isAuth={props.isAuth} />
    </div>
  );
}

export default Header;