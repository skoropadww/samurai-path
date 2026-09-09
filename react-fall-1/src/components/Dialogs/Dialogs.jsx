import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
  let newMessageElement = React.createRef()

  let onAddMessage = (e) => {
    e.preventDefault()
    props.addMessage()
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value
    props.messageChange(text)
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

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog}>
        {dialogsData}
      </div>
      <div className={classes.messages}>
        {messagesData}
        <form className={classes.messages_form}>
          <textarea
            onChange={onMessageChange}
            value={props.dialogsPage.newMessageText}
            ref={newMessageElement}
            placeholder="Write your message here..."
          />
          <button onClick={onAddMessage} type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Dialogs
