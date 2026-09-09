import React from 'react'
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'

const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage

  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      postsData={state.postsData}
      newPostText={state.newPostText}
    />
  )
}

export default MyPostsContainer
