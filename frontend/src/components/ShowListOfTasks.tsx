import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import { ObjectId } from "../../../backend/node_modules/mongodb";

type showTasksProps = {
  taskname: string;
  priority: string;
  description: string;
  deadline: string;
  _id: any;
};

type addTaskProps = {
  task: showTasksProps;
  addTask: (property: { _id: any }) => void;
};

function ShowListOfTasks({ task, addTask }: addTaskProps) {
  const guestName = "Mariusz";

  const handleAddTask = async () => {
    await addTask(task);
  };

  return (
    <Card className="text-center">
      <Card.Header>{task.taskname}</Card.Header>
      <Card.Body>
        <Card.Title>{task.description}</Card.Title>
        <Card.Text>{task.deadline}</Card.Text>
        <Button variant="primary" onClick={handleAddTask}>
          Dodaj zadanie
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">{task.priority}</Card.Footer>
      <Card.Text>{task._id}</Card.Text>
    </Card>
  );
}

export default ShowListOfTasks;
