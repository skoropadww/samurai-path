let initialState = {
    friends: [
        { id: 1, name: 'Andrew', avatar: 'https://i.pravatar.cc/150?img=3' },
        { id: 2, name: 'Sasha', avatar: 'https://i.pravatar.cc/150?img=20' },
        { id: 3, name: 'Sveta', avatar: 'https://i.pravatar.cc/150?img=9' },
      ],
}

export const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
    
    return state;
}