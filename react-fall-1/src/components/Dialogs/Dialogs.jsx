import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
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
  let newMessageElement = React.createRef();
  let addMessage = (e) => {
    e.preventDefault();
    let text = newMessageElement.current.value;
    alert(text);
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog}>
        {dialogsData}
      </div>
      <div className={classes.messages}>
        {messagesData}
        <form className={classes.messages_form}>
          <textarea ref={newMessageElement} placeholder="Write your message here..." />
          <button onClick={addMessage} type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Dialogs
