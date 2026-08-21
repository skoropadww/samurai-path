import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: 'Dimuchka' },
    { id: 2, name: 'Vilat' },
    { id: 3, name: 'Lida' },
    { id: 4, name: 'Vasia' },
    { id: 5, name: 'Pasha' },
  ]
  let messagesData = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: "I'm fine, thank you!" },
    { id: 4, message: 'What are you doing?' },
    { id: 5, message: 'I\'m doing nothing, you?' },
    { id: 6, message: 'I\'m doing nothing, you?' },
  ]
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog}>
        {dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)}
      </div>
      <div className={classes.messages}>
        {messagesData.map(message => <Message key={message.id} message={message.message} />)}
      </div>
    </div>
  )
}

export default Dialogs