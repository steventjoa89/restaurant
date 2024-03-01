import { create } from "zustand";

const useOrderStore = create((set) => ({
  orders: [],
  increment: (id) =>
    set((state) => {
      const existingItem = state.orders.find((item) => item.id === id);
      if (existingItem) {
        return {
          orders: state.orders.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      } else {
        return {
          orders: [...state.orders, { id, qty: 1 }],
        };
      }
    }),
  decrement: (id) =>
    set((state) => {
      const existingItem = state.orders.find((item) => item.id === id);
      if (existingItem && existingItem.qty > 1) {
        return {
          orders: state.orders.map((item) =>
            item.id === id ? { ...item, qty: item.qty - 1 } : item
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
