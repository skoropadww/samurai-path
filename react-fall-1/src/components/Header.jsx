import React from 'react';
import logoSrc from '../logo.svg';

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="header_logo">
                <img src={logoSrc} alt="logo" />
            </div>
        </div>
    </header>
  );
};

export default Header;