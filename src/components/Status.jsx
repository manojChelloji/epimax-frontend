import React from 'react';
import './Status.css'; // Import your CSS file here

const TaskStatusUpdates = ({ tasks, updateTaskStatus, deleteTask }) => {
  const handleStatusUpdate = (taskId, status) => {
    updateTaskStatus(taskId, status);
  };

  const handleDeleteTask = (taskId, status) => {
    deleteTask(taskId, status);
  };

  return (
    <div className='task-submit'>
      <h2 className='status-head'>Task Status Updates</h2>
      <ul className='task-list'>
        {tasks.map((task, index) => (
          <React.Fragment key={task.id}>
            {/* Add line break if it's not the first task */}
            {index !== 0 && <br />}
            <li className='task'>
              <span>{task.name} - {task.status}</span>
              <div>
                <button onClick={() => handleStatusUpdate(task.id, 'started')} className='start'>Start</button>
                <button onClick={() => handleStatusUpdate(task.id, 'completed')} className='complete'>Complete</button>
                <button onClick={() => handleDeleteTask(task.id, 'deleted')} className='delete'>Delete</button>
              </div>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default TaskStatusUpdates;
