import React from 'react';
import classes from './Profile.module.css';
import ProfileBanner from './ProfileBanner/ProfileBanner';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={classes.content}>
      <ProfileBanner />
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
