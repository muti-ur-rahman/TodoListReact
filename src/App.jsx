import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  // const addTask = (task) => {
  //   setTasks([...tasks, task]);
  // };
  
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
  };
  
  return (
    <>
    
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} currentTask={currentTask} editTask={editTask} setCurrentTask={setCurrentTask} />
      <TodoList tasks={tasks} deleteTask={deleteTask} handleEdit={handleEdit} />
    </div>
    
    </>
  );
}

export default App;

