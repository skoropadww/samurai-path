import { authAPI, profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const SET_USER_DATA = 'SET-USER-DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
  userId: null,
  login: null,
  email: null,
  photoUrl: null,
  isAuth: false,
  isFetching: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    default:
      return state
  }
}

const setAuthUserData = (userId, login, email, photoUrl, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, login, email, photoUrl, isAuth },
  }
}

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  }
}

export const getAuthUserDataThunks = () => {
  return (dispatch) => {
    authAPI
      .me()
      .then((data) => {
        dispatch(toggleIsFetching(false))
        if (data.resultCode === 0) {
          let { id, login, email } = data.data
          dispatch(setAuthUserData(id, login, email, null, true))

          profileAPI
            .getProfile(id)
            .then((profile) => {
              let photoUrl = profile.photos.small || profile.photos.large || null
              dispatch(setAuthUserData(id, login, email, photoUrl, true))
            })
            .catch(() => {})
        }
      })
      .catch(() => {
        dispatch(toggleIsFetching(false))
      })
  }
}

export const loginThunks = (email, password, rememberMe ) => {
  return (dispatch) => {
    authAPI
      .login(email, password, rememberMe)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(getAuthUserDataThunks())
        } else {
          let messages = data.messages.length > 0 ? data.messages.join(', ') : 'Some error'
          dispatch(stopSubmit('login', {_error: messages}))
        }
      })
  }
}


export const logoutThunks = () => {
  return (dispatch) => {
    authAPI
      .logout()
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, null, false))
        }
      })
  }
}
