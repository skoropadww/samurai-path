import React from 'react'
import classes from './MyPosts.module.css'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'

const MyPostsForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit} className={classes.news_form}>
        <Field name={'newPostText'} component={'textarea'} placeholder="Write your post here..." />
        <button type="submit">New post</button>
      </form>
    )
  }
  
  const MyPostsFormReduxForm = reduxForm({
    form: 'myPosts'
  })(MyPostsForm)

export default MyPostsFormReduxForm