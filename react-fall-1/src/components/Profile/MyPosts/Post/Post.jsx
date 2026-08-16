import React from 'react';
import cl from './Post.module.css';

const Post = (props) => {
  return (
    <div className={cl.item}>
        <p className={cl.message}>{props.massege}</p>
        <div className={cl.likes}>
            <span className={cl.likes_count}>Likes {props.likeCount}</span>
        </div>
    </div>
  );
};

export default Post;
