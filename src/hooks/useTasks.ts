import { taskStore as store } from "@/store/task";

import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from "../store/task/actions";

export const useTasks = () => {
  store.useState((s) => ({
    ...s,
    getTasks,
    addTask,
    updateTask,
    deleteTask,
  }));
};
