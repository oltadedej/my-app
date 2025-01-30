// components/TaskList.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "./hooks";

const TaskList: React.FC = () => {
    const tasks = useAppSelector((state) => state.task.tasks);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ textDecoration: "none" }}>
                        {task.title}
                        {/* <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
