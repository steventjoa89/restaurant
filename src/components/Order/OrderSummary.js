import React from "react";
import OrderCard from "../OrderCard";
import useOrderStore from "../../store/client/useOrderStore";

function OrderSummary({ data }) {
  const { orders, increment, decrement } = useOrderStore();
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
            onIncClick={() => increment(order.id)}
            onDecClick={() => decrement(order.id)}
            {...data.menu.find((dt) => dt.id === order.id)}
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
