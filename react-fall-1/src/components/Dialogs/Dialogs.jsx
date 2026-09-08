import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'

const Dialogs = (props) => {
  let newMessageElement = React.createRef()

  let addMessage = (e) => {
    e.preventDefault()
    props.dispatch(sendMessageActionCreator())
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value
    props.dispatch(updateNewMessageTextActionCreator(text))
  }

  let dialogsData = props.state.dialogsData.map((dialog) => (
    <DialogItem
      key={dialog.id}
      name={dialog.name}
      id={dialog.id}
      avatar={dialog.avatar}
    />
  ))

  let messagesData = props.state.messagesData.map((message) => (
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
            value={props.state.newMessageText}
            ref={newMessageElement}
            placeholder="Write your message here..."
          />
          <button onClick={addMessage} type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Dialogs
