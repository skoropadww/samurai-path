import React from 'react'
import Dialogs from './Dialogs'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage

  let addMessage = () => {
    props.store.dispatch(sendMessageActionCreator())
  }

  let messageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text))
  }

  return (
    <Dialogs
      messageChange={messageChange}
      addMessage={addMessage}
      dialogsPage={state}
    />
  )
}

export default DialogsContainer
