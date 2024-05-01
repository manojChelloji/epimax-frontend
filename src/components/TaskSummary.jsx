// TaskSummaryPage.js
import './TaskSummary.css'
import React from 'react';

const TaskSummaryPage = ({ tasks }) => {
  const pendingTasks = tasks.filter(task => task.status === 'pending');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  return (
    <div>
      <h2 className='summary-head'>Task Summary Page</h2>
      <div>
        <h3 className='h3'>Pending Tasks: {pendingTasks.length}</h3>
        <ul>
          {pendingTasks.map(task => (
            <li  className='task-item' key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className='h3'>Completed Tasks: {completedTasks.length}</h3>
        <ul>
          {completedTasks.map(task => (
            <li className='task-item' key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskSummaryPage;
