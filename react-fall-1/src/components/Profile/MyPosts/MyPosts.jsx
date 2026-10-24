import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import MyPostsFormReduxForm from './MyPostForm'

const MyPosts = (props) => {
  const onSubmit = (formData, dispatch, formProps) => {
    if (!formData.newPostText?.trim()) return
    props.addPost(formData.newPostText)
    formProps.reset()
  }
  let postsData = props.postsData.map((post) => (
    <Post
      key={post.id}
      massege={post.massege}
      likeCount={post.likeCount}
    />
  ))


  return (
    <div className={classes.news}>
      <div className={classes.news_title}>
        <h3>News</h3>
      </div>
      <MyPostsFormReduxForm onSubmit={onSubmit} />
      <div className={classes.news_posts}>
        {postsData}
      </div>
    </div>
  )
}

export default MyPosts

