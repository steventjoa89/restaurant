import create from "zustand";

const useOrderStore = create((set) => ({
  orders: [],
  increment: (id) =>
    set((state) => {
      const existingItem = state.orders.find((item) => item.id === id);
      if (existingItem) {
        return {
          orders: state.orders.map((item) =>
            item.id === id ? { ...item, total: item.total + 1 } : item
          ),
        };
      } else {
        return {
          orders: [...state.orders, { id, total: 1 }],
        };
      }
    }),
  decrement: (id) =>
    set((state) => {
      const existingItem = state.orders.find((item) => item.id === id);
      if (existingItem && existingItem.total > 1) {
        return {
          orders: state.orders.map((item) =>
            item.id === id ? { ...item, total: item.total - 1 } : item
          ),
        };
      } else {
        return {
          orders: state.orders.filter((item) => item.id !== id),
        };
      }
    }),
}));

export default useOrderStore;
