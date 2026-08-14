import React from 'react';
import classes from './MyPosts.module.css'; 
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.news}>
        <div className={classes.news_title}>
            <h3>News</h3>
        </div>

        <div className={classes.news_posts}>
            <Post />
            <Post />
            <Post />
        </div>
    </div>
  );
};

export default MyPosts;
