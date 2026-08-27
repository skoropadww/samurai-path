import React from 'react'
import classes from './Friends.module.css'

const Friends = (props) => {
  return (
    <div className={classes.friends}>
      <h3 className={classes.title}>Friends</h3>
      <div className={classes.list}>
        {props.friends.map((friend) => (
          <div key={friend.id} className={classes.item}>
            <img
              className={classes.avatar}
              src={friend.avatar}
              alt={friend.name}
            />
            <span className={classes.name}>{friend.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Friends
