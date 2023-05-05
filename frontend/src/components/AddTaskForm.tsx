import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function AddNewTaskForm() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [calendarDate, setCalendarDate] = useState("");

  const handleTaskName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleTaskDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTaskDescription(event.target.value);
  };

  const handleTaskPriorityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPriority(event.target.value);
  };

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCalendarDate(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setTaskDescription("");
    // setTaskName("");
    // setTaskName("");

    try {
      const response = await fetch(`/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          deadline: calendarDate,
          description: taskDescription,
          priority: priority,
          taskname: taskName,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setTaskName("");
      } else {
        throw new Error("Error creating new task");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <h1>Add Task</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTaskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task name"
              value={taskName}
              onChange={handleTaskName}
            />
          </Form.Group>
          <Form.Group controlId="formTaskDescription">
            <Form.Label>Task Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter task description"
              value={taskDescription}
              onChange={handleTaskDescriptionChange}
            />
          </Form.Group>
          <Form.Group controlId="formTaskPriority">
            <Form.Label>Task Priority</Form.Label>
            <Form.Control
              as="select"
              value={priority}
              onChange={handleTaskPriorityChange}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formTaskDeadline">
            <Form.Label>Task Deadline</Form.Label>
            <Form.Control
              type="date"
              value={calendarDate}
              onChange={handleChangeDate}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AddNewTaskForm;
