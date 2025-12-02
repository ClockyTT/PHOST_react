import React from "react";
import classes from "../Header.module.css";
import { useSelector, useDispatch } from "react-redux";

const UserNav = (props) => {
  const profile = useSelector((state) => state.auth.userProfile);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "LOG_OUT" });
  };

  return (
    <div>
      <img
        onClick={logout}
        className={classes.image}
        src={profile?.userAvatar || "avatar.png"}
        alt="profile"
      />
    </div>
  );
};

export default UserNav;
