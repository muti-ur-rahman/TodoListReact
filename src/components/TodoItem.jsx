import React from 'react';

const TodoItem = ({ task, deleteTask, handleEdit }) => {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <div>
        <button onClick={() => handleEdit(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
