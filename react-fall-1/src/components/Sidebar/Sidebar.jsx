import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={classes.nav}>
        <ul>
          <li><a className={classes.active} href="#">Profile</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
    </nav>
  );
};

export default Sidebar;