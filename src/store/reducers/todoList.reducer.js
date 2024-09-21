import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/todoList";

const initialState = [
	{
		text: "Сделать уроки",
		complete: false
	},
	{
		text: "Сделать домашку",
		complete: false
	}
];

export const todoList_reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.payload,
					complete: false
				}
			];

		case TOGGLE_TODO:
			return state.map((todo, id) => 
				id === action.payload ? { ...todo, complete: !todo.complete } : todo
			);

		default:
			return state;
	}
};
