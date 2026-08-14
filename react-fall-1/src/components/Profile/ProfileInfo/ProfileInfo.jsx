import React from 'react';
import avatarImg from './avatar.webp';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={classes.info}>
      <div className={classes.avatar}>
        <img src={avatarImg} alt="Avatar" />
      </div>
      <div className={classes.description}>
        <div className={classes.name}>
          <h3>Vilat Fastfall</h3>
        </div>
        <div className={classes.details}>
          <ul>
            <li>City: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Age: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Education: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            <li>Occupation: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
