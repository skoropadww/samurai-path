const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
  postsData: [
    { id: 1, massege: 'Hello, world!', likeCount: 10 },
    { id: 2, massege: 'Hi, how are you?', likeCount: 20 },
    { id: 3, massege: 'I am fine, thank you!', likeCount: 30 },
  ],
  newPostText: 'samurai-path-react',
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 7,
        massege: state.newPostText,
        likeCount: 17,
      }
      return {
        ...state,
        newPostText: '',
        postsData: [...state.postsData, newPost],
      }
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      }
    default:
      return state
  }
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
}
