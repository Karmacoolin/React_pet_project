import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import  thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware ));

export default store;
window.store = store;