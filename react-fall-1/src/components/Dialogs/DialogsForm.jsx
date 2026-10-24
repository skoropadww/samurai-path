import React from 'react'
import classes from './Dialogs.module.css'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'

const DialogsForm = (props) => {
    return (
      <form className={classes.messages_form} onSubmit={props.handleSubmit}>
            <Field name={'message'} component={'textarea'} 
              placeholder="Write your message here..."
            />
            <button type="submit">Send</button>
          </form>
    )
  }
  
  const DialogsFormReduxForm = reduxForm({
    form: 'dialogs'
  })(DialogsForm)

export default DialogsFormReduxForm