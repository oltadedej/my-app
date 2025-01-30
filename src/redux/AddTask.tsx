// components/AddTask.tsx
import React, { useState } from "react";
import { useAppDispatch } from "./hooks";
import { addTask } from "./taskSlice";

const AddTask: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleAddTask = () => {
    if (taskTitle.trim() !== "") {
      dispatch(addTask(taskTitle));  //behet trigger slice i task
      setTaskTitle("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
