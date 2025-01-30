// features/task/taskSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task", //sherben si prefix per slicet se mund te kemi userTasks, adminTasks
  initialState, 
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: state.tasks.length + 1,
        title: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    // toggleTask: (state, action: PayloadAction<number>) => {
    //   const task = state.tasks.find((t) => t.id === action.payload);
    //   if (task) {
    //     task.completed = !task.completed;
    //   }
    // },
    // deleteTask: (state, action: PayloadAction<number>) => {
    //   state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    // },
  },
});

export const { addTask,  // toggleTask, deleteTask 
} = taskSlice.actions;
export default taskSlice.reducer;
