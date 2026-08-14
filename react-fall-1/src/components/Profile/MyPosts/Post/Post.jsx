import React from 'react';
import cl from './Post.module.css';

const Post = () => {
  return (
    <div className={cl.item}>
        <p>Post 1</p>
        <div>
            <button>Like</button>
        </div>
    </div>
  );
};

export default Post;