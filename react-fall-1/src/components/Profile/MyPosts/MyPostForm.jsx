import React from 'react'
import classes from './MyPosts.module.css'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import { required, maxLengthCreator } from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsControls/FormControls'

let maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit} className={classes.news_form}>
        <Field name={'newPostText'} component={Textarea} placeholder="Write your post here..." validate={[required, maxLength10]} />
        <button type="submit">New post</button>
      </form>
    )
  }
  
  const MyPostsFormReduxForm = reduxForm({
    form: 'myPosts'
  })(MyPostsForm)

export default MyPostsFormReduxForm