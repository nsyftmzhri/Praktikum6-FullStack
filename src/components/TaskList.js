import React, { useState } from "react";
import { ListGroup, Button, Form, Row, Col, Badge } from "react-bootstrap";

function TaskList({ tasks, deleteTask, editTask }) {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ task: "", priority: "", status: "" });

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditData({ task: task.task, priority: task.priority, status: task.status });
  };

  const handleSave = (id) => {
    editTask(id, editData);
    setEditId(null);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Mendesak":
        return "danger";
      case "Penting":
        return "warning";
      default:
        return "secondary";
    }
  };

  return (
    <ListGroup variant="flush">
      {tasks.length === 0 ? (
        <p className="text-center text-muted">Belum ada tugas. Tambahkan di atas 👆</p>
      ) : (
        tasks.map((t) => (
          <ListGroup.Item key={t.id} className="shadow-sm mb-2 rounded">
            {editId === t.id ? (
              <Row className="g-2 align-items-center">
                <Col md={5}>
                  <Form.Control
                    type="text"
                    value={editData.task}
                    onChange={(e) => setEditData({ ...editData, task: e.target.value })}
                  />
                </Col>
                <Col md={3}>
                  <Form.Select
                    value={editData.priority}
                    onChange={(e) => setEditData({ ...editData, priority: e.target.value })}
                  >
                    <option>Normal</option>
                    <option>Penting</option>
                    <option>Mendesak</option>
                  </Form.Select>
                </Col>
                <Col md={3}>
                  <Form.Select
                    value={editData.status}
                    onChange={(e) => setEditData({ ...editData, status: e.target.value })}
                  >
                    <option>Belum Selesai</option>
                    <option>Proses</option>
                    <option>Selesai</option>
                  </Form.Select>
                </Col>
                <Col md={1}>
                  <Button variant="success" size="sm" onClick={() => handleSave(t.id)}>
                    ✔
                  </Button>
                </Col>
              </Row>
            ) : (
              <Row className="align-items-center">
                <Col md={5}>
                  <strong>{t.task}</strong>
                </Col>
                <Col md={3}>
                  <Badge bg={getPriorityColor(t.priority)}>{t.priority}</Badge>
                </Col>
                <Col md={3}>
                  <span
                    className={
                      t.status === "Selesai"
                        ? "text-success fw-semibold"
                        : t.status === "Proses"
                        ? "text-warning fw-semibold"
                        : "text-muted fw-semibold"
                    }
                  >
                    {t.status}
                  </span>
                </Col>
                <Col md={1} className="d-flex gap-1">
                  <Button
                    size="sm"
                    variant="outline-warning"
                    onClick={() => handleEdit(t)}
                  >
                    ✏️
                  </Button>
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => deleteTask(t.id)}
                  >
                    🗑️
                  </Button>
                </Col>
              </Row>
            )}
          </ListGroup.Item>
        ))
      )}
    </ListGroup>
  );
}

export default TaskList;
