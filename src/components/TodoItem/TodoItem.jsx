import React from 'react';
import { connect } from 'react-redux';
import { toggle_todo } from '../../store/actions/todoList';

const TodoItem = ({ todo, toggle_todo, id }) => {
	return (
		<div style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
			<span>{todo.text}</span>
			<button onClick={() => toggle_todo(id)}>complete</button>
			<button>delete</button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggle_todo: (id) => dispatch(toggle_todo(id)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
