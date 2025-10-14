import React, {Component} from 'react';
import classes from './Content.module.css'
import GuestCard from './Card/GuestCard'
import UserCard from './Card/UserCard'

const Content = (props) => {
  // let posts = props.posts;
  let isAuth = props.isAuth;
  let posts = [
    {id: 1, name: 'user1', description: 'my new image'},
    {id: 2, name: 'user2', description: 'my new photo'},
    {id: 2, name: 'user2', description: 'my new photo'},
    {id: 3, name: 'user2', description: 'my new photo'},
    {id: 4, name: 'user2', description: 'my new photo'},
    {id: 5, name: 'user2', description: 'my new photo'},
    {id: 6, name: 'user3', description: 'my new art'}
  ]
  return (
    <div className={classes.Content}>
      <div className={classes.Cards}>
        {posts.length? (
          posts.map(post => (
            isAuth? (
              <UserCard key={post.id} post={post}/>
            ):
            <GuestCard key={post.id} post={post}/>
          ))):
        <div>No cards yet</div>}
      </div>
    </div>
  );
}

export default Content;