import React, { useState, useRef } from "react";
import TaskListContainer from "./components/TaskListContainer";
import { TaskForm } from "./components/Form";
import axios from "axios";
import "./App.css";
const App = () => {
  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const taskListRef = useRef(null);
  const handleEdit = (task) => {
    setEditingTask(task);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/tasks/${id}`);
      taskListRef.current.fetchTasks();
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };
  const handleUpdate = async (formData) => {
    try {
      await axios.put(
        `http://localhost:3001/tasks/${editingTask.id}`,
        formData
      );
      setEditingTask(null);
      taskListRef.current.fetchTasks();
    } catch (error) {
      console.error("Error updating task", error);
    }
  };
  const handleAddTask = async (formData) => {
    try {
      await axios.post("http://localhost:3001/tasks", formData);
      taskListRef.current.fetchTasks();
    } catch (error) {
      console.error("Error adding task", error);
    }
  };
  return (
    <div className="container">
      <h1>Task Management</h1>
      
      <TaskListContainer
        ref={taskListRef}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <button className="edit-button" onClick={()=>setShowForm(!showForm)}>Add Task ✅</button>
      {showForm && <div className="add-form">
        <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>
        <TaskForm
          onSubmit={editingTask ? handleUpdate : handleAddTask}
          initialFormData={
            editingTask || {
              taskTitle: "",
              description: "",
              dateDue: "",
              status: "to do", // Default value for new tasks
            }
          }
          isEditing={!!editingTask}
          setEditingTask={setEditingTask}
        />
      </div>}
    </div>
  );
};
export default App;