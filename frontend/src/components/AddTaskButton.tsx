import { useState } from "react";
import { Button } from "react-bootstrap";
import AddNewTaskForm from "./AddTaskForm";

const AddTaskButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModalButton = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <div className="home-page-addTask-button">
        <Button variant="primary" onClick={handleShowModalButton}>
          Add Task
        </Button>
      </div>
      <div>{showModal && <AddNewTaskForm />}</div>
    </>
  );
};

export default AddTaskButton;
