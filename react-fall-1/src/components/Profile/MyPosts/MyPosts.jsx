import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let postsData = props.postsData.map((post) => (
    <Post
      key={post.id}
      massege={post.massege}
      likeCount={post.likeCount}
    />
  ))

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div className={classes.news}>
      <div className={classes.news_title}>
        <h3>News</h3>
      </div>
      <form className={classes.news_form}>
        <textarea ref={newPostElement} placeholder="Write your post here..." />
        <button onClick={addPost} type="submit">New post</button>
      </form>
      <div className={classes.news_posts}>
        {postsData}
      </div>
    </div>
  )
}

export default MyPosts
