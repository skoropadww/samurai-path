import React from 'react';
import classes from './MyPosts.module.css'; 
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.news}>
        <div className={classes.news_title}>
            <h3>News</h3>
        </div>
        <form className={classes.news_form}>
            <textarea placeholder='Write your post here...' />
            <button type='submit'>New post</button>
        </form>
        <div className={classes.news_posts}>
            <Post massege='Hello, world!' likeCount={10}/>
            <Post massege='Hi, how are you?' likeCount={20}/>
            <Post massege='I am fine, thank you!' likeCount={30}/>
        </div>
    </div>
  );
};

export default MyPosts;
