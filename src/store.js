import {  combineReducers,applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { UserReducer } from "./reducers/UserReducer";
import { PostsReducer } from "./reducers/PostsReducer";

const reducer = combineReducers({
    UserList:UserReducer,
    PostsList:PostsReducer
});

const initialState = {}

const middleware = [thunk ]

export const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)

); 