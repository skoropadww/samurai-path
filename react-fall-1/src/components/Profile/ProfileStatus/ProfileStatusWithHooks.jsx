import React, { useState } from 'react'
import classes from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value)
  }

  return (
      <div className={classes.status}>
          {!editMode ? (
              <div className={classes.statusText}> 
                  <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
              </div>
          ) : (
              <div className={classes.statusInput}> 
                  <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} type="text" value={status}/>
              </div>
          )}
      </div>
      )
  
}

export default ProfileStatusWithHooks;