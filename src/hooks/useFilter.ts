import FilterStore from "@/store/filter";
import { setFilter } from "@/store/filter/actions";

export const useFilter = () => {
  FilterStore.useState((s) => ({
    ...s,
    setFilter,
  }));
};
