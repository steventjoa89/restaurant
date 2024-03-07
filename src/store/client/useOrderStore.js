import { create } from "zustand";

const useOrderStore = create((set) => ({
  orders: [],
  incrementOrder: (item) =>
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
  decrementOrder: (item) =>
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
  deleteOrder: (item) =>
    set((state) => {
      // const existingItem = state.orders.find((order) => order.id === item.id);
      return {
        orders: state.orders.filter((order) => order.id !== item.id),
      };
    }),
  clearOrders: () =>
    set(() => ({
      orders: [],
    })),
}));

export default useOrderStore;
