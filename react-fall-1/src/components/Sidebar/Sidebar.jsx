import React from 'react';
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <nav className={classes.nav}>
        <ul>
          <li><a className={classes.active} href="/profile">Profile</a></li>
          <li><a href="/dialogs">Messages</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/music">Music</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
    </nav>
  );
};

export default Sidebar;