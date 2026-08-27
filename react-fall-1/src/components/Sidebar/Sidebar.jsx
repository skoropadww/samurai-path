import React from 'react'
import classes from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends'

const Sidebar = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : '')}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : '')}
            to="/dialogs"
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : '')}
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : '')}
            to="/music"
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : '')}
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
      <Friends friends={props.state.friends} />
    </nav>
  )
}

export default Sidebar
