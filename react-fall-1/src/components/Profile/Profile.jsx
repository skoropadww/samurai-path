import React from 'react'
import classes from './Profile.module.css'
import ProfileBanner from './ProfileBanner/ProfileBanner'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileBanner />
      <ProfileInfo />
      <MyPosts 
          postsData={props.state.postsData} 
          newPostText={props.state.newPostText} 
          dispatch={props.dispatch} 
      />
    </div>
  )
}

export default Profile
