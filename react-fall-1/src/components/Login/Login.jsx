import React from 'react'
import styles from './Login.module.css'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'

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
      <Field name={'login'} component={'input'} placeholder={`Login`} />
      <Field name={'password'} component={'input'} type={'password'} placeholder={`Password`} />
      <label className={styles.login_remember}>
        <Field name={'rememberMe'} component={'input'} type={'checkbox'} /> Remember me
      </label>
      <button type={'submit'}>Login</button>
    </form>
  )
}

const LoginFormReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export default Login
