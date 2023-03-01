/* eslint-disable no-param-reassign */

import { IItem } from "@/@types/item";

import { taskStore as store } from "./index";

export const getTasks = async () => {
  store.update((s) => {
    s.isLoading = true;
  });

  const request = localStorage.getItem("list");
  const response: IItem[] = request ? JSON.parse(request) : [];

  store.update((s) => {
    s.isLoading = false;
    s.tasks = response;
  });
  return response;
};

export const addTask = async (text: string) => {
  store.update((s) => {
    s.isLoading = true;
  });

  const request = localStorage.getItem("list");
  const response = request ? JSON.parse(request) : [];

  const task = {
    text,
    status: false,
    id: response.length + 1,
  };

  response.push(task);

  localStorage.setItem("list", JSON.stringify(response));

  store.update((s) => {
    s.isLoading = false;
    s.tasks = response;
  });
};

export const updateTask = async (id: number, status: boolean) => {
  store.update((s) => {
    s.isLoading = true;
  });

  const request = localStorage.getItem("list");
  const response = request ? JSON.parse(request) : [];

  const task = response.find((item: any) => item.id === id);

  task.status = status;

  localStorage.setItem("list", JSON.stringify(response));

  store.update((s) => {
    s.isLoading = false;
    s.tasks = response;
  });
};

export const deleteTask = async (id: number) => {
  store.update((s) => {
    s.isLoading = true;
  });

  const request = localStorage.getItem("list");
  const response = request ? JSON.parse(request) : [];

  const task = response.find((item: any) => item.id === id);

  response.splice(response.indexOf(task), 1);

  localStorage.setItem("list", JSON.stringify(response));

  store.update((s) => {
    s.isLoading = false;
    s.tasks = response;
  });
};

export const deleteCompletedTasks = async () => {
  store.update((s) => {
    s.isLoading = true;
  });

  const request = localStorage.getItem("list");
  const response = request ? JSON.parse(request) : [];

  const tasks = response.filter((item: any) => item.status === false);

  localStorage.setItem("list", JSON.stringify(tasks));

  store.update((s) => {
    s.isLoading = false;
    s.tasks = tasks;
  });
};
