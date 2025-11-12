import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [status, setStatus] = useState("Belum Selesai");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ task, priority, status });
      setTask("");
      setPriority("Normal");
      setStatus("Belum Selesai");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row className="g-2">
        <Col md={5}>
          <Form.Control
            type="text"
            placeholder="Nama tugas..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option>Normal</option>
            <option>Penting</option>
            <option>Mendesak</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Belum Selesai</option>
            <option>Proses</option>
            <option>Selesai</option>
          </Form.Select>
        </Col>
        <Col md={1}>
          <Button type="submit" variant="primary" className="w-100">
            +
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default TaskForm;
