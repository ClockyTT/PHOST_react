import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Content from "./Components/Content/Content";
import ModalAuth from "./Components/Authentification/ModalAuth";
import { getMyProfile } from "./Services/userService";
import { useDispatch, useSelector } from "react-redux";
import { PostSearchProvider } from "./Context/PostSearch/PostSearchProvider";

const App = () => {
  // const [posts, setPosts] = useState();

  const authState = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    const fetchData = async () => {
      if (token) {
        const profile = await getMyProfile();
        // console.log(profile);
        dispatch({
          type: "LOG_IN",
          payload: { accessToken: token, userProfile: profile },
        });
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <PostSearchProvider>
        <Header isAuth={authState.isAuth} />

        <div className="header"></div>
        <Profile isAuth={authState.isAuth} />

        <Content isAuth={authState.isAuth} />
      </PostSearchProvider>
      <ModalAuth />
    </div>
  );
};

export default App;
