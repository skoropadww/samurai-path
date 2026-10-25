import React, { useState } from 'react'
import classes from './FormControls.module.css'

const ErrorIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="7" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1.3" fill="currentColor" />
    </svg>
)

const SuccessIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <polyline
            className={classes.check}
            points="7,12.5 10.5,16 17,9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)

const EyeIcon = ({ crossed }) => (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path
            d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
        {crossed && (
            <line
                className={classes.eyeSlash}
                x1="4"
                y1="4"
                x2="20"
                y2="20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        )}
    </svg>
)

const getFieldState = (meta, hasValue) => {
    const hasError = meta.touched && meta.error
    const isValid = meta.touched && !meta.error && hasValue
    const stateClass = hasError ? classes.error : isValid ? classes.valid : ''
    return { hasError, isValid, stateClass }
}

const StatusIcon = ({ hasError, isValid, className = '' }) => {
    if (hasError) {
        return (
            <span className={`${classes.icon} ${classes.iconError} ${className}`}>
                <ErrorIcon />
            </span>
        )
    }
    if (isValid) {
        return (
            <span className={`${classes.icon} ${classes.iconSuccess} ${className}`}>
                <SuccessIcon />
            </span>
        )
    }
    return null
}

const ErrorMessage = ({ hasError, error }) =>
    hasError ? (
        <span className={classes.errorMessage} role="alert">
            <ErrorIcon />
            {error}
        </span>
    ) : null

export const Textarea = ({ input, meta, ...props }) => {
    const { hasError, isValid, stateClass } = getFieldState(meta, input.value)

    return (
        <div className={`${classes.formControl} ${stateClass}`}>
            <div className={classes.fieldWrapper}>
                <textarea
                    {...input}
                    {...props}
                    className={classes.textarea}
                    aria-invalid={Boolean(hasError)}
                />
                <StatusIcon hasError={hasError} isValid={isValid} />
            </div>
            <ErrorMessage hasError={hasError} error={meta.error} />
        </div>
    )
}

const Checkbox = ({ input, meta, label, ...props }) => {
    const { hasError, stateClass } = getFieldState(meta, input.checked)

    return (
        <div className={`${classes.formControl} ${stateClass}`}>
            <label className={classes.checkbox}>
                <input
                    {...input}
                    {...props}
                    type="checkbox"
                    className={classes.checkboxInput}
                    aria-invalid={Boolean(hasError)}
                />
                <span className={classes.checkboxBox} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14">
                        <polyline
                            className={classes.checkboxMark}
                            points="5,12.5 10,17 19,7"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                {label && <span className={classes.checkboxLabel}>{label}</span>}
            </label>
            <ErrorMessage hasError={hasError} error={meta.error} />
        </div>
    )
}

const PasswordInput = ({ input, meta, ...props }) => {
    const [isVisible, setIsVisible] = useState(false)
    const { hasError, isValid, stateClass } = getFieldState(meta, input.value)

    return (
        <div className={`${classes.formControl} ${stateClass}`}>
            <div className={classes.fieldWrapper}>
                <input
                    {...input}
                    {...props}
                    type={isVisible ? 'text' : 'password'}
                    className={`${classes.input} ${classes.passwordInput}`}
                    aria-invalid={Boolean(hasError)}
                />
                <StatusIcon hasError={hasError} isValid={isValid} className={classes.iconBeforeToggle} />
                <button
                    type="button"
                    className={classes.toggleVisibility}
                    onClick={() => setIsVisible((visible) => !visible)}
                    aria-label={isVisible ? 'Hide password' : 'Show password'}
                    aria-pressed={isVisible}
                >
                    <EyeIcon crossed={isVisible} />
                </button>
            </div>
            <ErrorMessage hasError={hasError} error={meta.error} />
        </div>
    )
}

export const Input = (props) => {
    if (props.type === 'checkbox') return <Checkbox {...props} />
    if (props.type === 'password') return <PasswordInput {...props} />

    const { input, meta, ...rest } = props
    const { hasError, isValid, stateClass } = getFieldState(meta, input.value)

    return (
        <div className={`${classes.formControl} ${stateClass}`}>
            <div className={classes.fieldWrapper}>
                <input {...input} {...rest} className={classes.input} aria-invalid={Boolean(hasError)} />
                <StatusIcon hasError={hasError} isValid={isValid} />
            </div>
            <ErrorMessage hasError={hasError} error={meta.error} />
        </div>
    )
}
