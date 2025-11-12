import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // CREATE
  const addTask = (taskData) => {
    setTasks([...tasks, { id: Date.now(), ...taskData }]);
  };

  // DELETE
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // UPDATE
  const editTask = (id, updatedData) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updatedData } : task)));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-lg p-4 w-100" style={{ maxWidth: "700px", borderRadius: "20px" }}>
        <h2 className="text-center mb-4 fw-bold text-primary">📝 TodoList</h2>
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
        <p className="text-center text-muted mt-3 mb-0" style={{ fontSize: "0.85rem" }}>
          Dibuat dengan 💙 React + Bootstrap
        </p>
      </Card>
    </Container>
  );
}

export default App;
