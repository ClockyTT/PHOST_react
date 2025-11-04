import React from "react";
import classes from '../Header.module.css';
import { useDispatch } from "react-redux";
import { store } from '../../../Store';

const UserNav = (props) => {

  const dispatch = useDispatch()

  const changeAuthState = () => {
    dispatch({type:"CHANGE_AUTH_STATE"})
    // console.log(store.getState().auth)
  }

  return (
    <div>
      <img onClick={changeAuthState} className={classes.image} src="avatar.png" alt="profile" />
    </div>
  );
}

export default UserNav;