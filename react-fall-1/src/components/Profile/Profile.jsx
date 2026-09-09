import React from 'react'
import classes from './Profile.module.css'
import ProfileBanner from './ProfileBanner/ProfileBanner'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  return (
    <div className={classes.content}>
      <ProfileBanner />
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  )
}

export default Profile
