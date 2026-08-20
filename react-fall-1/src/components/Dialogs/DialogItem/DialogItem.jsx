import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './DialogItem.module.css'

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? `${classes.item} ${classes.active}` : classes.item
      }
    >
      {props.name}
    </NavLink>
  )
}

export default DialogItem
