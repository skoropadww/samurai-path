import React from 'react'
import classes from './Profile.module.css'
import ProfileBanner from './ProfileBanner/ProfileBanner'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Preloader from '../common/Preloader/Preloader'

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={classes.content}>
      <ProfileBanner />
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
