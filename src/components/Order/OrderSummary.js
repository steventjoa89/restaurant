import React from "react";
import OrderCard from "../OrderCard";
import useOrderStore from "../../store/client/useOrderStore";

function OrderSummary() {
  const { orders, incrementOrder, decrementOrder, deleteOrder } = useOrderStore();

  return (
    <div
      className="overflow-y-scroll h-screen hide-scrollbar"
      style={{ maxHeight: "55vh" }}
    >
      {orders.length > 0 ? (
        orders.map((order, i) => (
          <OrderCard
            key={i}
            {...order}
            onIncClick={() => incrementOrder(order)}
            onDecClick={() => decrementOrder(order)}
            onDelClick={() => deleteOrder(order)}
          />
        ))
      ) : (
        <span className="text-xs text-gray-500 italic mt-3">
          No item selected
        </span>
      )}
    </div>
  );
}

export default OrderSummary;
