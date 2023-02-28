import { Store } from "pullstate";

import { IItem } from "../../@types/item";

interface ITask {
  isLoading: boolean;
  tasks: IItem[];
}

const defaultState: ITask = {
  isLoading: false,
  tasks: [],
};

export const taskStore = new Store<ITask>(defaultState);

export default { taskStore, key: "@tasks" };
