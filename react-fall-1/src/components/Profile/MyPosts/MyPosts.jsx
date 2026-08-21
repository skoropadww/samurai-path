import React from 'react';
import classes from './MyPosts.module.css'; 
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    { id: 1, massege: 'Hello, world!', likeCount: 10 },
    { id: 2, massege: 'Hi, how are you?', likeCount: 20 },
    { id: 3, massege: 'I am fine, thank you!', likeCount: 30 },
  ]
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
            {postsData.map(post => <Post key={post.id} massege={post.massege} likeCount={post.likeCount}/>)}
        </div>
    </div>
  )
}

export default MyPosts
