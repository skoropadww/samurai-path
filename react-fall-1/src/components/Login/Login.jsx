import React from 'react'
import styles from './Login.module.css'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import { Input } from '../common/FormsControls/FormControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { loginThunks, logoutThunks } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'

const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunks(formData.login, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to={'/profile'} replace />
  }
  return <div className={styles.login}>
    <div className={styles.login_card}>
      <h1 className={styles.login_title}>Login</h1>
      <LoginFormReduxForm onSubmit={onSubmit} />
    </div>
  </div>
}

const LoginForm = (props) => {
  const hasFieldErrors = (props.anyTouched || props.submitFailed) && props.invalid
  const formError = props.error || (hasFieldErrors && 'Please fill in all required fields correctly')

  return (
    <form className={styles.login_form} onSubmit={props.handleSubmit}>
      <Field name={'login'} component={Input} placeholder={`Login`} autoComplete={'username'} validate={[required]} />
      <Field name={'password'} component={Input} type={'password'} placeholder={`Password`} autoComplete={'current-password'} validate={[required]} />
      <Field name={'rememberMe'} component={Input} type={'checkbox'} label={'Remember me'} />
      {formError && (
        <div className={styles.login_error} role="alert">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="7" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="17" r="1.3" fill="currentColor" />
          </svg>
          {formError}
        </div>
      )}
      <button type={'submit'}>Login</button>
    </form>
  )
}

const LoginFormReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, { loginThunks, logoutThunks })(Login)



