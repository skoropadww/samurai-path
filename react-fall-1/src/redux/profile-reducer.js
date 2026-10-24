import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
let initialState = {
  postsData: [
    { id: 1, massege: 'Hello, world!', likeCount: 10 },
    { id: 2, massege: 'Hi, how are you?', likeCount: 20 },
    { id: 3, massege: 'I am fine, thank you!', likeCount: 30 },
  ],
  profile: null,
  status: '',
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: Date.now(),
        massege: action.newPostText,
        likeCount: 0,
      }
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      }
    }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      }
    default:
      return state
  }
}

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  }
}

const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  }
}

const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  }
}

export const getUserProfileThunks = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId)
      .then((data) => {
        dispatch(setUserProfile(data))
      })
      .catch((error) => {
        console.error('Не удалось загрузить профиль:', error)
      })
  }
}

export const getStatusThunks = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then((data) => {
        dispatch(setStatus(data))
      })
      .catch((error) => {
        console.error('Не удалось загрузить статус:', error)
      })
  }
}

export const updateStatusThunks = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setStatus(status))
        }
      })
      .catch((error) => {
        console.error('Не удалось обновить статус:', error)
      })
  }
}
