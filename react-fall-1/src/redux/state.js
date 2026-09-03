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
        if(action.type === "ADD-POST"){
            let newPost = {
                id: 7,
                massege: this._state.profilePage.newPostText,
                likeCount: 17,
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.postMessage;
            this._callSubscriber(this._state);
        }

    }

}

export default store;
window.store = store;
