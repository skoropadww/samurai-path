import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state'


const MyPosts = (props) => {
  let postsData = props.postsData.map((post) => (
    <Post
      key={post.id}
      massege={post.massege}
      likeCount={post.likeCount}
    />
  ))

  let newPostElement = React.createRef();

  let addPost = (e) => {
    e.preventDefault();
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={classes.news}>
      <div className={classes.news_title}>
        <h3>News</h3>
      </div>
      <form className={classes.news_form}>
        <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} placeholder="Write your post here..." />
        <button onClick={addPost} type="submit">New post</button>
      </form>
      <div className={classes.news_posts}>
        {postsData}
      </div>
    </div>
  )
}

export default MyPosts
