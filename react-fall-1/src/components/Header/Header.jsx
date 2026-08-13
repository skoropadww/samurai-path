import React from 'react';
import logoSrc from './logo.svg'; // svg image
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
        <div className="container">
            <div className={classes.header_logo}>
                <img src={logoSrc} alt="logo" />
            </div>
        </div>
    </header>
  );
};

export default Header;