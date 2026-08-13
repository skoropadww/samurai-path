import React from 'react';
import topImg from './top-img.webp'
import midImg from './avatar.webp'
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
        <div className={classes.content_top}>
        <img src={topImg} alt="top" />
        </div>
        <div className={classes.content_mid}>
        <div className={classes.content_mid_img}>
            <img src={midImg} alt="mid" />
        </div>
        <div className={classes.content_mid_text}>
            <div className={classes.content_mid_name}>
            <h3>Vilat Fastfall</h3>
            </div>
            <div className={classes.content_mid_text_content}>
            <ul>
                <li>City: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                <li>Age: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                <li>Education: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                <li>Occupation: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            </ul>
            </div>
        </div>
        </div>
        <div className={classes.content_bot}>
        <div className={classes.content_bot_news}>
            <h3>News</h3>
        </div>
        <div className={classes.content_bot_posts}>
            <div className={classes.item}>Post 1</div>
            <div className={classes.item}>Post 2</div>
            <div className={classes.item}>Post 3</div>
        </div>
        </div>
    </div>
  );
};

export default Profile;