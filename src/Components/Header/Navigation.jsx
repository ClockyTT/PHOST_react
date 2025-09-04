import React from "react";
import classes from './Header.module.css';

const UserNav = (props) => {
  return (
    <div>
      <img className={classes.image} src="avatar.png" alt="profile" />
    </div>
  );
}

const GuestNav = (props) => {
  return (
    <div> 
      <button>Log in</button>
      <button>Sign up</button>
    </div>
  );
}

const Navigation = (props) => {
  if (props.isAuth)
    return (
      <div>
        <UserNav />
      </div>
    );
  return (
    <div>
      <GuestNav />
    </div>
  );
}

export default Navigation;