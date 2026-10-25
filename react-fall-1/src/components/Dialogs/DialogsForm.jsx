import React from 'react'
import classes from './Dialogs.module.css'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import { Textarea } from '../common/FormsControls/FormControls'
import { required, maxLengthCreator } from '../../utils/validators/validators'

let maxLength100 = maxLengthCreator(100);

const DialogsForm = (props) => {

    return (
      <form className={classes.messages_form} onSubmit={props.handleSubmit}>
            <Field name={'message'} component={Textarea} 
              placeholder="Write your message here..."
              validate={[required, maxLength100]}
            />
            <button type="submit">Send</button>
          </form>
    )
  }
  
  const DialogsFormReduxForm = reduxForm({
    form: 'dialogs'
  })(DialogsForm)

export default DialogsFormReduxForm