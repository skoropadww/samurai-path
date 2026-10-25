import React from 'react'
import styles from './Login.module.css'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import { Input } from '../common/FormsControls/FormControls'
import { required } from '../../utils/validators/validators'

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return <div className={styles.login}>
    <div className={styles.login_card}>
      <h1 className={styles.login_title}>Login</h1>
      <LoginFormReduxForm onSubmit={onSubmit} />
    </div>
  </div>
}

const LoginForm = (props) => {
  return (
    <form className={styles.login_form} onSubmit={props.handleSubmit}>
      <Field name={'login'} component={Input} placeholder={`Login`} validate={[required]} />
      <Field name={'password'} component={Input} type={'password'} placeholder={`Password`} validate={[required]} />
      <Field name={'rememberMe'} component={Input} type={'checkbox'} label={'Remember me'} validate={[required]} />
      <button type={'submit'}>Login</button>
    </form>
  )
}

const LoginFormReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export default Login
