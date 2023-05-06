import { useState, useEffect } from "react";
import { Button, Modal, Card } from "react-bootstrap";
import { showTasksProps, deleteTask, fetchTasks } from "./services/taskHelpers";

function ShowListOfTasks() {
  const [showTasks, setShowTasks] = useState<showTasksProps[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [selectedTaskId, setSelectedTaskId] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const tasks = await fetchTasks();
      setShowTasks(tasks);
    };
    fetchData();
  }, [showTasks, showConfirmModal]);

  const handleDeleteConfirmation = (taskId: string) => {
    setShowConfirmModal(true);
    setSelectedTaskId(taskId);
  };

  return (
    <div>
      {showTasks.map((task) => (
        <Card className="text-center" key={task._id}>
          <Card.Header>{task.taskname}</Card.Header>
          <Card.Body>
            <Card.Title>{task.description}</Card.Title>
            <Card.Text>{task.deadline}</Card.Text>
            <Button
              variant="danger"
              onClick={() => handleDeleteConfirmation(task._id)}
            >
              Delete Task
            </Button>
          </Card.Body>
          <Card.Footer>{task.priority}</Card.Footer>
        </Card>
      ))}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Task Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowConfirmModal(false)}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() =>
              deleteTask(selectedTaskId, setSelectedTaskId, setShowConfirmModal)
            }
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShowListOfTasks;
