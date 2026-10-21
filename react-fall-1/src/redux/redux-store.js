import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk as thunkMiddleware } from "redux-thunk";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import {reducer as formReducer} from 'redux-form';

let reducersBatch = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

window.store = store;   
export default store;