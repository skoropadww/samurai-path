import React from 'react'
import Dialogs from './Dialogs'
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'


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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer
