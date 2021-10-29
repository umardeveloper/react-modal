import React from 'react';
import './Todo.scss';

function Todo({ children, id, handleDelete }) {
	return (
		<li>
			<span>{children}</span>
			<button data-todo-id={id} onClick={handleDelete}>
				delete
			</button>
		</li>
	);
}

export default Todo;
