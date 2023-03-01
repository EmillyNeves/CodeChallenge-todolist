import FilterStore from ".";

export const setFilter = (filter: "all" | "active" | "completed") => {
  FilterStore.update((s) => {
    // eslint-disable-next-line no-param-reassign
    s.filter = filter;
  });
};
