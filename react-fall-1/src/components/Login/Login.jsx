import React from 'react'
import styles from './Login.module.css'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return <div className={styles.login}>
    <h1>Login</h1>
    <LoginFormReduxForm onSubmit={onSubmit} />
    </div>
}

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field name={'login'} component={'input'} placeholder={`Login`} /></div>
      <div><Field name={'password'} component={'input'} placeholder={`Password`} /></div>
      <div><Field name={'rememberMe'} component={'input'} type={'checkbox'} /> Remember me</div>
      <div><button type={'submit'}>Login</button></div>
    </form>
  )
}

const LoginFormReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export default Login