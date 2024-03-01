import { create } from "zustand";

const useOrderStore = create((set) => ({
  orders: [],
  increment: (item) =>
    set((state) => {
      const existingItem = state.orders.find((order) => order.id === item.id);
      if (existingItem) {
        return {
          orders: state.orders.map((order) =>
            order.id === item.id ? { ...order, qty: order.qty + 1 } : order
          ),
        };
      } else {
        return {
          orders: [...state.orders, { ...item, qty: 1 }],
        };
      }
    }),
  decrement: (item) =>
    set((state) => {
      const existingItem = state.orders.find((order) => order.id === item.id);
      if (existingItem && existingItem.qty > 1) {
        return {
          orders: state.orders.map((order) =>
            order.id === item.id ? { ...order, qty: order.qty - 1 } : order
          ),
        };
      } else {
        return {
          orders: state.orders.filter((order) => order.id !== item.id),
        };
      }
    }),
}));

export default useOrderStore;
