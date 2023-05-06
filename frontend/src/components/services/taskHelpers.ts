export const fetchTasks = async () => {
  try {
    const response = await fetch("/tasks");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//
export type showTasksProps = {
  taskname: string;
  priority: string;
  description: string;
  deadline: string;
  _id: any;
};

export const deleteTask = async (
  taskId: string,
  setSelectedTaskId: React.Dispatch<React.SetStateAction<string>>,
  setShowConfirmModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const response = await fetch(`/tasks/${taskId}`, { method: "DELETE" });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setShowConfirmModal(false);
      setSelectedTaskId("");
    } else {
      throw new Error("Error while deleting task!");
    }
  } catch (error) {
    console.log(error);
  }
};
