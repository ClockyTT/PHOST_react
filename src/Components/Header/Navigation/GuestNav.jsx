import React from "react";
import classes from '../Header.module.css';
import { useDispatch } from "react-redux";

const GuestNav = (props) => {

  const dispatch = useDispatch()

  const changeAuthState = () => {
    dispatch({type:"CHANGE_STATE"})
  }

  return (
    <div> 
      <button onClick={changeAuthState}>Log in</button>
      <button>Sign up</button>
    </div>
  );
}

export default GuestNav;