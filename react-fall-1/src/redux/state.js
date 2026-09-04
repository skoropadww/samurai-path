const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
          postsData: [
            { id: 1, massege: 'Hello, world!', likeCount: 10 },
            { id: 2, massege: 'Hi, how are you?', likeCount: 20 },
            { id: 3, massege: 'I am fine, thank you!', likeCount: 30 },
          ],
          newPostText: 'samurai-path-react',
        },
        dialogsPage: {
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
          newMessageText: 'Hello',
        },
        sidebar: {
          friends: [
            { id: 1, name: 'Andrew', avatar: 'https://i.pravatar.cc/150?img=3' },
            { id: 2, name: 'Sasha', avatar: 'https://i.pravatar.cc/150?img=20' },
            { id: 3, name: 'Sveta', avatar: 'https://i.pravatar.cc/150?img=9' },
          ],
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe (callback) {
        this._callSubscriber = callback;  // заменяем функцию на callback
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 7,
                massege: this._state.profilePage.newPostText,
                likeCount: 17,
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if(action.type === SEND_MESSAGE){
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        }
        else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text
    }
}

export default store;
window.store = store;
