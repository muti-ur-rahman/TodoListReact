import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, deleteTask, handleEdit }) => {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} deleteTask={deleteTask} handleEdit={handleEdit} />
      ))}
    </ul>
  );
};

export default TodoList;
