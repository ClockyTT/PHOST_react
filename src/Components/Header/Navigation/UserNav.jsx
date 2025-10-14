import React from "react";
import classes from '../Header.module.css';
import { useDispatch } from "react-redux";

const UserNav = (props) => {

  const dispatch = useDispatch()

  const changeAuthState = () => {
    dispatch({type:"CHANGE_STATE"})
  }

  return (
    <div>
      <img onClick={changeAuthState} className={classes.image} src="avatar.png" alt="profile" />
    </div>
  );
}

export default UserNav;