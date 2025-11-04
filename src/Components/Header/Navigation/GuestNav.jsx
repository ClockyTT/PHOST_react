import React from "react";
import classes from '../Header.module.css';
import { useDispatch } from "react-redux";

const GuestNav = (props) => {

  const dispatch = useDispatch()

  const openModal = () => {
    dispatch({type:"OPEN_LOG_MODAL"})
  }

  return (
    <div> 
      <button className={classes.logButton} onClick={openModal}>Log in</button>
    </div>
  );
}

export default GuestNav;