import React, { useState } from 'react';
import classes from './Card.module.css'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const UserCard = (props) => {  

  const [likeState, setLikeState] = useState(false)
  function changeLikeState() {
    setLikeState(prev => !prev)
  }

  return (
      <div className={classes.Card}>
        <img src='logo192.png'/>
        <div className={classes.frstLine}>
        <h2>{props.post.name}</h2>
        <IconButton className={`${classes.likeButton} ${likeState ? classes.liked : ''}`} onClick={changeLikeState}>
          {likeState ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        </div>
        <h3>{props.post.description}</h3>
      </div>
    );
  }

export default UserCard;