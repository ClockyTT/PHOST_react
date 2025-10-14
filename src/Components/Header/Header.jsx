import classes from './Header.module.css';
import UserNav from './Navigation/UserNav';
import GuestNav from './Navigation/GuestNav'
import Search from './Search';
import React from 'react';
import { store } from '../../Store';


const Header = (props) => {

  const isAuth = store.getState()

  return (
    <div className={classes.Header}>
      <div>
        <img className={classes.image} src='logo.png' alt="logo"/>
      </div>
      <Search/>
      {isAuth?
          (<UserNav />):(<GuestNav />)
      }
    </div>
  );
}

export default Header;