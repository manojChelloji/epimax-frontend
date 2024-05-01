import React, { useState } from 'react';
import './TaskListItems.css'

const TaskList = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      addTask({ id: Date.now(), name: taskName, assignee: null, status: 'pending' });
      setTaskName('');
    }
  };

  return (
    <div>
      <h2 className='task-list'>Task List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} 
        placeholder="Enter a task name" 
        className='task-name'
        required
        />
        <button className='button' type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskList;
