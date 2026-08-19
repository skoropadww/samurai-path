import React from 'react'
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog}>
        <div className={`${classes.item} ${classes.active}`}>
          <NavLink to="/dialogs/1">Dimuchka</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs/2">Vilat</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs/3">Lida</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs/4">Vasia</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/dialogs/5">Pasha</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>
          Hello
        </div>
        <div className={classes.message}>
          How are you?
        </div>
        <div className={classes.message}>
          I'm fine, thank you!
        </div>
        <div className={classes.message}>
          What are you doing?
        </div>
          <div className={classes.message}>
          I'm doing nothing, you?
        </div>
        <div className={classes.message}>
          I'm doing nothing, you?
        </div>
        <div className={classes.message}>
          I'm doing nothing, you?
        </div>
      </div>
    </div>
  )
}

export default Dialogs