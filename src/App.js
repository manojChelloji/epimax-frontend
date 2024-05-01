import React, { useState } from 'react';
import TaskList from './components/TaskListItems';
import TaskAssign from './components/TaskAssignment';
import TaskStatus from './components/Status';
import TaskSummary from './components/Summary';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const taskAssign = (taskId, assign) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, assign };
      }
      return task;
    });
    setTasks(updatedTasks);
  };


  const updateTaskStatus = (taskId, status) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

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
