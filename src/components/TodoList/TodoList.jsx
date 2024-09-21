import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add_todo, toggle_todo } from '../../store/actions/todoList';

const TodoList = ({ todos, add_todo }) => {
	const [inputValue, setInputValue] = useState('');

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button
				onClick={() => {
					add_todo(inputValue);
					setInputValue(''); // Очистка поля после добавления задачи
				}}
			>
				Add
			</button>
			<ul>
				{todos.map((todo, id) => (
					<TodoItem todo={todo} key={todo.id} id={id} />
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => ({
	todos: state.todoList,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			add_todo,
			toggle_todo,
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
