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

export const setAuthUserData = (userId, login, email, photoUrl) => {
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
