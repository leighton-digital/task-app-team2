import React from "react";
const TaskList = ({ tasks, onEdit, onDelete }) => (
  <table className="tasks-table">
    <thead>
      <tr>
        <th>Task</th>
        <th>Description</th>
        <th>Due</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
        

        <tr key={task.id}>
          <td>{task.taskTitle}</td>
          <td>{task.description}</td>
          <td>{task.dateDue}</td>
          <td><span className={'status ' + (task.status === 'in progress' ? 'in-progress': task.status === 'in-progress' ? 'in-progress':  task.status === 'not complete' ? 'not-complete':'')}></span>{task.status}</td>
          <td>
            <button className="button" onClick={() => onEdit(task)}>
              Edit 📝
            </button>
            <button  className="button" onClick={() => onDelete(task.id)}>
              Delete ❌
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default TaskList;