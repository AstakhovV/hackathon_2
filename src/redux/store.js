import {createStore} from "redux";
import usersReducer from "./reducer/users-reducer";

const store = createStore(usersReducer)

window.store = store

export default store