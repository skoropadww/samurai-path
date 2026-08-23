import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog}>
        {props.dialogsData.map((dialog) => (
          <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
        ))}
      </div>
      <div className={classes.messages}>
        {props.messagesData.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
      </div>
    </div>
  )
}

export default Dialogs
