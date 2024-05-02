import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

/*
 * Redux Thunk, Redux eylem yaratıcılarına asenkron işlevsellik eklemek için kullanılan
bir middleware'dir. Bu nedenle, eylem yaratıcıları asenkron işlevler döndürebilir ve 
Redux Thunk, bu asenkron eylemleri işlemek için gerekli olan altyapıyı sağlar.
*/