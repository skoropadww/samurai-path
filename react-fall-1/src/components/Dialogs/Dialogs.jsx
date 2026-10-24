import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Navigate } from 'react-router-dom'
import DialogsFormReduxForm from './DialogsForm'

const Dialogs = (props) => {
  const addMessage = (formData, dispatch, formProps) => {
    if (!formData.message?.trim()) return
    props.addMessage(formData.message)
    formProps.reset()
  }

  let dialogsData = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem
      key={dialog.id}
      name={dialog.name}
      id={dialog.id}
      avatar={dialog.avatar}
    />
  ))

  let messagesData = props.dialogsPage.messagesData.map((message) => (
    <Message key={message.id} message={message.message} />
  ))

  if (!props.isAuth) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog}>
        {dialogsData}
      </div>
      <div className={classes.messages}>
        {messagesData}
        <DialogsFormReduxForm onSubmit={addMessage} />
      </div>
    </div>
  )
}

export default Dialogs


