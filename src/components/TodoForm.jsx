import React, { useState, useEffect } from 'react';

const TodoForm = ({ addTask, currentTask, editTask, setCurrentTask }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (currentTask) {
      setInputValue(currentTask.text);
    } else {
      setInputValue('');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentTask) {
      editTask(currentTask.id, { ...currentTask, text: inputValue });
      setCurrentTask(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: inputValue,
      };
      addTask(newTask);
    }

    setInputValue('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit">{currentTask ? 'Edit Task' : 'Add Task'}</button>
    </form>
  );
};

export default TodoForm;
