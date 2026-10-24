const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  dialogsData: [
    { id: 1, name: 'Dimuchka', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, name: 'Vilat', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: 3, name: 'Lida', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: 4, name: 'Vasia', avatar: 'https://i.pravatar.cc/150?img=33' },
    { id: 5, name: 'Pasha', avatar: 'https://i.pravatar.cc/150?img=68' },
  ],
  messagesData: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: "I'm fine, thank you!" },
    { id: 4, message: 'What are you doing?' },
    { id: 5, message: "I'm doing nothing, you?" },
    { id: 6, message: "I'm doing nothing, you?" },
  ],
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: Date.now(),
        message: action.newMessageText,
      }
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
      }
    }
    default:
      return state
  }
}

export const sendMessageActionCreator = (newMessageText) => {
  return {
    type: SEND_MESSAGE,
    newMessageText,
  }
}
