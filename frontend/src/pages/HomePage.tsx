import { useState } from "react";
import AddNewTaskForm from "../components/AddTaskForm";
import Header from "../components/Header";
import { Button } from "react-bootstrap";
import "../styles/style.css";
import TasksList from "../components/ShowListOfTasks";

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModalButton = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      <div className="home-page-addTask-button">
        <Button variant="primary" onClick={handleShowModalButton}>
          Add Task
        </Button>
      </div>
      <div>{showModal && <AddNewTaskForm />}</div>
    </>
  );
}

export default HomePage;
