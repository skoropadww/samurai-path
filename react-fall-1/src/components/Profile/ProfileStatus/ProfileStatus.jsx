import React from 'react'
import classes from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({editMode: true})
  };

  deactivateEditMode()  {
    this.setState({editMode: false})
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({status: e.target.value})
  }

  render() {
    return (
        <div className={classes.status}>
            {!this.state.editMode ? (
                <div className={classes.statusText}> 
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No status'}</span>
                </div>
            ) : (
                <div className={classes.statusInput}> 
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.state.status}/>
                </div>
            )}
        </div>
        )
    }
}

export default ProfileStatus;