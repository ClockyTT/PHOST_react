import React, { useState } from 'react';
import classes from './Card.module.css'

const Card = (props) => {  

  const [likeState, setLikeState] = useState(false)
  function changeLikeState() {
    setLikeState(likeState ? false : true)
  }

  const LikeButton = (props) => {
    if (props.isLiked)
      return(
        <button onClick={changeLikeState} className={classes.liked}>Like</button>
      )
    else
      return(
        <button onClick={changeLikeState} className={classes.noLiked}>Like</button>
      )
  }

  return (
      <div className={classes.Card}>
        <img src='logo192.png'/>
        <div className={classes.frstLine}>
        <h2>{props.post.name}</h2>
        <LikeButton isLiked={likeState}/>
        </div>
        <h3>{props.post.description}</h3>
      </div>
    );
  }

export default Card;