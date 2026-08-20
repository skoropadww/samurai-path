import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: 'Dimuchka' },
    { id: 2, name: 'Vilat' },
    { id: 3, name: 'Lida' },
    { id: 4, name: 'Vasia' },
    { id: 5, name: 'Pasha' },
  ]
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog}>
        {dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)}
      </div>
      <div className={classes.messages}>
        <Message message="Hello" />
        <Message message="How are you?" />
        <Message message="I'm fine, thank you!" />
        <Message message="What are you doing?" />
        <Message message="I'm doing nothing, you?" />
        <Message message="I'm doing nothing, you?" />
        <Message message="I'm doing nothing, you?" />
      </div>
    </div>
  )
}

export default Dialogs