import React from 'react'
import classes from './ProfileStatus.module.css'
import { useState } from 'react'

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
  }

  activateEditMode = () => {
    this.setState({editMode: true})
  };

  deactivateEditMode()  {
    this.setState({editMode: false})
  }

  render() {
    return (
        <div className={classes.status}>
            {!this.state.editMode ? (
                <div className={classes.statusText}> 
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
            ) : (
                <div className={classes.statusInput}> 
                    <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status}/>
                </div>
            )}
        </div>
        )
    }
}

export default ProfileStatus;