import React from 'react'
import Dialogs from './Dialogs'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'

let mapStateToProps = (state)=>{
  return {
    dialogsPage: state.dialogsPage,
  }
};
let mapDispatchToProps = (dispatch)=>{
  return {
    addMessage: ()=>{
      dispatch(sendMessageActionCreator())
    },
    messageChange: (text)=>{
      dispatch(updateNewMessageTextActionCreator(text))
    }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer
