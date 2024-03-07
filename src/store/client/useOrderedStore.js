import { create } from "zustand";

// Define Zustand store
const useOrderedStore = create((set) => ({
  ordered: [],
  setOrdered: (orderedMenu) => set({ ordered: orderedMenu }),
  // Push new item into array
  addOrdered: (orderedMenu) =>
    set((state) => ({ ordered: [...state.ordered, ...orderedMenu] })),
}));

export default useOrderedStore;
