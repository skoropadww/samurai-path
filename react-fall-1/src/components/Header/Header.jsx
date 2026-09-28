import React from 'react'
import logoSrc from './logo.svg'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={`container ${classes.header_inner}`}>
        <div className={classes.header_logo}>
          <img src={logoSrc} alt="logo" />
        </div>
        <div className={classes.login_block}>
          {props.isAuth ? (
            <NavLink
              className={classes.user_info}
              to={`/profile/${props.userId}`}
            >
              <img
                className={classes.user_avatar}
                src={
                  props.photoUrl ||
                  `https://i.pravatar.cc/150?u=${props.userId}`
                }
                alt={props.login}
              />
              <span className={classes.login_name}>{props.login}</span>
            </NavLink>
          ) : (
            <NavLink className={classes.login_btn} to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
