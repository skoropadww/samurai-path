import { authAPI, profileAPI } from '../api/api'

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
        isAuth: true,
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

const setAuthUserData = (userId, login, email, photoUrl) => {
  return {
    type: SET_USER_DATA,
    payload: { userId, login, email, photoUrl },
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
          dispatch(setAuthUserData(id, login, email, null))

          profileAPI
            .getProfile(id)
            .then((profile) => {
              let photoUrl = profile.photos.small || profile.photos.large || null
              dispatch(setAuthUserData(id, login, email, photoUrl))
            })
            .catch(() => {})
        }
      })
      .catch(() => {
        dispatch(toggleIsFetching(false))
      })
  }
}
