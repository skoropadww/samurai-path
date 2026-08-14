import React from 'react';
import topImg from './top-img.webp';
import classes from './ProfileBanner.module.css';

const ProfileBanner = () => {
  return (
    <div className={classes.banner}>
      <img src={topImg} alt="Profile banner" />
    </div>
  );
};

export default ProfileBanner;
