import React from 'react';
import topImg from '../top-img.webp'
import midImg from '../avatar.webp'

const Profile = () => {
  return (
    <div className="content">
        <div className="content_top">
        <img src={topImg} alt="top" />
        </div>
        <div className="content_mid">
        <div className="content_mid-img">
            <img src={midImg} alt="mid" />
        </div>
        <div className="content_mid-text">
            <div className="content_mid-name">
            <h3>Vilat Fastfall</h3>
            </div>
            <div className="content_mid-text-content">
            <ul>
                <li>City: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                <li>Age: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                <li>Education: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
                <li>Occupation: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
            </ul>
            </div>
        </div>
        </div>
        <div className="content_bot">
        <div className="content_bot-news">
            <h3>News</h3>
        </div>
        <div className="content_bot-posts">
            <div className="content_bot-item">Post 1</div>
            <div className="content_bot-item">Post 2</div>
            <div className="content_bot-item">Post 3</div>
        </div>
        </div>
    </div>
  );
};

export default Profile;