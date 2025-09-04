import React, {Component} from 'react';
import classes from './Content.module.css'
import Card from './Card/Card'

const Content = (props) => {
  // let posts = props.posts;
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
            <Card key={post.id} post={post}/>
          ))):
        <div>No cards yet</div>}
      </div>
    </div>
  );
}

export default Content;