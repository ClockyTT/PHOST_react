import React, { useState } from "react";
import classes from "./Card.module.css";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { usePostSearch } from "../../../Context/PostSearch/usePostSearch";

const Card = (props) => {
  const { findByAuthor } = usePostSearch();
  const [likeState, setLikeState] = useState(false);
  function changeLikeState() {
    setLikeState((prev) => !prev);
  }

  return (
    <div className={classes.Card}>
      <div className={classes.imgBox}>
        <img className={classes.img} src={props.post.postImage} />
      </div>
      <div className={classes.frstLine}>
        <span onClick={() => findByAuthor(props.post.postCreator)}>
          {props.post.postCreator}
        </span>
        {props.isAuth ? (
          <IconButton
            className={`${classes.likeButton} ${
              likeState ? classes.liked : ""
            }`}
            onClick={changeLikeState}
          >
            {likeState ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        ) : (
          ""
        )}
      </div>
      <div className={classes.scndLine}>
        <h3>{props.post.postDescription}</h3>
      </div>
    </div>
  );
};

export default Card;
