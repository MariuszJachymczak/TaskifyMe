import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

type showTasksProps = {
  taskname: string;
  priority: string;
  description: string;
  deadline: string;
  _id: any;
};

function ShowListOfTasks() {
  useEffect(() => {
    fetchTasks();
  }, []);

  const [showTasks, setShowTasks] = useState<showTasksProps[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch("/tasks");
      const data = await response.json();
      setShowTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (taskId: string) => {
    try {
      const response = await fetch(`/tasks/${taskId}`, {
        method: "DELETE",
      });
      if(response.ok){
      const data = await response.json();
      console.log(data)
      fetchTasks()
      }else{
        throw new Error ("Error while deleting task")
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      {showTasks.map((task) => (
        <Card className="text-center" key={task._id}>
          <Card.Header>{task.taskname}</Card.Header>
          <Card.Body>
            <Card.Title>{task.description}</Card.Title>
            <Card.Text>{task.deadline}</Card.Text>
            <Button  variant="danger" onClick={()=>deleteTask(task._id)}>Delete Task</Button>
          </Card.Body>
          <Card.Footer>{task.priority}</Card.Footer>
          {/* <Card.Text>{task._id}</Card.Text> */}
        </Card>
      ))}
    </div>
  );
}

export default ShowListOfTasks;
