import React, { useState } from 'react';
import './TaskAssignment.css'; // Import your CSS file here

const TaskAssignment = ({ tasks, taskAssign }) => {
    const [selectedTaskId, setSelectedTaskId] = useState('');
    const [assign, setAssignee] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedTaskId && assign.trim() !== '') {
            taskAssign(selectedTaskId, assign);
            setSelectedTaskId('');
            setAssignee('');
        }
    };

    return (
        <div>
            <h2 className='task-assign-head'>Task Assignment</h2>
            <div className='task-assign'>
                <form onSubmit={handleSubmit}>
                    <select
                        value={selectedTaskId}
                        onChange={(e) => setSelectedTaskId(e.target.value)}
                        className='select'
                    >
                        <option value="">Select Task</option>
                        {tasks.map(task => (
                            <option key={task.id} value={task.id}>{task.name}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        value={assign}
                        onChange={(e) => setAssignee(e.target.value)}
                        className='assign-input'
                        placeholder="Assign"
                    />
                    <button type="submit" className='assign-button'>Assign Task</button>
                </form>
            </div>
        </div>
    );
};

export default TaskAssignment;
