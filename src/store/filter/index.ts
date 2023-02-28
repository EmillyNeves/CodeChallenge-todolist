import { Store } from "pullstate";

interface IFilter {
  filter: "all" | "active" | "completed";
}

const defaultStoreValue: IFilter = {
  filter: "all",
};

const FilterStore = new Store<IFilter>(defaultStoreValue);

export default FilterStore;
