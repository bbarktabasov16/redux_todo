import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { todoList_reducer } from "./todoList.reducer";

export default combineReducers({
	counter: counterReducer,
	todoList: todoList_reducer
})