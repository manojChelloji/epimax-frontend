import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskAssign from './components/TaskAssign';
import TaskStatus from './components/TaskStatus';
import TaskSummary from './components/TaskSummary';
import './App.css';

function App() {
  // i used useState for managing tasks
  const [tasks, setTasks] = useState([]);

  // created a Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // created Function to assign a task to a user or team
  const taskAssign = (taskId, assign) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, assign };
      }
      return task;
    });
    setTasks(updatedTasks);
  };



  // Function to update task status
  const updateTaskStatus = (taskId, status) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
   // Function to delete a task
   const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1 className='task-manager'>Task Manager</h1>
      <TaskList addTask={addTask} />
      <TaskAssign tasks={tasks} taskAssign={taskAssign} />
      <TaskStatus tasks={tasks} updateTaskStatus={updateTaskStatus} deleteTask={handleDeleteTask}/>
      <TaskSummary tasks={tasks} />
    </div>
  );
}

export default App;
